const initialState = {
    currentPage: 1
}


const page = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_CURRENT_PAGE'): {
            return { ...state, currentPage: action.payload.currentPage }
        }
        default:
            return state;
    }

}

export default page;