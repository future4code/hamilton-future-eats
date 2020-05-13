import React from 'react';
import { connect } from "react-redux"
import { ProfileWrapper, ProfileHeader, ProfileText, 
EditProfileInputsWrapper} from '../PageProfile/style';
import { Inputs, EntrarButton } from '../PageLogin/style'



export class PageEditProfile extends React.Component {

    render() {
        return (
            <ProfileWrapper>
                <ProfileHeader>
                    <ProfileText>Editar</ProfileText>
                </ProfileHeader>
                <EditProfileInputsWrapper>
                    <Inputs
                        name="name"
                        label="Nome"
                        required
                        type="text"
                        variant="outlined"
                    //onChange={this.handleInputChange}
                    // value= {já deve vir com o valor do nome do usuário}                  
                    />
                    <Inputs
                        name="email"
                        label="E-mail"
                        required
                        type="email"
                        variant="outlined"
                    //onChange={this.handleInputChange}
                    // value= {já deve vir com o valor do email do usuário}                  
                    />
                    <Inputs
                        name="name"
                        label="Nome"
                        required
                        type="text"
                        variant="outlined"
                    //onChange={this.handleInputChange}
                    // value= {já deve vir com o valor do nome do usuário}                  
                    />
                <EntrarButton color="primary" variant="contained">
                     Salvar
                </EntrarButton>
                </EditProfileInputsWrapper>
                
            </ProfileWrapper>
            
        )
    }
}

export default connect(null, null)(PageEditProfile);