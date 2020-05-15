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
    ConfirmButton } from './style';
import Radio from '@material-ui/core/Radio';
import OrdersList from '../OrdersList';
import Footer from '../Footer'
import {setCurrentPage} from "../../actions/page"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';



export class PageCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: "1",
        }
    }
    componentDidMount() {
        this.props.setCurrentPage(2);
    }

    hendleOnClick = (event) => {
        event.preventDefault()
    }


    render() {
        const { orders } = this.props

        const theme = createMuiTheme({
            palette: {
              primary: {
                main: "#5cb646",
              },
              secondary: {
                main: '#000000'
              }
            }
          });
        
        return (
            <CartWrapper>
                <Title>Meu Carrinho</Title>

                <DeliveryAddressWrapper>
                    <AddressTitle>Endereço de Entrega</AddressTitle>
                    <Address>PEGAR DO REDUCER</Address>
                </DeliveryAddressWrapper>

                <OrdersList/>
                
                <PaymentWrapper
                orders={orders}
                >
                    <DeliveryPrice>Frete R$ 00,00</DeliveryPrice>
                    <TotalPrice>
                        <SubTotalTitle>SUBTOTAL</SubTotalTitle> 
                        <SubTotalPrice>R$ 00,00</SubTotalPrice>
                    </TotalPrice>
                    <PaymentMethod>
                        <PaymentTitle>Forma de Pagamento</PaymentTitle>
                        <MuiThemeProvider theme={theme}>
                            <PaymentRadioGroup>
                                <RadioPayment  control={<Radio color='secondary'/>} value="dinheiro" label='Dinheiro'/>
                                <RadioPayment control={<Radio color='secondary'/>} value="credito" label='Cartão de Crédito'/>
                            </PaymentRadioGroup>
                        </MuiThemeProvider>
                    </PaymentMethod>
                </PaymentWrapper>

                <ConfirmButton
                name='confirmButton'
                color="primary" 
                variant="contained"
                disabled={ orders ? false : true }
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
})

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCart);