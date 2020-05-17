import React from 'react'
import renderer from 'react-test-renderer'
import { HomeWrapper, Logo } from '../PageHome/style'

test("Testando styled do HomeWrapper", () => {
    const newSnapShot = renderer.create(<HomeWrapper />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do Logo", () => {
    const newSnapShot = renderer.create(<Logo />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})