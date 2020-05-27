import styled from "styled-components";
import { Typography } from "@material-ui/core";


export const ProductWrapper = styled.div`
    height: 188px;
    width: 328px;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    margin-top: 8px;
    display:grid;
    grid-template-rows: 120px 1fr;
    
    opacity: 1;
    transition: opacity 0.5s;
    
    :active {
        background-color: #000000;
        opacity: 0.5;
    }
`

export const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
`

export const LogoRestaurant = styled.img`
    width: 326px;
    height: 120px;
    border-radius: 8px 8px 0px 0px;
`

export const NameRestaurant = styled.div`
    box-sizing: border-box; 
    
`
export const ShippingPriceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`

export const InfoWrapper = styled.div`
    height: fit-content;
    padding: 12px 16px 16px 16px;

`

export const Name = styled(Typography)`
    color: #5cb646;
    font-size: 16px;
    letter-spacing: -0.39px;
`

export const PriceShipping = styled(Typography)`
    color: #b8b8b8;
    font-size: 16px;
    letter-spacing: -0.39px;
`

