import React from 'react';
import {connect} from "react-redux"

class PageRestaurant extends React.Component{

    componentDidMount() {

    }

    render(){
        return(
            <div>
                RESTAURANTE
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect (mapStateToProps, mapDispatchToProps) (PageRestaurant);