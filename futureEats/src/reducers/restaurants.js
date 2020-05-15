const initialState = {
    restaurants: [],
    restaurantDetail: []
}

const restaurants = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_RESTAURANTS'): {
            return { ...state, restaurants: action.payload.restaurants}
        }
        case ('SET_RESTAURANT_DETAIL'): {
            return { ...state, restaurantDetail: action.payload.restaurantDetail}
        }
        default:
            return state;
    }

}

export default restaurants;