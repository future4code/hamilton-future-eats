import React from 'react'
import renderer from 'react-test-renderer'
import {
    FeedWrapper, LogoWrapper, Logo,
    NavBar, OptionText, ContentWrapper
} from '../PageFeed/style'

test("Testando styled do FeedWrapper", () => {
    const newSnapShot = renderer.create(<FeedWrapper />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do LogoWrapper", () => {
    const newSnapShot = renderer.create(<LogoWrapper />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do Logo", () => {
    const newSnapShot = renderer.create(<Logo />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do NavBar", () => {
    const newSnapShot = renderer.create(<NavBar />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do OptionText", () => {
    const newSnapShot = renderer.create(<OptionText />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ContentWrapper", () => {
    const newSnapShot = renderer.create(<ContentWrapper />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})