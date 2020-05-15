import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { FaAngleLeft } from 'react-icons/fa'

export const ProfileWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 44px 86px 76px 56px 1fr 49px;
`
export const ProfileHeader = styled.div`
height: 100%;
width: 100%;
border-bottom: #b8b8b8 1px solid;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
export const ProfileText = styled(Typography)`
    font-size: 16px;
    margin: auto;
    grid-column: 2;
`
export const ProfileTextSecond = styled(Typography)`
    font-size: 16px;
    color: #b8b8b8;
`
export const ProfileInfos = styled.div`
    width: 100%;
    height: fit-content; 
`
export const EditIcon = styled.div `
    height: fit-content;
:active{
    background-color: #b8b8b8;
    border-radius: 6px;
}
`
export const ProfileInfosWrapper = styled.div `
    display: flex;
    margin: 10px 16px 16px 16px;
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
    overflow-y: scroll;
    height: 335px;
`
export const EditProfileForm = styled.form `
    margin: 16px;
`
export const BackIcon = styled(FaAngleLeft) `
    margin: auto 0 auto 16px;
    :active{
    background-color: #b8b8b8;
    border-radius: 6px;
}
`