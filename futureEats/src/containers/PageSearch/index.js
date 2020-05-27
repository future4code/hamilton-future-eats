import React from "react";
import { connect } from "react-redux";
import {SearchWrapper, LogoWrapper, Logo, BackIcon, DivBackIcon, ResultsWrapper} from "./style";
import SearchBar from "../SearchBar";
import CardProduct from "../../components/CardProduct";
import { getRestaurants } from "../../actions/restaurants";
import { replace } from "connected-react-router";
import { routes } from "../Router"


class PageSearch extends React.Component{

    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginScreen()
        }
    }

    renderSearchRestaurants = ()=>{
        const{restaurants, currentSearch}=this.props

        const filteredRestaurants = restaurants.filter((element)=>{

            const restaurantsLowerCase = element.name.toLowerCase();
            const currentSearchLowerCase = currentSearch.toLowerCase();            

            return (restaurantsLowerCase.includes(currentSearchLowerCase))
        })
        
        return (
            filteredRestaurants.map((element)=>{
                return (
                    <CardProduct
                        name={element.name}
                        logoUrl={element.logoUrl}
                        shipping={element.shipping}
                        deliveryTime={element.deliveryTime}
                    />
                )
            })
        )
    }

    handleClick = () => {
        this.props.goBackToFeed()
    }

    render(){
        const{restaurants}=this.props

        return(
            <SearchWrapper>
                <LogoWrapper>
                    <DivBackIcon>
                         <BackIcon onClick={this.handleClick} />
                    </DivBackIcon>
                   
                    <Logo>FutureEats</Logo>
                </LogoWrapper>
                <div>
                    <SearchBar/>
                </div>

                <ResultsWrapper>
                    {restaurants[0]? 
                                    this.renderSearchRestaurants()
                                    :<p>Não encontramos :(</p>
                    }
                </ResultsWrapper>
            </SearchWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    currentSearch: state.page.currentSearch,
    restaurants: state.restaurants.restaurants
})

const mapDispatchToProps = dispatch => {
    return {
        getRestaurants: () => dispatch(getRestaurants()),
        goBackToFeed: () => dispatch(replace(routes.feed)),
        goToLoginScreen: () => dispatch(replace(routes.login))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSearch); 