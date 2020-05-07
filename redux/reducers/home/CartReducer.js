import * as Types from '../../types';



var initialState = {
    loading_add: false,
    data: [],
    alert_add: '',
    total: 0,
    totalNotSale: 0
};



var get_Total = (data) => {
    let total = 0
    if (data.length > 0) {
        data.map((e, i) => {
            let giaGoc = e.system
            let sale = e.screen
            let soLuong = e.quality_by
            let gia_curent = giaGoc * soLuong - giaGoc * soLuong * sale / 100
            total = total + gia_curent
        });

    }
    return total
}

var get_Total_NotSale = (data) => {
    let total = 0
    if (data.length > 0) {
        data.map((e, i) => {
            let giaGoc = e.system

            let soLuong = e.quality_by
            let gia_curent = giaGoc * soLuong
            total = total + gia_curent
        });

    }
    return total
}


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
        case Types.UPDATE_PRODUCT_TO_CART:
            index = -1
            let product = action.data
            index = findIndex(state.data, product.IdNow)
            state.data[index] = product
            state.total = get_Total(state.data)
            state.totalNotSale = get_Total_NotSale(state.data)
            localStorage.setItem('cart', JSON.stringify(state))
            return { ...state };
        case Types.ADD_PRODUCT_TO_CART:
            let newProduct = action.data
            newProduct.IdNow = Date.now()
            let data = JSON.parse(localStorage.getItem('cart'))
            if (!data) data = {
                data: []
            }
            data.data.push(newProduct)
            state.data = data.data
            state.total = get_Total(data.data)
            state.totalNotSale = get_Total_NotSale(data.data)
            localStorage.setItem('cart', JSON.stringify(state))

            return { ...state };
        case Types.REMOVE_PRODUCT_IN_CART:
            var { Id } = action
            index = findIndex(state.data, Id)
            state.data.splice(index, 1)
            state.total = get_Total(state.data)
            state.totalNotSale = get_Total_NotSale(state.data)
            localStorage.setItem('cart', JSON.stringify(state))
            return { ...state };
        case Types.CHECK_CART:
            console.log(`cart`, action.cart);
            if (action.cart) state = action.cart
            return { ...state };
        case Types.SAVE_ORDER_REQUEST:
            console.log(`cart`, action.cart);
            if (action.cart) state = action.cart
            return { ...state };
        case Types.SAVE_ORDER_SUCCESS:
            state = initialState
            localStorage.setItem('cart', JSON.stringify(state))
            return { ...state };

        default: return { ...state };
    }
}

export default products;