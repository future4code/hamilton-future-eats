import React from 'react';
import { addAddress } from '../../actions/user'
import { connect } from "react-redux"
import { LoginWrapper, Logo, MyAddress, Inputs, SaveButton, Form } from './style';
import imgLogo from '../../imgs/logo-future-eats-invert.png';



export class PageAddressRegistration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            street: '',
            number: '',
            neighbourhood: '',
            city: '',
            state: '',
            complement: ''
        }
    }


    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmmit = (event) => {
        event.preventDefault();
               
       this.props.addAddress(this.state)
    }

    render() {
        const { street, number, neighbourhood, city, state, complement } = this.state

        return (
            <LoginWrapper>

                <Logo src={imgLogo} />

                <MyAddress>Meu endereço</MyAddress>

                <Form onSubmit={this.handleSubmmit}>

                    <Inputs
                        name="street"
                        label="Logradouro"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={street}
                        InputProps={{
                            placeholder: "Rua / Av.",
                        }}

                    />

                    <Inputs
                        name="number"
                        label="Número"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={number}
                        InputProps={{ placeholder: "Número", }}
                    />

                    <Inputs
                        name="complement"
                        label="Complemento"
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={complement}
                        InputProps={{ placeholder: "Apto. / Bloco" }}
                    />

                    <Inputs
                        name="neighbourhood"
                        label="Bairro"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={neighbourhood}
                        InputProps={{ placeholder: "Bairro" }}
                    />

                    <Inputs
                        name="city"
                        label="Cidade"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={city}
                        InputProps={{ placeholder: "Cidade" }}
                    />

                    <Inputs
                        name="state"
                        label="Estado"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={state}
                        InputProps={{ placeholder: "Estado" }}
                    />

                    <SaveButton type="submit" color="primary" variant="contained">Salvar</SaveButton>
                    

                </Form>

            </LoginWrapper>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addAddress: (body) => dispatch(addAddress(body))
})
export default connect(null, mapDispatchToProps)(PageAddressRegistration);