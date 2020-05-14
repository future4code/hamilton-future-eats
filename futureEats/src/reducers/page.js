const initialState = {
    currentPage: 1,
    currentSearch: ""
}


const page = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_CURRENT_PAGE'): {
            return { ...state, currentPage: action.payload.currentPage }
        }
        case ('SET_SEARCH'):{
            return { ...state, currentSearch: action.payload.currentSearch}
        }
        default:
            return state;
    }

}

export default page;