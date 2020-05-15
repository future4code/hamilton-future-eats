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
                img: '',
                name: '',
                description: '',
                price: 0,
            }
        }
    }

    handleAddItem = (event) => {
        event.preventDefault();
        this.setState({ order:{ open: true, addItem: false, quantity: 0 } })
    }

    handleRemoveItem = (event) => {
        event.preventDefault();
        this.setState({ order:{ open: false, addItem: true, quantity: 0 } })
    }

    handleClose = () => {
        this.setState({ order:{ open: false, addItem: true} })
      };

    handleAddToCart = (quantity) => {
        this.setState({
            order:{
                quantity: quantity,
                open: false,
                addItem: false,
                id: this.props.id,
                img: this.props.photoUrl,
                name: this.props.name,
                description: this.props.description,
                price: this.props.price,
            } 
        })
        console.log(quantity)
        this.props.addToCart(() => (this.state.order))
    }

    render() {
        const { addItem, quantity, open } = this.state.order
        const { price, photoUrl, name, description } = this.props
        console.log(this.state.order)

        return (
            <OrderCardWrapper>
                <QuantityBox
                open = {open}
                close = {this.handleClose}
                toCart = {this.handleAddToCart}
                />
                <OrderImg src={photoUrl}/>
                <OrderName >{name}</OrderName>
                <OrderNumber><span>{quantity}</span></OrderNumber>
                <OrderDescription>{description}</OrderDescription>
                <OrderPrice>R${price}</OrderPrice>
                {addItem ? 
                <OrderButton 
                status={addItem}
                onClick={this.handleAddItem}
                ><span>Adicionar</span></OrderButton>
                :
                <OrderButton 
                status={addItem}
                onClick={this.handleRemoveItem}
                ><span>Remover</span></OrderButton>
                }
            </OrderCardWrapper>
        )
    }
}