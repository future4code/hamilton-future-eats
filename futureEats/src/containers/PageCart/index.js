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



export class PageCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: 1,
        }
    }

    hendleOnClick = (event) => {
        event.preventDefault()
    }


    render() {
        const { orders } = this.state
        const {  } = this.props
        
        return (
            <CartWrapper>
                <Title>Meu Carrinho</Title>

                <DeliveryAddressWrapper>
                    <AddressTitle>Endereço de Entrega</AddressTitle>
                    <Address>Rua dos Miserávi, nº 42</Address>
                </DeliveryAddressWrapper>

                <OrdersList/>
                
                <PaymentWrapper
                orders={ orders }
                >
                    <DeliveryPrice>Frete R$ 00,00</DeliveryPrice>
                    <TotalPrice>
                        <SubTotalTitle>SubTotal</SubTotalTitle> 
                        <SubTotalPrice>R$ 00,00</SubTotalPrice>
                    </TotalPrice>
                    <PaymentMethod>
                        <PaymentTitle>Forma de Pagamento</PaymentTitle>
                        <PaymentRadioGroup>
                            <RadioPayment control={<Radio />} value="dinheiro" label='Dinheiro'/>
                            <RadioPayment control={<Radio />} value="credito" label='Cartão de Crédito'/>
                        </PaymentRadioGroup>
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

            </CartWrapper>
        )
    }
}



export default connect(null, null)(PageCart);