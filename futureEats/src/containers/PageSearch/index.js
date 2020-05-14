import React from "react";
import { connect } from "react-redux";
import {SearchWrapper, LogoWrapper, Logo} from "./style";
import SearchBar from "../SearchBar";
import CardProduct from "../../components/CardProduct";
import { getRestaurants } from "../../actions/restaurants";

class PageSearch extends React.Component{



    renderSearchRestaurants = ()=>{
        const{restaurants, currentSearch}=this.props

        const filteredRestaurants = restaurants.filter((element)=>{
            return (element.name === currentSearch)
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



    render(){
        const{restaurants}=this.props

        console.log(this.props.currentSearch)

        return(
            <SearchWrapper>
                <LogoWrapper>
                    <Logo>FutureEats</Logo>
                </LogoWrapper>
                <div>
                    <SearchBar/>
                </div>

                <div>
                    {restaurants[0]? 
                                    this.renderSearchRestaurants()
                                    :<p>Não encontramos :(</p>
                    }
                </div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSearch); 