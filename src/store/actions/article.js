import * as types from '../action-types'
import articleService from "../../service/article"
let actions={
    getArticle(id){
        return{
            type:types.GET_ARTICLE,
            payload:articleService.getArticle(id)
        }
    },
    addPv(id){
        return{
            type:types.ADD_PV,
            payload:articleService.addPv(id)
        }
    },
    logingToggle(toggle){
        return{
            type:types.LOADING_TOGGLE,
            loading:toggle,
        }
    }
};
export default actions;