import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio';


export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-height: 100%;
`

export const Title = styled(Typography)`
    width: 100%;
    font-size: 19px;
    padding: 12px 0;
    text-align: center;
    `

export const DeliveryAddressWrapper = styled.div`
    width: 100%;
    height: 76px;
    padding: 16px 16px;
    background-color: #eeeeee;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    box-shadow: 0 -0.9px 0 0 rgba(0, 0, 0, 0.25);
`

export const AddressTitle = styled(Typography)`
    font-size: 16px;
    color: #b8b8b8;
    width: 328px;
`

export const Address = styled(Typography)`
    font-size: 16px;
    width: 328px;
`

export const PaymentWrapper = styled.div`
    min-height: ${({orders}) => (orders ? 'none' : '355px')};
    max-height: 100%;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 16px 0 16px;
`

export const DeliveryPrice = styled(Typography)`
    width: 100%;
    font-size: 16px;
    text-align: end;
`

export const TotalPrice = styled.div`
    display: flex;
    width: 100%;
    padding: 14px 0;
`

export const SubTotalTitle = styled(Typography)`
    font-size: 18px;
    width: 50%;
    text-align: start;
`

export const SubTotalPrice = styled(Typography)`
    font-size: 18px;
    width: 50%;
    text-align: end;
    font-weight: 700;
    color: #5cb646;
`

export const PaymentMethod = styled.div`
    width: 100%;
`

export const PaymentTitle = styled(Typography)`
    width: 100%;
    padding: 8px 0;
    border-bottom: solid 1px #000000;
`

export const PaymentRadioGroup = styled(RadioGroup)`
    height: auto;
    width: 100%;
    padding-top: 11px;
`

export const RadioPayment = styled(FormControlLabel)`
    width: 100%;
    height: 18px;
    padding: 14px 0;
    font-size: 16px;
    color: black;
`
export const RadioCustom = styled(Radio)`
    && {
        color: #000000
    }
`
export const ConfirmButton = styled(Button)`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    margin: 14px 0;
    background-color: #5cb646;

    &&:hover{
        background-color: #5cb646;
    }
`   