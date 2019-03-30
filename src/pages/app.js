import React, {Component} from 'react';
import {Router,Route, Redirect, Switch,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../store/actions/article';
import {Spin} from 'antd';
import Admin from './admin';
import Article from './article';
import Profile from './profile';

import createHistory from 'history/createHashHistory';
const history = createHistory();
history.listen(loc => {
    // console.log(loc);
});
class App extends Component {
    render() {
        return (<div>
            <Router history={history}>
                <Spin size="large" spinning={this.props.toggle}>
                    <Switch>
                        <Route path='/admin' component={Admin}/>
                        <Route path='/article/:id' component={Article}/>
                        <Route path='/profile' component={Profile}/>
                        <Route component={Admin}/>
                    </Switch>
                </Spin>
            </Router>
        </div>);
    }
}
export default connect(state=>{
    return{toggle:state.article.toggle}
},actions)(App);