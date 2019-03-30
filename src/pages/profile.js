import React, {Component} from 'react'
import Header from '../components/header';
import {Layout} from 'antd';

const {Content} = Layout;
class Mod extends Component {
    render() {
        return (<React.Fragment>
            <Header/>
            <Content>
                <h3 style={{textAlign:'center'}}>敬请期待</h3>
                <div className="content-blur"/>
            </Content>
        </React.Fragment>);
    }
}

export default Mod;

