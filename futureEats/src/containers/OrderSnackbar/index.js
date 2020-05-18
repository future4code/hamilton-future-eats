import React, { Fragment } from 'react';
import {CustomSnackbar, SnackbarWrapper} from "./styled"

export default class OrderSnackBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const { price, photoUrl, name, description, quantity } = this.props

        return (
            <SnackbarWrapper>
                <CustomSnackbar
                    // anchorOrigin={{
                    //     vertical: 'bottom',
                    //     horizontal: 'center',
                    // }}
                    open={true}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Note archived</span>}
                    action={[
                        <button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                        UNDO
                        </button>,
                        // <IconButton
                        // key="close"
                        // aria-label="Close"
                        // color="inherit"
                        // className={classes.close}
                        // onClick={this.handleClose}
                        // >
                        // <CloseIcon />
                        // </IconButton>,
                    ]}
                    />
            </SnackbarWrapper>
        )
    }
}