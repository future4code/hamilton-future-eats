import React from 'react';
import { connect } from "react-redux";
import { FeedWrapper, LogoWrapper, Logo, NavBar, OptionText, ContentWrapper } from "./style";
import CardProduct from "../../components/CardProduct";
import Footer from "../Footer";
import { setCurrentPage } from "../../actions/page";
import { getRestaurants } from "../../actions/restaurants";
import SearchBar from "../SearchBar"
import { replace } from 'connected-react-router';
import { routes } from "../Router"
import { getRestaurantDetail } from '../../actions/restaurants'
import OrderSnackBar from "../OrderSnackbar"


class PageFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            currentFilter: false,
            activeOption: 1,
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginScreen()
        }
        this.props.getRestaurants();
        this.props.setCurrentPage(1);
    }

    showSnackBar = Transition => () => {
        this.setState({ open: true, Transition });
      };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    renderRestaurants = () => {
        const { restaurants, getRestaurantDetail } = this.props;
        const {currentFilter} = this.state;
        let filteredRestaurants = restaurants;

       if(restaurants){
           if(currentFilter){
               filteredRestaurants = restaurants.filter((element)=>{
                   return (element.category === currentFilter)
                   })
                }
        }

        return (
            filteredRestaurants.map(element => {
                return (
                    <CardProduct
                        name={element.name}
                        logoUrl={element.logoUrl}
                        shipping={element.shipping}
                        deliveryTime={element.deliveryTime}
                        onClick={() => getRestaurantDetail(element.id)}                        
                    />
                )
            })
        )
    }

    renderOptions = () => {
        const { restaurants } = this.props

        return (
            restaurants.map( (element, index) => {
                const indexActiveFilter = index + 2
                return (
                    <OptionText
                        activeOption = {this.state.activeOption}

                        onClick={() => this.handleFilter(element.category, indexActiveFilter)}
                    >
                        {element.category}
                    </OptionText>
                )
            })
        )
    }

    handleFilter = (filter, valueActiveOption) => {
        console.log(valueActiveOption)
        this.setState({
            currentFilter: filter,
            activeOption: valueActiveOption
        })
    }

    render() {      
        return (
            <FeedWrapper>
                <LogoWrapper>
                    <Logo>FutureEats</Logo>
                </LogoWrapper>
                <div>
                    <SearchBar/>
                </div>
                <NavBar>
                    <OptionText onClick={() => this.handleFilter(false, 1)}>Todos</OptionText>
                    {this.renderOptions()}
                </NavBar>
                <ContentWrapper>
                    {(this.props.restaurants) && this.renderRestaurants()}
                </ContentWrapper>
                {/* <OrderSnackBar/> */}


                <Footer />
            </FeedWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    activeOrder: state.orders.activeOrder

})

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        getRestaurants: () => dispatch(getRestaurants()),
        goToLoginScreen: () => dispatch(replace(routes.login)),
        getRestaurantDetail: (restaurantId) => dispatch(getRestaurantDetail(restaurantId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageFeed);