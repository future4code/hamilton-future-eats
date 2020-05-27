import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FaAngleLeft } from 'react-icons/fa'

export const Form = styled.form`
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
`
export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
export const AdressHeader = styled.div `
    height: 44px;
    width: 100%;
    border-bottom: 1px #b8b8b8 solid;
    padding-left: 16px ;
`
export const MyAddress = styled(Typography)`
    margin-top: 17px;
    padding: 5px 20px 5px 20px;
    font-size: 16px;
    font-weight:  bold;
`
export const Inputs = styled(TextField)`
    margin-top: 16px;
    width: 328px;
    height: 56px;
`
export const SaveButton = styled(Button)`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    margin-top: 16px;
`   
export const BackIcon = styled(FaAngleLeft) `
    margin-top: 12px;
    :active{
    background-color: #b8b8b8;
    border-radius: 6px;
}
`



