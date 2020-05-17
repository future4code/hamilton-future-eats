import { setRestaurants, setRestaurantDetail, getRestaurants } from '../actions/restaurants'
import axios from 'axios'

describe("Restaurants Actions", () => {
    test("Pega os Restaurantes", () => {
        const mockRestaurants = {
            "restaurants": [
                {
                    "id": "1",
                    "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                    "shipping": 6,
                    "address": "Rua das Margaridas, 110 - Jardim das Flores",
                    "name": "Habibs",
                    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
                    "deliveryTime": 60,
                    "category": "Árabe"
                }
            ]
        }

        const action = setRestaurants(mockRestaurants)

        expect(action.type).toBe("SET_RESTAURANTS")
        expect(action.payload.restaurants).toBe(mockRestaurants)
    })
    test("Pega os detalhes do restaurante", () => {
        const mockRestaurantDetail = {
            "restaurant": {
                "products": [
                    {
                        "id": "2wvQI3i8Zf2fMvkEq4Vo",
                        "category": "Refeição",
                        "price": 24.3,
                        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/51fed2ca-70a6-4069-a203-65536c856035/201808311212_sashi.png",
                        "name": "Sashimi Shiromi",
                        "description": "A melhor pedida é japonesa!"
                    }
                ]
            }
        }

        const action = setRestaurantDetail(mockRestaurantDetail)

        expect(action.type).toBe("SET_RESTAURANT_DETAIL")
        expect(action.payload.restaurantDetail).toBe(mockRestaurantDetail)
    })
    
})