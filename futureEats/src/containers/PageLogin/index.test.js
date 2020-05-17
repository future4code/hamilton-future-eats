import React from 'react'
import {shallow} from 'enzyme'
import { LoginWrapper, Logo, Entrar, Inputs, EntrarButton, Cadastrar, Form, Span } from './style';
import {PageLogin} from './index'
import renderer from 'react-test-renderer'



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
    test("Testando styled do LoginWrapper", () => {
        const newSnapShot = renderer.create(<LoginWrapper />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do Logo", () => {
        const newSnapShot = renderer.create(<Logo />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do Entrar", () => {
        const newSnapShot = renderer.create(<Entrar />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do Inputs", () => {
        const newSnapShot = renderer.create(<Inputs />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do EntrarButton", () => {
        const newSnapShot = renderer.create(<EntrarButton />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do Form", () => {
        const newSnapShot = renderer.create(<Form />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do Span", () => {
        const newSnapShot = renderer.create(<Span />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
})