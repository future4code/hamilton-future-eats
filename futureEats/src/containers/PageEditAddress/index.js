import React from 'react';
import { connect } from "react-redux"
import { ProfileWrapper, ProfileHeader, ProfileText, 
EditProfileForm, BackIcon} from '../PageProfile/style';
import { Inputs, EntrarButton } from '../PageLogin/style'
import { routes } from "../Router"
import { replace } from "connected-react-router"
import {updateProfile} from '../../actions/user'
import {getProfile} from '../../actions/user'

export class PageEditAddress extends React.Component {
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
        const {name, value} = event.target
        this.setState({ [name]: value })
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
        const {user} = this.props
        const body = this.state
        return (
            <ProfileWrapper>
                <ProfileHeader>
                    
                        <BackIcon onClick={this.handleClick}/>
                   
                    <ProfileText>Endereço</ProfileText>
                </ProfileHeader>
                <EditProfileForm onSubmit={this.handleSubmit}>
                    <Inputs
                        name="street"                        
                        label="Logradouro"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        // value={street}        
                        InputProps={{ placeholder: "Rua / Av.",}}         
                    />
                    <Inputs
                        name="number"
                        label="Número"
                        required
                        type="email"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        //value= {number}   
                        InputProps={{ placeholder: "Número",}}                
                    />
                    <Inputs
                        name="complement"
                        label="Complemento"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        //value= {complement}         
                        InputProps={{ placeholder: user.cpf }}           
                    />
                    <Inputs
                        name="neighbourhood"
                        label="Bairro"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        //value= {neighbourhood}         
                        InputProps={{ placeholder: user.cpf }}           
                    />
                    <Inputs
                        name="city"
                        label="Cidade"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        //value= {city}         
                        InputProps={{ placeholder: user.cpf }}           
                    />
                    <Inputs
                        name="cpf"
                        label="CPF"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        //value={state}       
                        InputProps={{ placeholder: user.cpf }}           
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

export default connect(mapStateToProps, mapDispatchToProps)(PageEditAddress);