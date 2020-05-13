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
import OrderCard from '../../components/OrderCard'



export class OrdersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: "1",
        }
    }

    componentDidMount(){
        
        this.props.getActiveOrder();
    }

    render() {
        const { orders } = this.state
        const {  } = this.props
        
        return (
            <OrdersListWrapper>
                    {orders ? (
                        <OrderWrapper>
                            <RestaurantInfo>
                                <RestaurantName>Venda do Chaves</RestaurantName>
                                <RestaurantAddress>Vila da Boa Vizinhança, barril</RestaurantAddress>
                                <ExpectedTime>30 - 45 min</ExpectedTime>
                            </RestaurantInfo>
                        
                            <OrderCard/>

                        </OrderWrapper>

                    ) : (
                        <IfEmpty>Carrinho Vazio</IfEmpty>
                    )}
            </OrdersListWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders.orders
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (body, restaurantId) => dispatch(placeOrder(body, restaurantId)),
    getActiveOrder: () => dispatch(getActiveOrder()),
})


export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);