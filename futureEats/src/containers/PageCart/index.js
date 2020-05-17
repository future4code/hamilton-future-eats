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
import { setCurrentPage } from "../../actions/page"
import { getFullAddress } from "../../actions/user"
import { placeOrder } from "../../actions/orders"

export class PageCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subTotalPrice: 0,
            paymentMethod: "",
        }
    }
    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginScreen()
        }
        this.props.setCurrentPage(2);
        this.props.getFullAddress()
        this.subtotalSum()
    }

    subtotalSum = () => {
        let subtotal = 0
        if(this.props.orders[0]){
        this.props.orders.forEach( product => {
            subtotal = subtotal + (product.price * product.quantity)
        })
        subtotal = subtotal + this.props.restaurantDetail.shipping
        this.setState({ subTotalPrice: subtotal })
        } else this.setState({subTotalPrice: 0})
    }

    handlePaymentMethod = (event) => {
        this.setState({ paymentMethod: event.target.value })
    }

    handlePlaceOrder = () => {
        const ordersToPlace = 
        {
            products: 
            this.props.orders.map(order => (
                    {
                    "id": order.id,
                    "quantity": order.quantity
                }
                )),
            "paymentMethod": this.state.paymentMethod
        }  
        this.props.placeOrder(ordersToPlace, this.props.restaurantDetail.id)
    }


    render() {
        const { orders, restaurantDetail, userAddress } = this.props
        const { subTotalPrice } = this.state

        return (
            <CartWrapper>
                <Title>Meu Carrinho</Title>

                <DeliveryAddressWrapper>
                    <AddressTitle>Endereço de Entrega</AddressTitle>
                    <Address>
                        {userAddress ? (
                        <span>{userAddress.neighbourhood}, {userAddress.number }, {userAddress.street } </span>
                        ) : ( 
                        <span>Carregando...</span> 
                        )}
                    </Address>
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
                            <PaymentRadioGroup
                            onChange = {this.handlePaymentMethod}
                            required
                            defaultValue={"money"}
                            >
                                <RadioPayment  control={<RadioCustom color='secondary'/>} value="money" label='Dinheiro'/>
                                <RadioPayment control={<RadioCustom color='secondary'/>} value="creditcard" label='Cartão de Crédito'/>
                            </PaymentRadioGroup>
                    </PaymentMethod>
                </PaymentWrapper>

                <ConfirmButton
                    // name='confirmButton'
                    color="primary" 
                    variant="contained"
                    disabled={ orders[0] ? false : true }
                    onClick={this.handlePlaceOrder}
                    >Confirmar
                </ConfirmButton>
                <Footer/>
            </CartWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders.orders,
    restaurantDetail: state.restaurants.restaurantDetail,
    userAddress: state.user.fullAddress
})

const mapDispatchToProps = dispatch => {
    return {
        getFullAddress: () => dispatch(getFullAddress()),
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        placeOrder: (ordersToPlace, restaurantId) => dispatch(placeOrder(ordersToPlace, restaurantId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCart);