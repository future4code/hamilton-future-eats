

export function setCurrentPage (currentPage) {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    }
}

export function setSearch (searchFromInput){
    return{
        type: 'SET_SEARCH',
        payload:{
            currentSearch: searchFromInput
        }
    }
}