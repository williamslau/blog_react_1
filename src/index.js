import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './style/common.less';
import App from './pages/app';
// import createHistory from 'history/createHashHistory';
// const history = createHistory();
// history.listen(loc => {
//     // console.log(loc);
// });
render(<Provider store={store}>
        <App/>
</Provider>, window.root);