import * as types from '../action-types'

const initState = {
    bannerData:[],
};

function reducer(state = initState, action) {
    switch (action.type) {
        case types.BANNER_REF:
            return {...state, carousel: action.carousel};
        case types.GET_BANNER_DATA:
            return {...state, bannerData: action.payload.data.items};
        case types.SEARCH_CHANGE:
            return {...state, inputVal: action.inputVal};
        default:
            return state;
    }
}

export default reducer