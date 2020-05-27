import React from 'react';
import { login } from "../../actions/user"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import { routes } from "../Router"

import { LoginWrapper, Logo, Entrar, Inputs, EntrarButton, Cadastrar, Form, Span } from './style';
import imgLogo from '../../imgs/logo-future-eats-invert.png'
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';


export class PageLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassword: false,
            email: '',
            password: '',
        }
    }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.login(this.state.email, this.state.password)
    }


    render() {
        const { showPassword, email, password } = this.state

        return (
            <LoginWrapper>
                <Logo src={imgLogo} />
                <Entrar>Entrar</Entrar>

                <Form onSubmit={this.handleSubmit}>
                    <Inputs
                        name="email"
                        label="E-mail"
                        required
                        type="email"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={email}
                        InputProps={{ placeholder: "email@email.com", }}
                    />
                    <Inputs
                        name="password"
                        label="Senha"
                        required
                        type="password"
                        variant="outlined"
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        onChange={this.handleInputChange}
                        InputProps={{
                            placeholder: "Mínimo 6 caracteres",
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}

                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}

                                    </IconButton>
                                </InputAdornment>
                            ),
                        }} />
                    <EntrarButton type="submit" color="primary" variant="contained">Entrar</EntrarButton>

                    <Cadastrar>
                        Não possui cadastro?
                        <Span
                            onClick={() => {
                                this.props.goToSignUp();
                            }}
                        > Clique aqui.
                        </Span>

                    </Cadastrar>
                </Form>
            </LoginWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    goToSignUp: () => dispatch(push(routes.signUp)),
    login: (email, password) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(PageLogin);