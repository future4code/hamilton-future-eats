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
            currentFilter: ""
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
        const { restaurants } = this.props
        let filteredRestaurants = restaurants

        if (this.state.currentFilter) {
            filteredRestaurants = restaurants.filter(element => {
                return (
                    element.category === this.state.currentFilter
                )
            })
            return filteredRestaurants
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
        console.log(this.state.currentFilter)
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
                    <OptionText>Todos</OptionText>
                    {this.renderOptions()}
                </NavBar>
                <ContentWrapper>
                    {this.renderRestaurants()}
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