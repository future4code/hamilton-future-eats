import axios from 'axios'
import { routes } from "../containers/Router"
import { push } from "connected-react-router"

const getToken = () => localStorage.getItem("token");
const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

//Síncrona

export function setOrder(newOrder){
    return {
        type: 'SET_ORDER',
        payload: {
            orders: newOrder
        }
    }
}

export function setActiveOrder(activeOrderAPI, restaurantId){
    return {
        type: 'SET_ACTIVE_ORDER',
        payload: {
            activeOrder: activeOrderAPI,
            restaurantId: restaurantId
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
export const placeOrder = (ordersToPlace, restaurantId) => async (dispatch) => {

    try {
        await axios.post(
            `${baseUrl}/restaurants/${restaurantId}/order`, 
            ordersToPlace, {
                headers: {
                    auth: getToken(),
                }
            }
        )
        dispatch(setActiveOrder(ordersToPlace))
        dispatch(push(routes.feed))
      
    } catch (error) {
        console.error(error)
    }
}

export const getActiveOrder = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `${baseUrl}/active-order`, {
                headers: {
                auth: getToken(),
                }
            }
        )
        dispatch(setActiveOrder(response.data.order))
    } catch (error) {
        console.error(error)
    }
}

export const getOrdersHistory = () => async (dispatch) => {
    try{
        const response = await axios.get(
            `${baseUrl}/orders/history`, {
                headers: {
                    auth: getToken(),
                }
            }
        )
        dispatch(setOrdersHistory(response.data.orders))
    }catch (error) {
        console.error(error)
    }
}