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
import QuantityBox from '../QuantityBox';

export default class OrderCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order:{
                open: false,
                addItem: true,
                quantity: 0,
                id: '',
                photoUrl: '',
                name: '',
                description: '',
                price: 0,
            }
        }
    }

    handleAddItem = (event) => {
        event.preventDefault();
        this.setState({ order: { open: true, addItem: false } })
    }

    handleRemoveItem = (event) => {
        event.preventDefault();
        this.setState({ order:{ open: false, addItem: true, quantity: 0 } })
    }

    handleClose = () => {
        this.setState({ order: { open: false, addItem: true } })
      };

    handleAddToCart = (quantity) => {
        const newOrder = {
            quantity: quantity,
            addItem: false,
            id: this.props.id,
            photoUrl: this.props.photoUrl,
            name: this.props.name,
            description: this.props.description,
            price: this.props.price,
        } 
        this.setState({
            open: false,
            order: newOrder
        })
        this.props.addToCart(newOrder)
    }


    render() {
        const { price, photoUrl, name, description, quantity } = this.props

        return (
            <OrderCardWrapper>
                <QuantityBox
                />
                <OrderImg src={photoUrl}/>
                <OrderName >{name}</OrderName>
                <OrderNumber><span>{quantity}</span></OrderNumber>
                <OrderDescription>{description}</OrderDescription>
                <OrderPrice>R${price}</OrderPrice>
                <OrderButton 
                // onClick={() => this.handleRemoveItem(idOrderItem)}
                ><span>Remover</span>
                </OrderButton>
            </OrderCardWrapper>
        )
    }
}