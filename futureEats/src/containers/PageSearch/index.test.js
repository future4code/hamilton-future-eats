import React from 'react'
import {
    SearchWrapper, LogoWrapper, DivBackIcon,
    Logo, BackIcon, ResultsWrapper
} from '../PageSearch/style'
import renderer from 'react-test-renderer'

test("Testando styled do SearchWrapper", () => {
    const newSnapShot = renderer.create(<SearchWrapper />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do LogoWrapper", () => {
    const newSnapShot = renderer.create(<LogoWrapper />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do DivBackIcon", () => {
    const newSnapShot = renderer.create(<DivBackIcon />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do Logo", () => {
    const newSnapShot = renderer.create(<Logo />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do BackIcon", () => {
    const newSnapShot = renderer.create(<BackIcon />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ResultsWrapper", () => {
    const newSnapShot = renderer.create(<ResultsWrapper />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})