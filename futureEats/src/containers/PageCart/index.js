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
                <Footer/>
            </CartWrapper>
        
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
    }
}

export default connect(null, mapDispatchToProps)(PageCart);