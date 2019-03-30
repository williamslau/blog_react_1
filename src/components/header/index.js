import React, {Component} from 'react'
import {Row, Col, Input} from 'antd'
import {withRouter} from "react-router-dom"

import {connect} from 'react-redux'
import listAction from '../../store/actions/list'
import headerAction from '../../store/actions/header'
import Menu from './menu'
import Banner from './banner'

class Head extends Component {
    state = {
        scrollLeft: {left: 0},
        class:['admin-header'],
    };
    handleSearch = async keyword => {
        if (this.props.history.location.pathname !== '/search') {
            this.props.history.push('/search');
        }
        await this.props.getListData({
            current: 1,
            pageSize: 5,
            keyword: keyword,
        });

        this.props.carousel.goTo(4);
    };
    handleChange = (e) => {
        this.props.searchChange(e.target.value);
        console.log(e.target.value);
    };

    componentDidMount() {
        this.setState({
            scrollLeft: {left: window.scrollX},
        });
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        console.log(window.scrollY);
        if(window.scrollY>200){
            this.setState({
                class:['admin-header','action']
            });
        }else{
            this.setState({
                class:['admin-header']
            });
        }
        this.setState({
            scrollLeft: {left: -window.scrollX},
        });
    };


    render() {
        return (<div className="admin-header-box">
            <div className={this.state.class.join(' ')} style={this.state.scrollLeft}>
                <Row className="admin-header-child">
                    <Col span={10}>
                        {/*<h1 className="header_bt">大志</h1>*/}
                        <img src="https://williamlau.oss-cn-beijing.aliyuncs.com/images/log.png" alt=""/>
                    </Col>
                    <Col span={14}>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Input.Search
                                    plageholder="请输入关键字"
                                    value={this.props.inputVal}
                                    onChange={this.handleChange}
                                    onSearch={this.handleSearch}
                                />
                            </Col>
                            <Col span={12}>
                                <Menu/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Banner/>
        </div>);
    }
}

// export default connect(state=>({
//     inputVal:state.header.inputVal,
// }),actions)(withRouter(Head));
export default connect(state => ({
    inputVal: state.header.inputVal,
    carousel: state.header.carousel,
}), dispatch => ({
    searchChange: data => dispatch(headerAction.searchChange(data)),
    getListData: data => dispatch(listAction.getListData(data))
}))(withRouter(Head));