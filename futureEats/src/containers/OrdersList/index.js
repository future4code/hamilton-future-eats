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
import OrderCard from '../../components/OrderCard'



export class OrdersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 2,
        }
    }

    componentDidMount(){
        // this.props.getActiveOrder();
        this.props.getRestaurantDetail()
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
                        {orders.map( product => (
                            <OrderCard
                            key={product.id}
                            photoUrl={product.photoUrl}
                            name={product.name}
                            quantity={quantity}
                            description={product.description}
                            price={product.price}
                            addItem={addItem}
                            quantity={product.quantity}
                            />
                        ))
                        }
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
    addItem: state.orders.addItem
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (body, restaurantId) => dispatch(placeOrder(body, restaurantId)),
    getActiveOrder: () => dispatch(getActiveOrder()),
    getRestaurantDetail: () => dispatch(getRestaurantDetail()),
})


export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);