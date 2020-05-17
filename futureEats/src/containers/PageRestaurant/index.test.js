import React from 'react'
import {
    RestaurantPageWrapper, Title, RestaurantInformation,
    RestaurantImg, RestaurantName, Delivery, Details,
    MenuWrapper, MainMenu, SideDish, Beverage, MenuTitle
} from '../PageRestaurant/style'
import renderer from 'react-test-renderer'

test("Testando styled do RestaurantPageWrapper", () => {
    const newSnapShot = renderer.create(<RestaurantPageWrapper />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do Title", () => {
    const newSnapShot = renderer.create(<Title />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do RestaurantInformation", () => {
    const newSnapShot = renderer.create(<RestaurantInformation />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do RestaurantImg", () => {
    const newSnapShot = renderer.create(<RestaurantImg />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do RestaurantName", () => {
    const newSnapShot = renderer.create(<RestaurantName />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do Delivery", () => {
    const newSnapShot = renderer.create(<Delivery />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do Details", () => {
    const newSnapShot = renderer.create(<Details />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do MenuWrapper", () => {
    const newSnapShot = renderer.create(<MenuWrapper />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do MainMenu", () => {
    const newSnapShot = renderer.create(<MainMenu />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do SideDish", () => {
    const newSnapShot = renderer.create(<SideDish />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do Beverage", () => {
    const newSnapShot = renderer.create(<Beverage />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do MenuTitle", () => {
    const newSnapShot = renderer.create(<MenuTitle />).toJSON()

    expect(newSnapShot).toMatchSnapshot();
})