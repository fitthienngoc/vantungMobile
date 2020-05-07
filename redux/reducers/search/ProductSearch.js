import * as Types from '../../types';



var initialState = {
    loading:false,
    data:[]
};




var findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
        if (user.Id === id) {
            result = index;
            return result;
        }
    });
    return result;
}
const productSearch = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.GET_SEARCH_BY_ID_CATEGORY_REQUEST:
            state.loading = true
            return { ...state };
        case Types.GET_SEARCH_BY_ID_CATEGORY_SUCCESS:
            // console.log(`actionXXX`, action);
            state.data = action.data
            state.loading = false
            return { ...state };
        case Types.GET_SEARCH_BY_ID_CATEGORY_FAIL:
            state.loading = false
            return { ...state };

        default: return { ...state };
    }
}

export default productSearch;