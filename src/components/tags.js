import React, {Component} from 'react';
import Frame from './frame';
import {withRouter} from "react-router-dom";
import {Tag} from 'antd';
import {connect} from 'react-redux';
import actions from '../store/actions/list';

class Tags extends Component {
    async componentWillMount() {
        await this.props.getTagsData();
    }
    handleClick = async id => {
        if (this.props.history.location.pathname !== '/search') {
            this.props.history.push('/search');
        }
        await this.props.getListData({
            current: 1,
            pageSize: 5,
            category: id,
        });
        this.props.carousel.goTo(4);
    };
    render() {
        return (<div className="tags">
            {
                this.props.tags.map((item, index) => (<Tag key={index} onClick={()=>this.handleClick(item._id)}>{item.name}</Tag>))
            }
        </div>);
    }
}

const Table = Frame('标签')(connect(state => ({
    tags: state.list.tags,
    carousel: state.header.carousel,
}), actions)(withRouter(Tags)));
export default Table;