import React, {Component} from 'react';
import Frame from './frame';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import actions from '../store/actions/list';

class olList extends Component {
    async componentWillMount() {
        await this.props.getLately();
    }
    handleClick = (id) => {
        this.props.history.push(`/article/${id}`);
    };
    render() {
        return (<ol>
            {
                this.props.lately.map((item,index)=>(<li onClick={()=>this.handleClick(item._id)} key={index}>{item.title}</li>))
            }
        </ol>)
    }
}
const Latelly =Frame('最近文章')(connect(state => ({lately:state.list.lately}), actions)(withRouter(olList)));
export default Latelly;