import React from 'react';
import {
    OrderCardWrapper,
    OrderImg,
    OrderName,
    OrderNumber,
    OrderDescription,
    OrderButton,
    OrderPrice,
    } from './style';

export default class OrderCard extends React.Component {

    render() {
        const { addItem, price, photoUrl, name, description, quantity } = this.props

        return (
            <OrderCardWrapper>
                <OrderImg src={photoUrl}/>
                <OrderName>{name}</OrderName>
                <OrderNumber><span>{quantity}</span></OrderNumber>
                <OrderDescription>{description}</OrderDescription>
                <OrderPrice>R${price}</OrderPrice>
                {addItem ? 
                <OrderButton status={addItem}><span>Adicionar</span></OrderButton>
                :
                <OrderButton status={addItem}><span>Remover</span></OrderButton>
                }
            </OrderCardWrapper>
        )
    }
}