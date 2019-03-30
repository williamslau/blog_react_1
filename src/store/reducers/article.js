import * as types from '../action-types'
const initState={
    content:{
        category:{
            name:'',
            _id:'',
        },
        classify:{
            name:'',
            _id:''
        },
        comments:[],
        content:'',
        createAt:'',
        pv:0,
        title:'',
    },
    toggle:false,
};
function reducer(state=initState,action){
    switch(action.type){
        case types.GET_ARTICLE:
            return{...state,content:action.payload.data};
        case types.ADD_PV:
            return{...state,pv:action.payload.data};
        case types.LOADING_TOGGLE:
            return{...state,toggle:action.loading};
        default:
            return state;
    }
}
export default reducer;