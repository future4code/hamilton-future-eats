import React from 'react'
import {shallow} from 'enzyme'
import { LoginWrapper, Logo, Entrar, Inputs, EntrarButton, Cadastrar } from './style';
import {PageLogin} from './index'



describe ("Testing login page", () => {
    test("Finding subComponents", () => {
        //preparação
        const renderedComponent = shallow(<PageLogin/>)
        const findLoginWrapper = renderedComponent.find(LoginWrapper)
        const findLogo = renderedComponent.find(Logo) 
        const findEntrar = renderedComponent.find(Entrar)
        const findInputs = renderedComponent.find(Inputs)
        const findEntrarButton = renderedComponent.find(EntrarButton)
        const findCadastrar = renderedComponent.find(Cadastrar)

        //verificação
        expect(findLoginWrapper).toHaveLength(1);
        expect(findLogo).toHaveLength(1);
        expect(findEntrar).toHaveLength(1);
        expect(findInputs).toHaveLength(2);
        expect(findEntrarButton).toHaveLength(1);
        expect(findCadastrar).toHaveLength(1);

    })
    test("handleInput", () => {
        //preparação
        const renderedComponent = shallow(<PageLogin/>)
        const findEmails = renderedComponent.find({name: "email"})
        const findPassword = renderedComponent.find({name: "password"})
        //execução
        findEmails.simulate("change", {target: {value: "test", name: "email"}})
        findPassword.simulate("change", {target: {value: "test2", name: "password"}})
        //verificação
        expect(renderedComponent.state().email).toEqual("test")
        expect(renderedComponent.state().password).toEqual("test2")
    })
    test("handleClickShowPassword, handleClickLogin", () => {
        //preparação
        const renderedComponent = shallow(<PageLogin/>)
        const findEmails = renderedComponent.find({name: "email"})
        const findPassword = renderedComponent.find({name: "password"})
        //execução
        findEmails.simulate("change", {target: {value: "test", name: "email"}})
        findPassword.simulate("change", {target: {value: "test2", name: "password"}})
        //verificação
        expect(renderedComponent.state().email).toEqual("test")
        expect(renderedComponent.state().password).toEqual("test2")
    })
})