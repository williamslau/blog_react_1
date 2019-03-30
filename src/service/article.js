import {post,get} from './index';
const ENTITY='/api/articles/';
function getArticle(data){
    return post(`${ENTITY}getArticles/${data}`);
}
function addPv(id){
    return get(`${ENTITY}pv/${id}`);
}
export default {
    getArticle,
    addPv
}