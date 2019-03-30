import * as types from '../action-types'
import articleService from "../../service/list"

let actions = {
    getListData(data) {
        console.log(articleService.getList);
        return {
            type: types.GET_LIST_DATA,
            payload: articleService.getList(data)
        }
    },
    getTagsData() {
        return {
            type: types.GET_TAGS_DATA,
            payload: articleService.getCategory()
        }
    },
    getLately(){
        return {
            type:types.GET_LATELY_DATA,
            payload:articleService.getNewList()
        }
    }
};
export default actions;

