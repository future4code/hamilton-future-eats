import React from 'react';
import { connect } from "react-redux"
import {
    ProfileWrapper, ProfileHeader, ProfileText,
    EditProfileForm, BackIcon
} from '../PageProfile/style';
import { Inputs, EntrarButton } from '../PageLogin/style'
import { routes } from "../Router"
import { replace } from "connected-react-router"
import { updateProfile } from '../../actions/user'
import { getProfile } from '../../actions/user'

export class PageEditProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            cpf: ''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        this.props.getProfile(token)
        if (token === null) {
            this.props.goToLoginScreen()
        }
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

    handleSubmit = (event) => {
        event.preventDefault()
        const body = this.state
        this.props.updateProfile(body)
        this.props.goToProfile()
    }
    handleClick = () => {
        this.props.goToProfile()
    }

    render() {
        const { user } = this.props
        const body = this.state
        return (
            <ProfileWrapper>
                <ProfileHeader>

                    <BackIcon onClick={this.handleClick} />

                    <ProfileText>Editar</ProfileText>
                </ProfileHeader>
                <EditProfileForm onSubmit={this.handleSubmit}>
                    <Inputs
                        name="name"
                        label="Nome"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        InputProps={{ placeholder: user.name }}
                    />
                    <Inputs
                        name="email"
                        label="E-mail"
                        required
                        type="email"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        InputProps={{ placeholder: user.email }}
                    />
                    <Inputs
                        name="cpf"
                        label="CPF"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleChangeInputCpf}
                        value={this.state.cpf}
                        InputProps={{ placeholder: user.cpf}}                        
                    />
                    <EntrarButton type="submit" color="primary" variant="contained">
                        Salvar
                </EntrarButton>
                </EditProfileForm>

            </ProfileWrapper>

        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user.user,
})
const mapDispatchToProps = dispatch => {
    return {
        updateProfile: (body) => dispatch(updateProfile(body)),
        goToProfile: () => dispatch(replace(routes.profile)),
        goToLoginScreen: () => dispatch(replace(routes.login)),
        getProfile: (token) => dispatch(getProfile(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageEditProfile);