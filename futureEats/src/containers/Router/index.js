import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import PageLogin from "../PageLogin";
import PageSignUp from "../PageSignUp";
import PageFeed from "../PageFeed";
import PageProfile from "../PageProfile";
import PageRestaurant from "../PageRestaurant";
import PageCart from "../PageCart";
import PageAddressRegistration from "../PageAddressRegistration";
import PageError from "../PageError"
import PageEditProfile from "../PageEditProfile"
import PageHome from "../PageHome";
import PageSearch from "../PageSearch"
import PageEditAddress from "../PageEditAddress"

export const routes = {
  home: "/",
  login: "/login",
  signUp: "/signup",
  feed: "/feed",
  profile: "/profile",
  editProfile: "/profile/editProfile",
  restaurant: "/restaurant",
  cart: "/restaurant/cart",
  addressRegistration: "/profile/address",
  editAddress: "/profile/editAddress",
  error: "/",
  search: "/feed/search",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={PageHome} />
        <Route exact path={routes.login} component={PageLogin} />
        <Route exact path={routes.signUp} component={PageSignUp} />
        <Route exact path={routes.feed} component={PageFeed} />
        <Route exact path={routes.profile} component={PageProfile} />
        <Route exact path={routes.editProfile} component={PageEditProfile} />
        <Route exact path={routes.restaurant} component={PageRestaurant} />
        <Route exact path={routes.cart} component={PageCart} />
        <Route exact path={routes.addressRegistration} component={PageAddressRegistration} />
        <Route exact path={routes.editAddress} component={PageEditAddress} />
        <Route exact path={routes.search} component={PageSearch} />
        <Route path={routes.error} component={PageError} />
        
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
