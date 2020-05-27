import React from 'react'
import {shallow} from 'enzyme'
import { Form, LoginWrapper, AdressHeader, BackIcon, Logo, MyAddress, Inputs, SaveButton } from './style';
import {PageAddressRegistration} from './index'
import renderer from 'react-test-renderer'



describe ("Testing PageAddressRegistration", () => {
    // test("Finding subComponents", () => {
    //     //preparação
    //     const renderedComponent = shallow(<PageAddressRegistration/>)
    //     const findLoginWrapper = renderedComponent.find(LoginWrapper)
    //     const findLogo = renderedComponent.find(Logo)
    //     const findMyAddress = renderedComponent.find(MyAddress)
    //     const findInputs = renderedComponent.find(Inputs)
    //     const findSaveButton = renderedComponent.find(SaveButton)

    //     //verificação
    //     expect(findLoginWrapper).toHaveLength(1);
    //     expect(findLogo).toHaveLength(1);
    //     expect(findMyAddress).toHaveLength(1);
    //     expect(findInputs).toHaveLength(6);
    //     expect(findLogo).toHaveLength(1);
        
    // })
    // test("handleInputChange", () => {
    //     //preparação
    //     const renderedComponent = shallow(<PageAddressRegistration/>)
    //     const findStreet = renderedComponent.find({name: "street"})
    //     const findNumber = renderedComponent.find({name: "number"})
    //     const findNeighbourhood = renderedComponent.find({name: "neighbourhood"})
    //     const findCity = renderedComponent.find({name: "city"})

    //     //execução
    //     findStreet.simulate("change", {target: {value: "test", name: "street"}})
    //     findNumber.simulate("change", {target: {value: "test1", name: "number"}})
    //     findNeighbourhood.simulate("change", {target: {value: "test2", name: "neighbourhood"}})
    //     findCity.simulate("change", {target: {value: "test3", name: "city"}})
      
    //     //verificação
    //     expect(renderedComponent.state().street).toEqual("test")
    //     expect(renderedComponent.state().number).toEqual("test1")
    //     expect(renderedComponent.state().neighbourhood).toEqual("test2")
    //     expect(renderedComponent.state().city).toEqual("test3")
        
    // })
    test("Testando styled do Form", () => {
        const newSnapShot = renderer.create(<Form />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do LoginWrapper", () => {
        const newSnapShot = renderer.create(<LoginWrapper />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do AdressHeader", () => {
        const newSnapShot = renderer.create(<AdressHeader />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do MyAddress", () => {
        const newSnapShot = renderer.create(<MyAddress />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do Inputs", () => {
        const newSnapShot = renderer.create(<Inputs />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do SaveButton", () => {
        const newSnapShot = renderer.create(<SaveButton />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do BackIcon", () => {
        const newSnapShot = renderer.create(<BackIcon />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })

})
