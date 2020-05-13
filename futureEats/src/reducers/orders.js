const initialState = {
    orders: [],
    ordersHistory: []
}

const orders = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ('SET_ACTIVE_ORDER'): {
            return { ...state, orders: action.payload.orders}
        }
        case ('SET_ORDERS_HISTORY'): {
            return { ...state, ordersHistory: action.payload.ordersHistory}
        }

        default:
            return state;
    }
}

export default orders