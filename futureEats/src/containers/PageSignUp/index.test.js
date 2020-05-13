import React from 'react'
import {shallow} from 'enzyme'
import { LoginWrapper, Logo, Create, Inputs, CreateButton } from './style';
import {PageSignUp} from './index'


describe ("Testing SignUp page", () => {
    test("Finding subComponents", () => {
        //preparação
        const renderedComponent = shallow(<PageSignUp/>)
        const findLoginWrapper = renderedComponent.find(LoginWrapper)
        const findLogo = renderedComponent.find(Logo)
        const findCreate = renderedComponent.find(Create)
        const findInputs = renderedComponent.find(Inputs)
        const findCreateButton = renderedComponent.find(CreateButton)
        
        //verificação
        expect(findLoginWrapper).toHaveLength(1);
        expect(findLogo).toHaveLength(1);
        expect(findCreate).toHaveLength(1);
        expect(findInputs).toHaveLength(5);
        expect(findCreateButton).toHaveLength(1);

    })
    test("handleInputChange", () => {
        //preparação
        const renderedComponent = shallow(<PageSignUp/>)
        const findName = renderedComponent.find({name: "name"})
        const findEmails = renderedComponent.find({name: "email"})
        const findCpf = renderedComponent.find({name: "cpf"})
        const findPassword = renderedComponent.find({name: "password"})

        //execução
        findName.simulate("change", {target: {value: "test", name: "name"}})
        findEmails.simulate("change", {target: {value: "test1", name: "email"}})
        findCpf.simulate("change", {target: {value: "test2", name: "cpf"}})
        findPassword.simulate("change", {target: {value: "test3", name: "password"}})
       
        //verificação
        expect(renderedComponent.state().name).toEqual("test")
        expect(renderedComponent.state().email).toEqual("test1")
        expect(renderedComponent.state().cpf).toEqual("test2")
        expect(renderedComponent.state().password).toEqual("test3")

    })
    // test("handleSubmit", () => {
    //     //preparação
    //     const renderedComponent = shallow(<PageSignUp/>)
    //     const event = {preventDefault(){}}
    //     const findCreateButton = renderedComponent.find(CreateButton)

    //     //execução
    //     findCreateButton.simulate("click", event)

    //     //verificação
    //     expect(event).toHaveBeenCalledTimes(1)



    // })
})


