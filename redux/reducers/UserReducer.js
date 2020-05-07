import * as Types from '../types';



var initialState = {
    loading_register: false,
    loading_update: false,
    loading_login: false,
    loading_getData: false,
    dataUser: {},
    error: '',
    error_login: '',
    error_update: '',


    is_login: false
};

const stateEmpty = {
    loading_register: false,
    loading_update: false,
    loading_login: false,
    loading_getData: false,
    dataUser: {},
    error: '',
    error_login: '',
    error_update: '',


    is_login: false
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
const users = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.LOG_OUT:
            state = stateEmpty
            return { ...state };
        case Types.CHECK_LOGIN:
            var dataOld = action.users
            if (dataOld && dataOld.is_login) {
                state = initialState
                state.is_login = dataOld.is_login
                state.dataUser = dataOld.dataUser
            }
            return { ...state };
        // singup
        case Types.REGISTER_USER:
            state.loading_register = true
            state.error = ''
            return { ...state };
        case Types.REGISTER_USER_SUCCESS:
            state.dataUser = action.dataUser
            state.is_login = true
            state.error = ''
            state.loading_register = false

            localStorage.setItem("users", JSON.stringify({
                dataUser: action.dataUser,
                is_login: true,
            }))
            return { ...state };
        case Types.REGISTER_USER_FAIL:
            state.error = action.error
            state.loading_register = false
            return { ...state };

        // login
        case Types.LOGIN_USER:
            state.loading_login = true
            state.error_login = ''
            return { ...state };
        case Types.LOGIN_USER_SUCCESS:
            state.dataUser = action.dataUser
            state.is_login = true
            state.error_login = ''
            state.loading_login = false

            localStorage.setItem("users", JSON.stringify({
                dataUser: action.dataUser,
                is_login: true,
            }))
            return { ...state };
        case Types.LOGIN_USER_FAIL:
            state.error_login = action.error
            state.loading_login = false
            return { ...state };

        //update
        case Types.UPDATE_USER:
            state.loading_update = true
            state.error_update = ''
            return { ...state };
        case Types.UPDATE_USER_SUCCESS:
            state.dataUser = action.dataUser
            state.is_login = true
            state.error_update = 'Lưu thành công'
            state.loading_update = false

            localStorage.setItem("users", JSON.stringify({
                dataUser: action.dataUser,
                is_login: true,
            }))
            return { ...state };
        case Types.UPDATE_USER_FAIL:
            state.error_update = action.error
            state.loading_update = false
            return { ...state };
        case Types.GET_DATA_USER:
            state.loading_getData = true
            return { ...state };
        case Types.GET_DATA_USER_SUCCESS:
            state.loading_getData = false
            return { ...state };
        case Types.GET_DATA_USER_FAIL:
            state.loading_getData = false
            return { ...state };




        default: return { ...state };
    }
}

export default users;