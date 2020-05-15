
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const OrdersListWrapper = styled.div`
width: 100%;
height: ${({orders}) => (orders ? '50' : 'auto')};
align-items: center;
display: flex;
flex-direction: column;
padding: 12px 4px 0 16px;
`

export const IfEmpty = styled(Typography)`
text-align: center;
font-size: 16px;
padding: 12px 0;
`

export const OrderWrapper = styled.div`
width: 100%;
height: ${({orders}) => (orders ? '42' : '200px')};
overflow-y: scroll;
`

export const RestaurantInfo = styled.div`
width: 100%;
height: 86px;
padding-bottom: 8px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`

export const RestaurantName = styled(Typography)`
font-size: 16px;
font-weight: 700;
color: #5cb646;
`

export const RestaurantAddress = styled(Typography)`
font-size: 16px;
color: #b8b8b8;
`

export const ExpectedTime = styled(Typography)`
font-size: 16px;
color: #b8b8b8;
`
