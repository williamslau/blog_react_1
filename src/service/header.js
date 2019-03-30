import {get} from './index'
const ENTITY='/api/classifies';
function getClassify(){
    return get(ENTITY);
}
export default{
    getClassify
}