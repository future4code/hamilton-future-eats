import React from 'react';
import { connect } from "react-redux"
import { ProfileWrapper, ProfileHeader, ProfileText, 
EditProfileForm, BackIcon} from '../PageProfile/style';
import { Inputs, EntrarButton } from '../PageLogin/style'
import { routes } from "../Router"
import { push } from "connected-react-router"
import {updateProfile} from '../../actions/user'

export class PageEditProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            cpf: ''
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
    handleClick = (event) => {
        this.props.goToProfile()
    }

    render() {
        
        const body  = this.state
        return (
            <ProfileWrapper>
                <ProfileHeader>
                    
                        <BackIcon onClick={this.handleClick}/>
                   
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
                    />
                    <Inputs
                        name="email"
                        label="E-mail"
                        required
                        type="email"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value= {this.state.email}                  
                    />
                    <Inputs
                        name="cpf"
                        label="CPF"
                        required
                        type="text"
                        variant="outlined"
                        onChange={this.handleInputChange}
                        value= {this.state.cpf}                  
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
       goToProfile: () => dispatch(push(routes.profile))
    }
}

export default connect(null, mapDispatchToProps)(PageEditProfile);