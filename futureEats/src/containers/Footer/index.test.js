import React from 'react'
import { FooterWrapper } from '../Footer/style'
import renderer from 'react-test-renderer'


test("Testando styled do FooterWrapper", () =>{
    const newSnapShot = renderer.create(<FooterWrapper/>).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
