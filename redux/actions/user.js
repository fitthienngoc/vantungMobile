import * as Types from '../types';
import HTTP from '../../services/HTTP';
import Router from 'next/router';
import authHeader from '../../helpers/authHeader';
// import history from '../../helpers/history';

// gets token from the api and stores it in the redux store and in cookie
export const actRegister = (body) => {
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.REGISTER_USER });
        return HTTP(`?action=register&name=${body.name_}&email=${body.email}&password=${body.password}&phone=${body.phone}`, 'GET', null, header).then(res => {

            if (res.data.status == 200) {
                dispatch({ type: Types.REGISTER_USER_SUCCESS, dataUser: res.data.dataUser })

            }
            if (res.data.status == 201) {
                dispatch({ type: Types.REGISTER_USER_FAIL, error: res.data.error })
                // Router.push({ pathname: '/'})
            }
            if (res.data.status === 404) {

                Router.push({ pathname: '/404' })
            }
        });
    };
}

export const actLogin = (body) => {
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.LOGIN_USER });
        return HTTP(`?action=login&email=${body.email}&password=${body.password}`, 'GET', null, header).then(res => {
            if (res.data.status == 200) {
                dispatch({ type: Types.LOGIN_USER_SUCCESS, dataUser: res.data.dataUser })


            }
            if (res.data.status == 202) {
                dispatch({ type: Types.LOGIN_USER_FAIL, error: res.data.error })
                // Router.push({ pathname: '/'})
            }
            if (res.data.status == 404) {
                Router.push({ pathname: '/404' })

            }
        });
    };
}

export const actUpdateUser = (body) => {
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.UPDATE_USER });
        return HTTP(`?action=updateUser&name=${body.name_}&email=${body.email}&password=${body.password}&phone=${body.phone}`, 'POST', null, header).then(res => {
            console.log(`res`, res);
            if (res.data.status == 200) {
                dispatch({ type: Types.UPDATE_USER_SUCCESS, dataUser: res.data.dataUser })

            }
            if (res.data.status == 201) {
                dispatch({ type: Types.UPDATE_USER_FAIL, error: res.data.error })
                // Router.push({ pathname: '/'})
            }
            if (res.data.status === 404) {

                Router.push({ pathname: '/404' })
            }
            if (res.data.status == 300) {
                dispatch(actLogOut())
                Router.push({ pathname: '/home' })
            }
        });
    };
}

export const actGetDataUser = (id = '') => {
    var header = authHeader();
    return dispatch => {
        dispatch({ type: Types.GET_DATA_USER });
        return HTTP(`?action=getDataUser&id_user=${id}`, 'GET', null, header).then(res => {
            // console.log(`res`, res);
            if (res.data.status == 200) {
                localStorage.setItem("users", JSON.stringify({
                    dataUser: res.data.dataUser,
                    is_login: true,
                }))
                dispatch({ type: Types.GET_DATA_USER_SUCCESS, dataUser: res.data.dataUser })

            }
            if (res.data.status == 201) {
                dispatch({ type: Types.GET_DATA_USER_FAIL, error: res.data.error })
                // Router.push({ pathname: '/'})
            }
            if (res.data.status === 404) {

                Router.push({ pathname: '/404' })
            }
            if (res.data.status == 300) {
                dispatch(actLogOut())
                Router.push({ pathname: '/home' })
            }
        });
    };
}

export const actCheckLogin = () => {
    var users = JSON.parse(localStorage.getItem('users'))
    console.log('users', users)
    return dispatch => {
        if (users) {
            dispatch({ type: Types.CHECK_LOGIN, users })
            dispatch(actGetDataUser(users.dataUser.id_user))
        }
    };
}

export const actLogOut = () => {
    localStorage.setItem("users", null)
    return dispatch => {
        dispatch({ type: Types.LOG_OUT })
        Router.push({ pathname: '/' })
    };
}


