import * as Types from '../../types';
import HTTP from '../../../services/HTTP';
import Router from 'next/router';
import authHeader from '../../../helpers/authHeader';
import { getDateTime } from '../../../helpers/getDateTime';
// import history from '../../helpers/history';

// gets token from the api and stores it in the redux store and in cookie
export const actSendCommentProduct = (data) => {
    // data.time = Date.now()
    data.time = getDateTime()
    var header = authHeader();
    // console.log(`data`, data);
    return dispatch => {
        dispatch({ type: Types.SEND_COMMENT_PRODUCT_REQUEST });
        return HTTP(`?action=send-comment`, 'POST', data, header).then(res => {
            // console.log(`res`, res);
            if (res.data.status == 200) {
                dispatch({ type: Types.SEND_COMMENT_PRODUCT_SUCCESS, dataUser: res.data })
            }
            if (res.data.status == 202) {
                dispatch({ type: Types.SEND_COMMENT_PRODUCT_FAIL, error: res.data.error })
                // Router.push({ pathname: '/'})
            }
            if (res.data.status == 404) {
                Router.push({ pathname: '/404' })

            }
        });
    };
}

export const actGetProductBannerSlide = (body) => {
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.GET_PRODUCTS_BANNER_SLIDE });
        return HTTP(`?action=bannerSlide`, 'GET', null, header).then(res => {
            console.log(`res`, res);
            if (res && res.data) {
                if (res.data.status == 200) {
                    dispatch({ type: Types.GET_PRODUCTS_BANNER_SLIDE_SUCCESS, data: res.data.data })

                }
                if (res.data.status == 201) {
                    dispatch({ type: Types.GET_PRODUCTS_BANNER_SLIDE_FAIL, error: res.data.error })
                    // Router.push({ pathname: '/'})
                }
                if (res.data.status === 404) {

                    Router.push({ pathname: '/404' })
                }
            } else { Router.push({ pathname: '/404' }) }
        });
    };
}
export const actAddProductToCart = (data) => {
    return dispatch => {
        dispatch({ type: Types.ADD_PRODUCT_TO_CART, data });
    };
}
export const actUpdateProductInCart = (data) => {
    console.log(`dataxx`, data);
    return dispatch => {
        dispatch({ type: Types.UPDATE_PRODUCT_TO_CART, data });
    };
}

export const actRemoveProductInCart = (Id) => {
    return dispatch => {
        dispatch({ type: Types.REMOVE_PRODUCT_IN_CART, Id });
    };
}


export const actCheckCart = () => {
    var cart = JSON.parse(localStorage.getItem('cart'))
    // console.log(cart)
    return dispatch => {
        cart ? dispatch({ type: Types.CHECK_CART, cart }) : null
    };
}

export const actSaveOrder = (data) => {
    var { orderOnline } = data
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.SAVE_ORDER_REQUEST });
        return HTTP(`?action=saveOrder`, 'POST', { data }, header).then(res => {
            if (res && !res.data) { Router.push({ pathname: '/404' }) }
            if (res && res.data && res.data.status == 200) {
                dispatch({ type: Types.SAVE_ORDER_SUCCESS, Id: res.data.Id });
                orderOnline == 1 ? null : setTimeout(Router.push({ pathname: '/' }), 10000)
            }
            if (res && res.data.status == 202) {
                dispatch({ type: Types.SAVE_ORDER_FAIL, error: res.data.error });
            }

        });
    }
}

export const actGetProduct = (id) => {
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.LOAD_DATA_PRODUCT_REQUEST });
        return HTTP(`?action=editProduct&Id=${id}`, 'GET', null, header).then(res => {
            console.log(res);
            if (res && !res.data) { Router.push({ pathname: '/404' }) }
            if (res && res.data && res.data.status == 200) {
                var product = res.data.dataProduct
                var data_comment = res.data.data_comment
                dispatch({ type: Types.LOAD_DATA_PRODUCT_SUCCESS, dataProduct: product, data_comment });
            }
            if (res && res.data.status == 202) {
                dispatch({ type: Types.LOAD_DATA_PRODUCT_FAIL, error: res.data.error });
            }

        });
    }
}
export const actGetOrderDetail = (id) => {
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.GET_ORDER_DETAIL_REQUEST });
        return HTTP(`?action=getOrder&id=${id}`, 'GET', null, header).then(res => {
            console.log(res);
            if (res && !res.data) { Router.push({ pathname: '/404' }) }
            if (res && res.data && res.data.status == 200) {

                dispatch({ type: Types.GET_ORDER_DETAIL_SUCCESS, data: res.data.orderDetail });
            }
            if (res && res.data.status == 202) {
                dispatch({ type: Types.GET_ORDER_DETAIL_FAIL, error: res.data.error });
            }

        });
    }
}



