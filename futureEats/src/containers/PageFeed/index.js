import React from 'react';
import { connect } from "react-redux";
import { FeedWrapper, SearchBar, SearchIconCustom, LogoWrapper, Logo, NavBar, OptionText, ContentWrapper } from "./style";
import CardProduct from "../../components/CardProduct";
import Footer from "../Footer";
import { setCurrentPage } from "../../actions/page"
import { getRestaurants } from "../../actions/restaurants"


class PageFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            currentFilter: false
        }
    }

    componentDidMount() {
        this.props.setCurrentPage(1);
        this.props.getRestaurants();

    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleOnKeyDown = (event) => {
        console.log(event.key === "Enter")
    }

    renderRestaurants = () => {
        const { restaurants } = this.props;
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
                    />
                )
            })
        )
    }

    renderOptions = () => {
        const { restaurants } = this.props

        return (
            restaurants.map(element => {
                return (
                    <OptionText
                        onClick={() => this.handleFilter(element.category)}
                    >
                        {element.category}
                    </OptionText>
                )
            })
        )
    }

    handleFilter = (filter) => {

        this.setState({
            currentFilter: filter
        })
    }

    render() {
        return (
            <FeedWrapper>
                <LogoWrapper>
                    <Logo>FutureEats</Logo>
                </LogoWrapper>
                <div>
                    <SearchBar
                        name="search"
                        type="text"
                        onChange={""}
                        placeholder="Restaurante"
                        startAdornment={
                            <SearchIconCustom edge="start" />
                        }
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleOnKeyDown}
                    />
                </div>
                <NavBar>
                    <OptionText onClick={() => this.handleFilter(false)}>Todos</OptionText>
                    {this.renderOptions()}
                </NavBar>
                <ContentWrapper>
                    {(this.props.restaurants) && this.renderRestaurants()}
                </ContentWrapper>
                <Footer />
            </FeedWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants

})
const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        getRestaurants: () => dispatch(getRestaurants()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageFeed);