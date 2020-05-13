import React from 'react';
import { connect } from "react-redux";
import { FeedWrapper, SearchBar, SearchIconCustom, LogoWrapper, Logo, NavBar, OptionText, ContentWrapper } from "./style";
import CardProduct from "../../components/CardProduct";
import Footer from "../Footer";
import {setCurrentPage} from "../../actions/page"
import {getRestaurants} from "../../actions/restaurants"


class PageFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
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
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                    <OptionText>Option</OptionText>
                </NavBar>
                <ContentWrapper>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
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