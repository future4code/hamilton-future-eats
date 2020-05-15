import React from "react";
import { ProductWrapper, ImageWrapper, LogoRestaurant, NameRestaurant, ShippingPriceWrapper, InfoWrapper, Name, PriceShipping } from "./style"


export default function CardProduct(props) {
    return (
        <ProductWrapper onClick={props.onClick}>
            <ImageWrapper>
                <LogoRestaurant src={props.logoUrl} />
            </ImageWrapper>
            <InfoWrapper>
                <NameRestaurant>
                    <Name>{props.name}</Name>
                </NameRestaurant>
                <ShippingPriceWrapper>
                    <PriceShipping>Frete R$ {props.shipping},00</PriceShipping>
                    <PriceShipping>{props.deliveryTime} min</PriceShipping>
                </ShippingPriceWrapper>
            </InfoWrapper>

        </ProductWrapper>
    )
}