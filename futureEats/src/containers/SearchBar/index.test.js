import React from 'react'
import { SearchBarInput, SearchIconCustom } from '../SearchBar/style'
import renderer from 'react-test-renderer'

test("Testando styled do SearchBarInput", () => {
    const newSnapShot = renderer.create(<SearchBarInput />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do SearchIconCustom", () => {
    const newSnapShot = renderer.create(<SearchIconCustom />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})