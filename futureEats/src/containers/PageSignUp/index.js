import React from 'react';
import { signUp } from "../../actions/user"
import { connect } from "react-redux"
import { push, replace } from "connected-react-router"
import { routes } from "../Router"
import { SignUpHeader, LoginWrapper, Logo, Create, Inputs, CreateButton, Form, Icon } from './style';
import imgLogo from '../../imgs/logo-future-eats-invert.png'
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FaAngleLeft } from 'react-icons/fa'

export class PageSignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            showPassword: false,
            name: '',
            email: '',
            cpf: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword })
    }
    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleChangeInputCpf = (event) => {
        const { name, value } = event.target

        let newCPF = value
        newCPF = newCPF.replace(/\D/g, ""); 
        newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2"); 
        newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2"); 
        newCPF = newCPF.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 

        if (newCPF.length < 15) {
            this.setState ({cpf: newCPF}) 
        }           
    }
    
    handleSubmmit = (event) => {
        event.preventDefault();
        
        const { name, email, cpf, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            
          } else {
            this.props.signUp(name, email, cpf, password);
            this.props.goToAddress();
          }

    }

    render() {
        const { showPassword, name, email, cpf, password, confirmPassword } = this.state

        return (
            <LoginWrapper>
                <SignUpHeader>
                    <Icon>            
                        <FaAngleLeft onClick={this.props.goToLoginScreen}/>   
                    </Icon>
                </SignUpHeader>
                <Logo src={imgLogo} />
                <Create>Cadastrar</Create>
                <Form onSubmit={this.handleSubmmit}>
                    <Inputs
                        name="name"
                        label="Nome"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={name}
                        InputProps={{
                            placeholder: "Nome e sobrenome",
                            pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{5,}",
                            title: "O nome/sobrenome deve conter no mínimo 5 letras."
                        }}

                    />

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
                        name="cpf"
                        label="CPF"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleChangeInputCpf}
                        value={cpf}
                        InputProps={{ placeholder: "000.000.000-00" }}
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
                            title: "Mínimo de 6 caracteres",
                            pattern: "[A-Za-z 123456789!@#$%¨&*]{6,}",
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
                    
                    <Inputs
                        name="confirmPassword"
                        label="Confirmar"
                        required
                        type="password"
                        variant="outlined"
                        value={confirmPassword}
                        type={showPassword ? 'text' : 'password'}
                        onChange={this.handleInputChange}
                        InputProps={{
                            placeholder: "Confirme a senha anterior",
                            title: "Mínimo de 6 caracteres",
                            pattern: "[A-Za-z 123456789!@#$%¨&*]{6,}",
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

                    <CreateButton type="submit" color="primary" variant="contained">Criar</CreateButton>
                    

                </Form>

            </LoginWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToLoginScreen: () => dispatch(replace(routes.login)),
    goToAddress: () => dispatch(push(routes.addressRegistration)),
    signUp: (name, email, cpf, password) => dispatch(signUp(name, email,cpf, password))
})

export default connect(null, mapDispatchToProps)(PageSignUp);