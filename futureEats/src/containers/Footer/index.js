import React from "react";
import {connect} from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import {FooterWrapper} from "./style"
import {ReactComponent as HomeIcon} from "../../icons/homepage.svg"
import {ReactComponent as CartIcon} from "../../icons/shopping-cart.svg"
import {ReactComponent as AvatarIcon} from "../../icons/avatar.svg"


class Footer extends React.Component{

    handleOnClick = (page) => {

        switch(page){
            case "home":{
                return 
            }
            case "cart":{
                return
            }
            case "profile":{
                return
            }
        }
    }


    render(){
        return(
            <FooterWrapper active={2}>

                <HomeIcon/>
                <CartIcon/>
                <AvatarIcon/>

            </FooterWrapper>
        )
    }
};

const mapStateToProps = state =>{

}

const mapDispatchToProps = dispatch =>{
    return{
        goToCartPage: () => dispatch(push(routes.cart))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Footer);