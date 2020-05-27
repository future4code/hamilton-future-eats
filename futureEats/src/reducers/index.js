import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import page from './page'
import restaurants from './restaurants'
import orders from './orders'
import user from './user'


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    page: page,
    restaurants: restaurants,
    orders: orders,
    user: user,
    // Outros reducers aqui
  });
