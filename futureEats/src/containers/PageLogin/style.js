import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 16px 0 16px;/* acrescentei esse padding lateral */
`

export const Logo = styled.img`
  width: 104px;
  height: 58px;
  margin-top: 88px;

`
export const Entrar = styled(Typography)`
    margin-top: 28px;
    padding: 5px 20px 5px 20px;
    font-size: 16px;
    font-weight: bold;
`
export const Inputs = styled(TextField)`
    margin-top: 16px;
    width: 100%;/* mudei pra 100% */
`
export const EntrarButton = styled(Button)`
     width: 100%;/* mudei pra 100% */
    height: 42px;
    border-radius: 2px;
    margin-top: 16px;
    
`   
export const Cadastrar = styled(Typography)`
margin-top: 28px;
padding: 5px 20px 5px 20px;
font-size: 16px;
`
export const Form = styled.form`
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
`

export const Span = styled.span`
cursor: pointer;
:hover{
    color: blue;
    text-decoration: underline;
}
`