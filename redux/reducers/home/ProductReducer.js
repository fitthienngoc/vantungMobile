import * as Types from '../../types';



var initialState = {
    loading_bannerSlide: false,
    dataBannerSlide: {
        data_banner1: [],
        data_banner2: []
    },
    productDetail: {
        data: {},
        isFetching: false
    },
    productComment: {
        data: [],
        isFetching: false
    },
    loadingComment: false,
    dataDetailOrder: {}
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
const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.SEND_COMMENT_PRODUCT_REQUEST:
            state.loadingComment = true
            return { ...state };
        case Types.GET_PRODUCTS_BANNER_SLIDE:
            state.loading_bannerSlide = true
            return { ...state };
        case Types.GET_PRODUCTS_BANNER_SLIDE_SUCCESS:
            state.dataBannerSlide = action.data
            state.loading_bannerSlide = false
            return { ...state };
        case Types.GET_PRODUCTS_BANNER_SLIDE_FAIL:
            state.loading_bannerSlide = false
            return { ...state };

        case Types.LOAD_DATA_PRODUCT_REQUEST:
            state.error = ''
            state.productDetail.isFetching = true;
            return { ...state };
        case Types.LOAD_DATA_PRODUCT_FAIL:
            state.error = action.error;
            state.productDetail.isFetching = false;
            return { ...state };

        case Types.LOAD_DATA_PRODUCT_SUCCESS:
            state.productComment = action.data_comment
            state.productDetail.data = action.dataProduct
            state.error = '';
            state.productDetail.isFetching = false;
            return { ...state };

        case Types.SEND_COMMENT_PRODUCT_SUCCESS:
            state.loadingComment = false
            state.error = "success"
            return { ...state };
        case Types.SEND_COMMENT_PRODUCT_SUCCESS:
            state.loadingComment = false
            state.error = error
            return { ...state };
        case Types.GET_ORDER_DETAIL_REQUEST:
            state.loadingDetailOrder = true
            state.error = ''
            return { ...state };
        case Types.GET_ORDER_DETAIL_SUCCESS:
            state.dataDetailOrder = action.data
            state.loadingDetailOrder = false
            return { ...state };
        case Types.GET_ORDER_DETAIL_FAIL:
            state.loadingDetailOrder = false
            return { ...state };
        default: return { ...state };
    }
}

export default products;