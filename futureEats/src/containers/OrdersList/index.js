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
    OrderCard,
    OrderImg,
    OrderName,
    OrderNumber,
    OrderDescription,
    OrderRemove,
    OrderPrice,
    } from './style';
import samplePic from '../../imgs/mao-santa-burguer-1531851949973-v-2-900-x-506.png'



export class OrdersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: 1,
        }
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
                            <OrderCard>
                                <OrderImg src={samplePic}/>
                                <OrderName>Churros do Chaves</OrderName>
                                <OrderNumber><span>1</span></OrderNumber>
                                <OrderDescription>Churros fresquinho, coberto por uma fina
                                     e deliciosa camada de chocolete.</OrderDescription>
                                <OrderPrice>R$7,00</OrderPrice>
                                <OrderRemove><span>remover</span></OrderRemove>
                            </OrderCard>
                        </OrderWrapper>

                    ) : (
                        <IfEmpty>Carrinho Vazio</IfEmpty>
                    )}
            </OrdersListWrapper>
        )
    }
}



export default connect(null, null)(OrdersList);