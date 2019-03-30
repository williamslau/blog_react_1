import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/header'
import {Menu} from 'antd'

class Mod extends Component {
    handleClick = (e) => {
        this.props.carousel.goTo(e.key);
    };

    async componentWillMount() {
        await this.props.getBannerData();
    }

    render() {
        return (<Menu
            mode="horizontal"
            // defaultSelectedKeys={['0']}
            onClick={this.handleClick}
            style={{lineHeight: '64px'}}
        >
            <Menu.Item key="0">
                <Link to="/admin">首页</Link>
            </Menu.Item>
            {
                this.props.bannerData.map((item, index) => (
                    <Menu.Item key={index + 1}>
                        <Link to={`/admin/${item.link}/${item._id}`}>{item.name}</Link>
                    </Menu.Item>
                ))
            }
            <Menu.Item key="3">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
        </Menu>);
    }
}

export default connect(state => ({
    carousel: state.header.carousel,
    bannerData: state.header.bannerData,
}), actions)(Mod);