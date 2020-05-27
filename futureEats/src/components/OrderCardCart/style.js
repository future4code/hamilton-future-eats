
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const OrderCardWrapper = styled.div`
width: 100%;
height: 112px;
border-radius: 8px;
border: solid 1px #b8b8b8;
margin-bottom: 8px;
display: grid;
grid: repeat(10, 1fr) / repeat(10, 1fr);
`

export const OrderImg = styled.img`
grid-column: 1 / 4;
grid-row: 1 / 11;
height: 100%;
width: 100%;
border-radius: 8px 0 0 8px;
`

export const OrderName = styled(Typography)`
color: #5cb646;
padding-left: 16px;
font-size: 16px;
grid-column: 4/10;
grid-row: 1/3;
height: 46px;
display: flex;
align-items: center;
`

export const OrderNumber = styled(Typography)`
color: #5cb646;
border-bottom: #5cb646 1px solid;
border-left: #5cb646 1px solid;
border-radius: 0 8px;
grid-column: 10/11;
grid-row: 1/3;
display: flex;
align-items: center;
justify-content: center;
`

export const OrderDescription = styled(Typography)`
font-size: 12px;
color: #b8b8b8;
grid-row: 4/7;
grid-column: 4/10;
padding: 8px 0 0 16px;
overflow-y: scroll;
`

export const OrderPrice = styled(Typography)`
font-size: 16px;
font-weight: 700;
grid-row: 7/10;
grid-column: 4/8;
padding: 4px 0 0 16px;
`

export const OrderButton = styled(Typography)`
color: #e02020;
border-top: 1px solid #e02020;
border-left: 1px solid #e02020;
min-height: 31px;
border-radius: 8px 0;
grid-column: 8/11;
grid-row: 7/11;
margin-top: 7px;
display: flex;
align-items: center;
justify-content: center;
`