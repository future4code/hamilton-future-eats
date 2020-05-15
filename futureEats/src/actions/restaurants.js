import axios from 'axios'
const getToken = () => localStorage.getItem("token");
const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

//Síncrona
export function setRestaurants (restaurantsFromApi) {
    return {
        type: 'SET_RESTAURANTS',
        payload: {
            restaurants: restaurantsFromApi
        }
    }
}

export function setRestaurantDetail (restaurantDetail) {
    return {
        type: 'SET_RESTAURANT_DETAIL',
        payload: {
            restaurantDetail: restaurantDetail
        }
    }
}
//Assíncrona
export const getRestaurants = () => async (dispatch) => {

    try {
        const response = await axios.get(
            `${baseUrl}/restaurants`, {
                headers: {
                    auth: getToken(),
                }
            });
        dispatch(setRestaurants(response.data.restaurants))
    } catch (error) {
        console.error(error);
    }
};

export const getRestaurantDetail = () => async (dispatch) => {
    try {
        const response = await axios.get(
            `${baseUrl}/restaurants/${3}`, {
                headers: {
                    auth: getToken(),
                }
            }
        )
        
        dispatch(setRestaurantDetail(response.data.restaurant))
    } catch (error) {
        console.error(error)
    }
}