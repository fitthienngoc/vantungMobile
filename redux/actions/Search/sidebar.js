import * as Types from '../../types';
import HTTP from '../../../services/HTTP';
import Router from 'next/router';
import authHeader from '../../../helpers/authHeader';
import { getDateTime, getAllUrlParams } from '../../../helpers/getDateTime';
// import history from '../../helpers/history';
import { useRouter } from 'next/router'

export const actGetSidebar = () => {
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.GET_SIDEBAR_REQUEST });
        return HTTP(`?action=getSidebar`, 'GET', null, header).then(res => {
            // console.log(res);
            if (res && !res.data) { Router.push({ pathname: '/404' }) }
            if (res && res.data && res.data.status == 200) {
                dispatch({ type: Types.GET_SIDEBAR_SUCCESS, data: res.data });
            }
            if (res && res.data.status == 202) {
                dispatch({ type: Types.GET_SIDEBAR_FAIL, error: res.data.error });
            }

        });
    }
}

export const actSearchByIdCategory = (router, id = -1, search = '', page = 1, limit = 9, listId,price='0 AND 1000000000') => {

    var header = authHeader();
    console.log(`router`, router);
    limit == '' ? limit = 9 : null
    if (router && router.asPath) {
        var { asPath } = router
       
        
        search = getAllUrlParams(asPath).search
        page = getAllUrlParams(asPath).page
        price = getAllUrlParams(asPath).price

        search == undefined ? search = '' : null
        page == undefined ? page = '' : null
        price == undefined ? price = '' : null
        console.log('                                                          ',price);
    }

    if (router && router.query) {
        var { query } = router
    }
    if (query && query.id_categorie) {
        id = query.id_categorie
    }

    return dispatch => {
        dispatch({ type: Types.GET_SEARCH_BY_ID_CATEGORY_REQUEST });
        return HTTP('?action=search&id_categorie=' + id + '&search=' + search + '&page=' + page + '&limit=' + limit+ '&price=' + price, 'GET', listId, header).then(res => {
            if (res && res.data && res.data.status == 200) {
                dispatch({ type: Types.GET_SEARCH_BY_ID_CATEGORY_SUCCESS, data: res.data.data });

            }
            if (res && res.data && res.data.status == 300) {
                dispatch({ type: Types.GET_SEARCH_BY_ID_CATEGORY_FAIL, error: res.data.error });
                history.push("/permission")

            }


        });
    };
}





