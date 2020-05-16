import React from 'react';
import { connect } from "react-redux"
import {
    OrdersListWrapper,
    IfEmpty,
    OrderWrapper,
    RestaurantInfo,
    RestaurantName,
    RestaurantAddress,
    ExpectedTime,
    } from './style';
import {getActiveOrder, placeOrder} from '../../actions/orders'
import { getRestaurantDetail } from '../../actions/restaurants'
import OrderCardCart from '../../components/OrderCardCart'



export class OrdersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
        }
    }

    componentDidMount(){
        const token = localStorage.getItem("token")
        // const ordersOnHold = localStorage.getItem('orders')
        if (token === null) {
            this.props.goToLoginScreen()
        }
        // if(ordersOnHold){
        //     localStorage.getItem('ordersId')
        // }
        this.props.getRestaurantDetail()
    }

    renderOrdersCard = () => {
        return(
        this.props.orders.map( product => {
            return (
            <OrderCardCart
            key={product.id}
            photoUrl={product.photoUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            />
            )}))
    }

    render() {
        const { orders, restaurant, addItem, quantity} = this.props
        return (
            <OrdersListWrapper>
                    {orders[0] && restaurant ? (
                        <OrderWrapper>
                            <RestaurantInfo>
                                <RestaurantName>{restaurant.name}</RestaurantName>
                                <RestaurantAddress>{restaurant.address}</RestaurantAddress>
                                <ExpectedTime>{restaurant.deliveryTime}</ExpectedTime>
                            </RestaurantInfo>
                            {this.renderOrdersCard()}
                        </OrderWrapper>

                    ) : (
                        <IfEmpty>Carrinho Vazio</IfEmpty>
                    )}
            </OrdersListWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders.orders,
    restaurant: state.restaurants.restaurantDetail,
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (body, restaurantId) => dispatch(placeOrder(body, restaurantId)),
    getActiveOrder: () => dispatch(getActiveOrder()),
    getRestaurantDetail: () => dispatch(getRestaurantDetail()),
})


export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);