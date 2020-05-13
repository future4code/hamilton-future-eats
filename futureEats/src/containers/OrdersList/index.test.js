import React from 'react'
import {shallow} from 'enzyme'
import { 
    OrdersListWrapper, 
    IfEmpty, 
    OrderWrapper,
    RestaurantInfo,
    RestaurantName, 
    RestaurantAddress,
    ExpectedTime,
    OrderCard,
    OrderImg,
    OrderName,
    OrderNumber,
    OrderDescription,
    OrderRemove,
    OrderPrice,
    } from './style';
import {OrdersList} from './index'



describe ("Testing OrdersList", () => {
    test("Finding subComponents of cart with items", () => {
        //preparação
        const renderedComponent = shallow(<OrdersList/>)

        renderedComponent.setState({orders: true})

        const findOrdersListWrapper = renderedComponent.find(OrdersListWrapper)
        const findIfEmpty = renderedComponent.find(IfEmpty) 
        const findOrderWrapper = renderedComponent.find(OrderWrapper)
        const findRestaurantInfo = renderedComponent.find(RestaurantInfo)
        const findRestaurantName = renderedComponent.find(RestaurantName)
        const findRestaurantAddress = renderedComponent.find(RestaurantAddress)
        const findExpectedTime = renderedComponent.find(ExpectedTime)
        // const findOrderCard = renderedComponent.find(OrderCard)
        // const findOrderImg = renderedComponent.find(OrderImg)
        // const findOrderName = renderedComponent.find(OrderName)
        // const findOrderNumber = renderedComponent.find(OrderNumber)
        // const findOrderDescription = renderedComponent.find(OrderDescription)
        // const findOrderRemove = renderedComponent.find(OrderRemove)
        // const findOrderPrice = renderedComponent.find(OrderPrice)

        //verificação
        expect(findOrdersListWrapper).toHaveLength(1);
        expect(findOrderWrapper).toHaveLength(1);
        expect(findRestaurantInfo).toHaveLength(1);
        expect(findRestaurantName).toHaveLength(1);
        expect(findRestaurantAddress).toHaveLength(1);
        expect(findExpectedTime).toHaveLength(1);
        // expect(findOrderImg).toHaveLength(1);
        // expect(findOrderCard).toHaveLength(1);
        // expect(findOrderName).toHaveLength(1);
        // expect(findOrderNumber).toHaveLength(1);
        // expect(findOrderDescription).toHaveLength(1);
        // expect(findOrderRemove).toHaveLength(2);
        // expect(findOrderPrice).toHaveLength(1);
    })
    test("Finding subComponents of empty cart", () => {
        //preparação
        const renderedComponent = shallow(<OrdersList/>)

        renderedComponent.setState({orders: false})

        const findIfEmpty = renderedComponent.find(IfEmpty) 

        //verificação
        expect(findIfEmpty).toHaveLength(1);
    })
})