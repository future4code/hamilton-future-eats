import React from 'react';
import { addAddress } from '../../actions/user'
import { connect } from "react-redux"
import { LoginWrapper, BackIcon, MyAddress, Inputs, SaveButton, Form, AdressHeader } from './style';
import { routes } from "../Router"
import { replace } from "connected-react-router"

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

    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginScreen()
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

    handleClick = () => {
        this.props.backToSignUp()
    }

    handleChangeInputCpf = (event) => {
        const { value } = event.target

        let newCPF = value
        newCPF = newCPF.replace(/\D/g, ""); 
        newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2"); 
        newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2"); 
        newCPF = newCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 

        if (newCPF.length < 15) {
            this.setState ({cpf: newCPF}) 
        }           
    }

    render() {
        const { street, number, neighbourhood, city, state, complement } = this.state

        return (
            <LoginWrapper>

                <AdressHeader>
                    <BackIcon onClick={this.handleClick}/>
                </AdressHeader>

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
    addAddress: (body) => dispatch(addAddress(body)),
    backToSignUp: () => dispatch(replace(routes.signUp)),
    goToLoginScreen: () => dispatch(replace(routes.login))
})
export default connect(null, mapDispatchToProps)(PageAddressRegistration);