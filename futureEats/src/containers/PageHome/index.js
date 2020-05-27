import React from 'react'
import {HomeWrapper, Logo} from './style'
import imgLogo from '../../imgs/logo-future-eats@2x.png'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

class PageHome extends  React.Component {

    componentDidMount(){
        window.setTimeout(this.props.goToLoginPage, 2000)
    }
    

    render(){
        return(
            <HomeWrapper>
                <Logo src={imgLogo} />
            </HomeWrapper>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToLoginPage: () => dispatch(push(routes.login)),
    }
}


export default connect(null, mapDispatchToProps) (PageHome);