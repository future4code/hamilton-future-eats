import React from 'react';
import { connect } from "react-redux"
import { ProfileWrapper, ProfileHeader, ProfileText, 
EditProfileForm, BackIcon} from '../PageProfile/style';
import { Inputs, EntrarButton } from '../PageLogin/style'
import { routes } from "../Router"
import { replace } from "connected-react-router"
import {updateProfile, updateAddress, getProfile } from '../../actions/user'


export class PageEditAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            street: '',
            number: '',
            complement: '',
            neighbourhood: '',
            city: '',
            state: ''
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
        this.props.updateAddress(body)
    }
    handleClick = () => {
        this.props.goToProfile()
    }

    render() {
        const { street, number, neighbourhood, city, state, complement } = this.state

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
                        value={street}             
                    />
                    <Inputs
                        name="number"
                        label="Número"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value= {number}                 
                    />
                    <Inputs
                        name="complement"
                        label="Complemento"
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value= {complement}                 
                    />
                    <Inputs
                        name="neighbourhood"
                        label="Bairro"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value= {neighbourhood}                 
                    />
                    <Inputs
                        name="city"
                        label="Cidade"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value= {city}                 
                    />
                    <Inputs
                        name="state"
                        label="Estado"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value={state}               
                    />
                <EntrarButton type="submit" color="primary" variant="contained">
                     Salvar
                </EntrarButton>
                </EditProfileForm>
                
            </ProfileWrapper>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
       updateProfile: (body) => dispatch(updateProfile(body)),
       goToProfile: () => dispatch(replace(routes.profile)),
       goToLoginScreen: () => dispatch(replace(routes.login)),
       getProfile: (token) => dispatch(getProfile(token)),
       updateAddress: (body) => dispatch(updateAddress(body))
    }
}

export default connect(null, mapDispatchToProps)(PageEditAddress);