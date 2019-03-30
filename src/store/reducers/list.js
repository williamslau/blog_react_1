import * as types from '../action-types'

const initState = {
    data: {
        items: [],
        pageNum: 1,
        pageSize: 0,
        total: 0,
    },
    lately:[],
    tags:[],
};

function reducer(state = initState, action) {
    switch (action.type) {
        case types.GET_LIST_DATA:
            return {...state,data: action.payload.data};
        case types.GET_LATELY_DATA:
            return {...state,lately:action.payload.data.items};
        case types.GET_TAGS_DATA:
            return {...state,tags:action.payload.data.items};
        default:
            return state;
    }
}

export default reducer;