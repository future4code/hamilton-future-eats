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

export default class OrderCard extends React.Component {

    render() {
        const { price, photoUrl, name, description, quantity } = this.props
        console.log(photoUrl)
        return (
            <OrderCardWrapper>
                <OrderImg src={photoUrl}/>
                <OrderName>{name}</OrderName>
                <OrderNumber><span>{quantity}</span></OrderNumber>
                <OrderDescription>{description}</OrderDescription>
                <OrderPrice>R${price}</OrderPrice>
                <OrderRemove><span>remover</span></OrderRemove>
            </OrderCardWrapper>
        )
    }
}