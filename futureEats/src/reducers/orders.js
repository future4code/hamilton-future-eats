const initialState = {
    orders: [
        {
            category: 'Refeição',
            description: 'A tradição italiana na sua casa',
            id: 'FcAp6stw4Essna5JdTKS',
            name: 'Penne do Campo',
            photoUrl: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/1b7b1a90-043d-45d6-9932-2903b304b956/201905291247_x5ae_c.jpg',
            price: 32,
        }
    ],
    ordersHistory: [],
    activeOrder: []
}

const orders = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_ORDER'): {
            console.log(action)
            return { ...state, orders: action.payload.order}
        }
        case ('SET_ACTIVE_ORDER'): {
            return { ...state, activeOrder: action.payload.activeOrder}
        }
        case ('SET_ORDERS_HISTORY'): {
            return { ...state, ordersHistory: action.payload.ordersHistory}
        }
        
        default:
            return state;
    }
}

export default orders