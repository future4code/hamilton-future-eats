import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
`
export const ProfileHeader = styled.div`
height: 44px;
width: 100%;
border-bottom: #b8b8b8 1px solid;
display: flex;
justify-content: center;
align-items: center;
`
export const ProfileText = styled(Typography)`
    font-size: 16px;
`
export const ProfileTextSecond = styled(Typography)`
    font-size: 16px;
    color: #b8b8b8;
`
export const ProfileInfos = styled.div`
    width: 100%;
    height: fit-content; 
`
export const EditIcon = styled.button `

`
export const ProfileInfosWrapper = styled.div `
    display: flex;
    margin: 16px;
`
export const ProfileAdressInfoWrapper = styled.div `
    display: flex;
    width: 100%;
    height: fit-content;
    background: #eeeeee;
    padding: 16px;
`
export const ProfileAdressInfo = styled.div `
    width: 100%;
    height: fit-content; 
`
export const HistPedidosCard = styled.div `
    width: 100%;
    height: fit-content;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
export const PedidoPlaceText = styled(Typography) `
    font-size: 16px;
    color: #5cb646;
`
export const PedidoDateText = styled(Typography) `
    font-size: 12px;
`
export const SubtotalText = styled(Typography)`
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`
export const HistPedidosWrapper = styled.div `
    display: grid;
    grid-gap: 15px;
    padding: 16px;
`
export const Footer = styled.div `
    height: 56px;
    width: 100%;
    border-top: #b8b8b8 1px solid;
    position: fixed;
    bottom: 0;
    background-color: white;
    z-index: 1;
`
export const EditProfileInputsWrapper = styled.div `
    
    margin: 16px;
`