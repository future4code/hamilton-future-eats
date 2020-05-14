import React from "react";
import {SearchBarInput, SearchIconCustom,} from "./style";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import {setSearch} from "../../actions/page"

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchInput: ""
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleOnKeyDown = (event) => {

        if((event.key === "Enter") && (this.state.searchInput!=="")){
            this.props.setSearch(this.state.searchInput)
            this.props.goToPageSearch();
        }
    }

    render(){
        return(
            <div>
                <SearchBarInput
                    name="searchInput"
                    type="text"
                    placeholder="Restaurante"
                    startAdornment={
                        <SearchIconCustom edge="start" />
                    }
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleOnKeyDown}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToPageSearch: () => dispatch(push(routes.search)),
        setSearch: (searchFromInput) => dispatch(setSearch(searchFromInput))
    }
}

export default connect(null, mapDispatchToProps) (SearchBar);