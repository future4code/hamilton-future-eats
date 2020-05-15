import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class QuantityBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                quantity: 0,
        }
    }


    // handleClickOpen = () => {
    //     this.setState({ open: true });
    //   };
    

    
      handleNumberOf = event => {
        this.setState({ quantity: event.target.value });
      };

      handleOrder = event => {
        this.props.toCart( this.state.quantity );
      }

    render() {
        const { open, close } = this.props

        const numberOf = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

        return (
            <Dialog
            open={open}
            onClose={close}
          >
            <DialogTitle id="quantity">Selecione a quantidade desejada</DialogTitle>
            <DialogContent>
              <form>
                <FormControl>
                  <Select
                    value={this.state.quantity}
                    onChange={this.handleNumberOf}
                  >
                    <MenuItem value= "" ></MenuItem>
                    {numberOf.map( quantity => (
                    <MenuItem id={quantity} value= {quantity} >{quantity}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleOrder} color="primary">
                Adicionar
              </Button>
            </DialogActions>
          </Dialog>
        )
    }
}