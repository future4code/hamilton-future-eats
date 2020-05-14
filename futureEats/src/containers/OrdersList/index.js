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
        this.props.getActiveOrder();
        this.props.getRestaurantDetail()
    }

    render() {
        const { quantity } = this.state
        const { orders } = this.props
        const { name, photoUrl, description, price } = this.props.orders
        return (
            <OrdersListWrapper>
                    {orders.products ? (
                        <OrderWrapper>
                            <RestaurantInfo>
                                <RestaurantName>Venda do Chaves</RestaurantName>
                                <RestaurantAddress>Vila da Boa Vizinhança, barril</RestaurantAddress>
                                <ExpectedTime>30 - 45 min</ExpectedTime>
                            </RestaurantInfo>
                        {orders.products.map( product => (
                            <OrderCard
                            photoUrl={product.photoUrl}
                            name={product.name}
                            quantity={quantity}
                            description={product.description}
                            price={product.price}
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
    orders: state.restaurants.restaurantDetail
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (body, restaurantId) => dispatch(placeOrder(body, restaurantId)),
    getActiveOrder: () => dispatch(getActiveOrder()),
    getRestaurantDetail: () => dispatch(getRestaurantDetail()),
})


export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);