import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const RestaurantPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 99%;
`

export const Title = styled(Typography)`
    width: 100%;
    height: 44px;
    font-size: 16px;
    padding: 12px 0;
    text-align: center;
    `

export const RestaurantInformation = styled.div`
    width: 100%;
    height: 263px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    padding: 16px 16px;
    box-shadow: 0 -0.9px 0 0 rgba(0, 0, 0, 0.25);
`

export const RestaurantImg = styled.img`
    width: 328px;
    height: 120px;
    padding-bottom: 12px;
    border-radius: 8px 8px 0 0;
`


export const RestaurantName = styled(Typography)`
    font-size: 16px;
    color: #5cb646;
    display: inline;
`

export const Delivery = styled(Typography)`
    font-size: 16px;
    color: #b8b8b8;
    width: 112px;
`

export const Details = styled(Typography)`
    font-size: 16px;
    color: #b8b8b8;
    width: 100%;
    display: flex;
`

export const MenuWrapper = styled.div`
    height: 293px;
    width: 100%;
    overflow-y: scroll;
    padding: 0 16px;
`

export const MainMenu = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

export const SideDish = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`
export const Beverage = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const MenuTitle = styled(Typography)`
    font-size: 16px;
    text-align: start;
    color: #000000;
    border-bottom: 1px black solid;
    width: 328px;
    margin-bottom: 8px;
`
