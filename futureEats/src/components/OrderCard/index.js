import React from 'react';
import {
    OrderCardWrapper,
    OrderImg,
    OrderName,
    OrderNumber,
    OrderDescription,
    OrderRemove,
    OrderPrice,
    } from './style';
import samplePic from '../../imgs/mao-santa-burguer-1531851949973-v-2-900-x-506.png'


export default class OrderCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: "1",
        }
    }

    render() {
        const { orders } = this.state
        const {  } = this.props
        
        return (
            <OrderCardWrapper>
                <OrderImg src={samplePic}/>
                <OrderName>Churros do Chaves</OrderName>
                <OrderNumber><span>1</span></OrderNumber>
                <OrderDescription>Churros fresquinho, coberto por uma fina
                        e deliciosa camada de chocolete.</OrderDescription>
                <OrderPrice>R$7,00</OrderPrice>
                <OrderRemove><span>remover</span></OrderRemove>
            </OrderCardWrapper>
        )
    }
}