import {get} from './index'
const ENTITY='/api/list/';
function getList({current = 1, pageSize = 5, keyword = '',link='',category=''}){
    return get(`${ENTITY}getList?pageNum=${current}&pageSize=${pageSize}&keyword=${keyword}&link=${link}&category=${category}`);
}
function getNewList(){
    return get(`${ENTITY}getNewList`);
}
function getCategory(){
    return get(`${ENTITY}getCategory`);
}
export default {
    getList,
    getNewList,
    getCategory
}