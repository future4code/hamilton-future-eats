import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


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

export const Logo = styled.img`
  width: 104px;
  height: 58px;
  margin-top: 34px;

`
export const Create = styled(Typography)`
    margin-top: 28px;
    padding: 5px 20px 5px 20px;
    font-size: 16px;
    font-weight:  bold;
`
export const Inputs = styled(TextField)`
    margin-top: 16px;
    width: 328px;
`
export const CreateButton = styled(Button)`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    margin-top: 16px;
    
`   
export const SignUpHeader = styled.div `
    height: 44px;
    width: 100%;
    border-bottom: solid 0.1px #bdc3c7;
    display: flex; 
    align-items: center;
`
export const Icon = styled.div`
    margin-left: 16px;
    padding: auto;
    width: fit-content;
    height: fit-content;
`



