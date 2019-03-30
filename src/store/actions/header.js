import * as types from '../action-types'
import classifyService from "../../service/header"

let actions = {
    bannerRef(carousel) {
        return {type: types.BANNER_REF, carousel};
    },
    getBannerData() {
        return {
            type: types.GET_BANNER_DATA,
            payload: classifyService.getClassify()
        }
    },
    searchChange(inputVal) {
        return {type: types.SEARCH_CHANGE, inputVal};
    }
};
export default actions;