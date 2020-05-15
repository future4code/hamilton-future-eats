import axios from 'axios'
const token = localStorage.getItem("token")
const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

//Síncrona
export function setOrder(orderFromApi){
    return {
        type: 'SET_ORDER',
        payload: {
            orders: orderFromApi
        }
    }
}

export function setActiveOrder(activeOrderAPI){
    return {
        type: 'SET_ACTIVE_ORDER',
        payload: {
            activeOrders: activeOrderAPI
        }
    }
}

export function setOrdersHistory(ordersHistory){
    return {
        type: 'SET_ORDERS_HISTORY',
        payload: {
            ordersHistory: ordersHistory
        }
    }
}

//Assíncrona
export const placeOrder = (body, restaurantId) => async (dispatch) => {
    try {
        const response = await axios.post(
            `${baseUrl}/restaurants/${restaurantId}/order`, body, {
            headers: {
                auth: token,
            }
        }
        )
        dispatch(getActiveOrder())
    } catch (error) {
        console.error(error)
    }
}

export const getActiveOrder = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `${baseUrl}/active-order`, {
            headers: {
                auth: token,
            }
        }
        )
        dispatch(setActiveOrder(response.data.order))
    } catch (error) {
        console.error(error)
    }
}

export const ordersHistory = () => async (dispatch) => {
    try{
        const response = await axios.get(
            `${baseUrl}/orders/history`, {
                headers: {
                    auth: token,
                }
            }
        )
        dispatch(setOrdersHistory(response.data.orders))
    }catch (error) {
        console.error(error)
    }
}