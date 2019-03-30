import React, {Component} from 'react';
import {Row, Col, Tag, Pagination} from 'antd';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import listAction from '../store/actions/list';
import headerAction from '../store/actions/header';
import moment from 'moment';
require('moment/locale/zh-cn.js');

class List extends Component {
    componentDidMount() {
        if(this.props.match.path !== '/search'){
            this.gitList({
                current: 1,
                pageSize: 5,
                link: this.props.match.params.id
            });
        }
    }
    gitList = async (data) => {
        await this.props.getListData(data);
    };
    paginationChange = (page, pageSize) => {
        this.gitList({
            current: page,
            pageSize: 5,
            link: this.props.match.params.id
        })
    };
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.keyword);
    // }
    // componentDidUpdate(keyword){
    //     console.log(keyword);
    //
    // }
    handleClick = (id) => {
        this.props.history.push(`/article/${id}`);
    };
    render() {
        return (<div>
            <ul className="list">
                {this.props.data.items.map((item, index) => (
                    <li key={index} className="list-li" onClick={()=>this.handleClick(item._id)}>
                        <Tag className="label">{item.category.name}</Tag>
                        <Row>
                            <Col span={24} className="txt-box">
                                <h2>{item.title}</h2>
                                <div>
                                    <span>{moment(item.createAt).format('LL')}</span>
                                    <span>阅读量: {item.pv}</span>
                                </div>
                            </Col>
                            {/*<Col span={6}>*/}
                                {/*<div className="img-box">*/}
                                    {/*<img src={dm}/>*/}
                                {/*</div>*/}
                            {/*</Col>*/}
                        </Row>
                    </li>
                ))}
            </ul>
            <Pagination current={this.props.data.pageNum} pageSize={5} total={this.props.data.total}
                        onChange={this.paginationChange}/>
        </div>);
    }
}

// export default connect(state => ({
//     keyword: state.header.keyword,
// }), actions)(List);
export default connect(state => ({
    data:state.list.data,
}), dispatch => ({
    getListData: data => dispatch(listAction.getListData(data)),
    searchChange: data => dispatch(headerAction.searchChange(data))
}))(withRouter(List));