import React from 'react'
import {shallow} from 'enzyme'
import { 
    OrderCardWrapper, 
    OrderImg,
    OrderName,
    OrderNumber, 
    OrderDescription,
    OrderPrice,
    OrderRemove,
    } from './style';
import OrderCard from './index'



describe ("Testing OrdersList", () => {
    test("Finding subComponents of OrderCard", () => {
        //preparação

        const renderedComponent = shallow(<OrderCard/>)

        renderedComponent.setState({orders: true})

        const findOrderCardWrapper = renderedComponent.find(OrderCardWrapper)
        const findOrderImg = renderedComponent.find(OrderImg)
        const findOrderName = renderedComponent.find(OrderName)
        const findOrderNumber = renderedComponent.find(OrderNumber)
        const findOrderDescription = renderedComponent.find(OrderDescription)
        const findOrderPrice = renderedComponent.find(OrderPrice)
        const findOrderRemove = renderedComponent.find(OrderRemove)


        //verificação
        expect(findOrderCardWrapper).toHaveLength(1);
        expect(findOrderImg).toHaveLength(1);
        expect(findOrderName).toHaveLength(1);
        expect(findOrderNumber).toHaveLength(1);
        expect(findOrderDescription).toHaveLength(1);
        expect(findOrderPrice).toHaveLength(1);
        expect(findOrderRemove).toHaveLength(1);
    })
})