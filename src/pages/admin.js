import React, {Component} from 'react';

import {Row, Col, Layout} from 'antd';
import {Route, Switch} from 'react-router-dom';
import Header from '../components/header';
import Lately from '../components/lately';
import Tags from '../components/tags';
import Home from './home';
import Blog from './blog';
import Essay from './essay';
import Search from "./search";

const {Content} = Layout;

class Admin extends Component {
    render() {
        return (<React.Fragment>
            <Header/>
            <Content>
                <Row gutter={30}>
                    <Col span={16}>
                        <Switch>
                            <Route exact path='/admin/:id' component={Home}/>
                            <Route path="/admin/blog/:id" component={Blog}/>
                            <Route path="/admin/essay/:id" component={Essay}/>
                            <Route path='/search' component={Search}/>
                            <Route component={Home}/>
                        </Switch>
                    </Col>
                    <Col span={8}>
                        <Lately/>
                        <Tags/>
                    </Col>
                </Row>
                <div className="content-blur"/>
            </Content>
        </React.Fragment>);
    }
}

export default Admin;

