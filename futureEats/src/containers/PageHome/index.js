import React from 'react'
import {HomeWrapper, Logo} from './style'
import imgLogo from '../../imgs/logo-future-eats@2x.png'


class PageHome extends  React.Component {


    render(){
        return(
            <HomeWrapper>
                <Logo src={imgLogo} />
            </HomeWrapper>
        )
    }
}

export default PageHome;