import React from 'react';
import {connect} from "react-redux";
import {FeedWrapper, SearchBar, SearchIconCustom,LogoWrapper, Logo, NavBar, OptionText, ContentWrapper} from "./style";
import CardProduct from "../../components/CardProduct";
import Footer from "../Footer";

class PageFeed extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search: ""
        }
    }


    handleInputChange = (event) => {
        const {name, value} = event.target
        this.setState ({ [name]: value })
    }

    handleOnKeyDown = (event) =>{
        console.log(event.key==="Enter")
    }


    render(){
        return(
            <FeedWrapper>
                <LogoWrapper>
                    <Logo>FutureEats</Logo>
                </LogoWrapper>
                <div>
                    <SearchBar
                        name="search"
                        type="text"
                        onChange={""}
                        placeholder = "Restaurante"
                        startAdornment={
                            <SearchIconCustom edge="start"/>
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
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                </ContentWrapper>
                <Footer/>
            </FeedWrapper>
        )
    }
}

export default connect (null, null) (PageFeed);