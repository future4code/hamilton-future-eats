import React from 'react';
import {connect} from "react-redux"

class PageSignUp extends React.Component{

    render(){
        return(
            <div>
                Cadastre-se
            </div>
        )
    }
}

export default connect (null, null) (PageSignUp);