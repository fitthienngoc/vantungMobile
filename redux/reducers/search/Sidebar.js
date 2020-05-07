import * as Types from '../../types';



var initialState = {
    loadding: false,
    data: [],

};






var findIndex = (lists, id) => {
    var result = -1;
    lists.forEach((e, index) => {
        if (e.IdNow === id) {
            result = index;
            return result;
        }
    });
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.GET_SIDEBAR_REQUEST:
            state.loadding = true
            return { ...state };
        case Types.GET_SIDEBAR_SUCCESS:
            state.data = action.data
            state.loadding = false
            return { ...state };
        case Types.GET_SIDEBAR_FAIL:
            state.loadding = false
            state.error = action.error
            return { ...state };


        default: return { ...state };
    }
}

export default products;