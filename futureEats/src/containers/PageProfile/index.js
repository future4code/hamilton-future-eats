import React from 'react';
import {connect} from "react-redux"

class PageProfile extends React.Component{

    render(){
        return(
            <div>
                Tela de perfil
            </div>
        )
    }
}

export default connect (null, null) (PageProfile);