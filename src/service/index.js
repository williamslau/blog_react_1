import axios from 'axios';
import actions from '../store/actions/article';
import store from '../store';

const axiosService = axios.create();
// 请求拦截（配置发送请求的信息）

axiosService.interceptors.request.use(function (config){
    // 处理请求之前的配置
    store.dispatch(actions.logingToggle(true));
    return config;
}, function (error){
    // 请求失败的处理
    return Promise.reject(error);
});


// 响应拦截（配置请求回来的信息）
axiosService.interceptors.response.use(function (response){
    // 处理响应数据
    store.dispatch(actions.logingToggle(false));
    return response;
}, function (error){
    // 处理响应失败
    return error;
});
const baseURL = 'http://39.106.133.41:7001';
const config = {
    baseURL,
    timeout: 8000,
    withCredentials: true,
};
export function get(url,data) {
    return axiosService({
        ...config,
        method: 'get',
        url,
        data,
    }).then(res => res.data);
}
export function post(url, data) {
    return axiosService({
        ...config,
        method: 'post',
        url,
        data,
    }).then(res =>  res.data);
}
export function put(url, data) {
    return axiosService({
        ...config,
        method: 'put',
        data,
        url,
    }).then(res => res.data);
}
export function del(url, data) {
    return axiosService({
        ...config,
        method: 'delete',
        url,
        data,
    }).then(res => res.data);
}