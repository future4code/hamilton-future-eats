import React, { Fragment } from 'react';
import QuantityBox from '../QuantityBox';
import { Snackbar } from '@material-ui/core';

export default class OrderCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const { price, photoUrl, name, description, quantity } = this.props

        return (
            <Fragment>
                <Snackbar
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={this.state.Transition}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">I love snacks</span>}
                />
            </Fragment>
        )
    }
}