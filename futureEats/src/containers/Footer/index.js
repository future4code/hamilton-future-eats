import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { FooterWrapper } from "./style"
import { ReactComponent as HomeIcon } from "../../icons/homepage.svg"
import { ReactComponent as CartIcon } from "../../icons/shopping-cart.svg"
import { ReactComponent as AvatarIcon } from "../../icons/avatar.svg"


class Footer extends React.Component {

    handleOnClick = (page) => {
        const { goToFeedPage, goToCartPage, goToProfilePage } = this.props

        switch (page) {
            case "home": {
                return goToFeedPage();
            }
            case "cart": {
                return goToCartPage();
            }
            case "profile": {
                return goToProfilePage();
            }
        }
    }


    render() {
        const { currentPage } = this.props
        return (
            <FooterWrapper active={currentPage}>
                <HomeIcon onClick={() => this.handleOnClick("home")} />
                <CartIcon onClick={() => this.handleOnClick("cart")} />
                <AvatarIcon onClick={() => this.handleOnClick("profile")} />

            </FooterWrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
        currentPage: state.page.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToFeedPage: () => dispatch(push(routes.feed)),
        goToCartPage: () => dispatch(push(routes.cart)),
        goToProfilePage: () => dispatch(push(routes.profile)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);