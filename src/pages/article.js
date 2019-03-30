import React, {Component} from 'react';
import Header from '../components/header';
import {Row, Col, Tag, Layout} from 'antd';
import {connect} from 'react-redux'
import actions from '../store/actions/article'
import moment from 'moment';

require('moment/locale/zh-cn.js');
const {Content} = Layout;

class Article extends Component {
    async componentWillMount(){
        let query = this.props.match.params.id;
        await this.props.getArticle(query);
        await this.props.addPv(query);
        console.log(this.props.pv);
    }
    render() {
        return (<React.Fragment>
            <Header/>
            <Content>
                <div>
                    <h1>{this.props.content.title}</h1>
                    <h5 className="clearfix content-text">
                        <b className="fl">{this.props.content.classify.name}</b>
                        <Tag className="fl">{this.props.content.category.name}</Tag>
                        <span className="fl">{moment(this.props.content.createAt).format('LL')}</span>
                        <span className="fl">阅读量: {this.props.content.pv}</span>
                    </h5>
                    <div className="content" dangerouslySetInnerHTML={{
                        __html: this.props.content.content
                    }}/>
                </div>
                <div className="content-blur"/>
            </Content>
        </React.Fragment>);
    }
}

export default connect(state=>({
    content:state.article.content,
    pv:state.article.pv,
}),actions)(Article);