import React from 'react'
import {shallow} from 'enzyme'
import { LoginWrapper, Logo, MyAddress, Inputs, SaveButton } from './style';
import {PageAddressRegistration} from './index'



describe ("Testing PageAddressRegistration", () => {
    test("Finding subComponents", () => {
        //preparação
        const renderedComponent = shallow(<PageAddressRegistration/>)
        const findLoginWrapper = renderedComponent.find(LoginWrapper)
        const findLogo = renderedComponent.find(Logo)
        const findMyAddress = renderedComponent.find(MyAddress)
        const findInputs = renderedComponent.find(Inputs)
        const findSaveButton = renderedComponent.find(SaveButton)

        //verificação
        expect(findLoginWrapper).toHaveLength(1);
        expect(findLogo).toHaveLength(1);
        expect(findMyAddress).toHaveLength(1);
        expect(findInputs).toHaveLength(6);
        expect(findLogo).toHaveLength(1);
        
    })
    test("handleInputChange", () => {
        //preparação
        const renderedComponent = shallow(<PageAddressRegistration/>)
        const findStreet = renderedComponent.find({name: "street"})
        const findNumber = renderedComponent.find({name: "number"})
        const findNeighbourhood = renderedComponent.find({name: "neighbourhood"})
        const findCity = renderedComponent.find({name: "city"})

        //execução
        findStreet.simulate("change", {target: {value: "test", name: "street"}})
        findNumber.simulate("change", {target: {value: "test1", name: "number"}})
        findNeighbourhood.simulate("change", {target: {value: "test2", name: "neighbourhood"}})
        findCity.simulate("change", {target: {value: "test3", name: "city"}})
      
        //verificação
        expect(renderedComponent.state().street).toEqual("test")
        expect(renderedComponent.state().number).toEqual("test1")
        expect(renderedComponent.state().neighbourhood).toEqual("test2")
        expect(renderedComponent.state().city).toEqual("test3")
        
    })
})
