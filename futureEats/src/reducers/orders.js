const initialState = {
    orders: [],
    ordersHistory: [],
    activeOrder: [
    ]
}

const orders = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_ORDER'): {
            return { ...state, orders: [...state.orders, action.payload.orders]}
        }
        case ('SET_ACTIVE_ORDER'): {
            return { ...state, activeOrder: action.payload.activeOrder,}
        }
        case ('SET_ORDERS_HISTORY'): {
            return { ...state, ordersHistory: action.payload.ordersHistory}
        }
        
        default:
            return state;
    }
}

export default orders