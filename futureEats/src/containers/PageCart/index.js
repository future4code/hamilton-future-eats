import React from 'react';
import { connect } from "react-redux"
import { CartWrapper, 
    Title, 
    DeliveryAddressWrapper,
    AddressTitle,
    Address,
    PaymentWrapper, 
    DeliveryPrice,
    TotalPrice,
    SubTotalTitle,
    SubTotalPrice,
    PaymentMethod,
    PaymentTitle,
    PaymentRadioGroup,
    RadioPayment,
    RadioCustom,
    ConfirmButton } from './style';
import OrdersList from '../OrdersList';
import Footer from '../Footer'
import {setCurrentPage} from "../../actions/page"



export class PageCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subTotalPrice: 0,
        }
    }
    componentDidMount() {
        this.props.setCurrentPage(2);
        this.subtotalSum()
    }

    hendleOnClick = (event) => {
        event.preventDefault()
    }

    subtotalSum = () => {
        let subtotal = 0
        this.props.orders.forEach( product => {
            subtotal = (product.price * product.quantity) + subtotal
        })
        subtotal = subtotal+this.props.orders.shipping
        this.setState({ subTotalPrice: subtotal })
    }

    render() {
        const { orders, restaurantDetail } = this.props
        const { subTotalPrice } = this.state


        return (
            <CartWrapper>
                <Title>Meu Carrinho</Title>

                <DeliveryAddressWrapper>
                    <AddressTitle>Endereço de Entrega</AddressTitle>
                    <Address>PEGAR DO REDUCER</Address>
                </DeliveryAddressWrapper>

                <OrdersList/>
                
                <PaymentWrapper
                orders={orders[0]}
                >
                    <DeliveryPrice>Frete R${restaurantDetail.shipping}</DeliveryPrice>
                    <TotalPrice>
                        <SubTotalTitle>SUBTOTAL</SubTotalTitle> 
                        <SubTotalPrice>R$ {subTotalPrice}</SubTotalPrice>
                    </TotalPrice>
                    <PaymentMethod>
                        <PaymentTitle>Forma de Pagamento</PaymentTitle>
                            <PaymentRadioGroup>
                                <RadioPayment  control={<RadioCustom color='secondary'/>} value="dinheiro" label='Dinheiro'/>
                                <RadioPayment control={<RadioCustom color='secondary'/>} value="credito" label='Cartão de Crédito'/>
                            </PaymentRadioGroup>
                    </PaymentMethod>
                </PaymentWrapper>

                <ConfirmButton
                    name='confirmButton'
                    color="primary" 
                    variant="contained"
                    disabled={ orders[0] ? false : true }
                    onClick={this.handleOnClick}
                    >Confirmar
                </ConfirmButton>
                <Footer/>
            </CartWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders.orders,
    restaurantDetail: state.restaurants.restaurantDetail
})

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCart);