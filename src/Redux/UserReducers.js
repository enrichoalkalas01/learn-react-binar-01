let UserDataReducers = {
    LoginStatus: false,
    UserData: null,
}

const DataReducers = ( state = UserDataReducers, action ) => {
    switch(action.type) {
        case "LOGIN_STATUS" : {
            return {
                ...state,
                LoginStatus: action.payload,
            }
        }

        case "USER_DATA_CHANGE": {
            return {
                ...state,
                UserData: action.payload
            }
        }

        default: 
            return state
    }
}

export default DataReducers