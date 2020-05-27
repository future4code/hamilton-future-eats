const initialState = {
    fullAddress: {},
    user: {}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case('SET_FULL_ADDRESS'): {
            return { ...state, fullAddress: action.payload.fullAddress}
        }
        case('SET_PROFILE'): {
            return { ...state, user: action.payload.user}
        }
        default:
            return state;
    }
}

export default user;