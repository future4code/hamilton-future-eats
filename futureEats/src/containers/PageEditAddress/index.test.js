import React from 'react'
import renderer from 'react-test-renderer'
import {
    ProfileWrapper, ProfileHeader, ProfileText,
    ProfileTextSecond, ProfileInfos, EditIcon, ProfileInfosWrapper,
    ProfileAdressInfoWrapper, ProfileAdressInfo, HistPedidosCard, PedidoPlaceText,
    PedidoDateText, SubtotalText, HistPedidosWrapper,
    EditProfileForm, BackIcon
} from '../PageEditAddress/style'

test("Testando styled do ProfileWrapper", () => {
    const newSnapShot = renderer.create(<ProfileWrapper />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ProfileHeader", () => {
    const newSnapShot = renderer.create(<ProfileHeader />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ProfileText", () => {
    const newSnapShot = renderer.create(<ProfileText />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ProfileTextSecond", () => {
    const newSnapShot = renderer.create(<ProfileTextSecond />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ProfileInfos", () => {
    const newSnapShot = renderer.create(<ProfileInfos />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do EditIcon", () => {
    const newSnapShot = renderer.create(<EditIcon />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ProfileInfosWrapper", () => {
    const newSnapShot = renderer.create(<ProfileInfosWrapper />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ProfileAdressInfoWrapper", () => {
    const newSnapShot = renderer.create(<ProfileAdressInfoWrapper />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do ProfileAdressInfo", () => {
    const newSnapShot = renderer.create(<ProfileAdressInfo />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do HistPedidosCard", () => {
    const newSnapShot = renderer.create(<HistPedidosCard />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do PedidoDateText", () => {
    const newSnapShot = renderer.create(<PedidoDateText />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do SubtotalText", () => {
    const newSnapShot = renderer.create(<SubtotalText />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do HistPedidosWrapper", () => {
    const newSnapShot = renderer.create(<HistPedidosWrapper />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do EditProfileForm", () => {
    const newSnapShot = renderer.create(<EditProfileForm />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})
test("Testando styled do BackIcon", () => {
    const newSnapShot = renderer.create(<BackIcon />).toJSON();

    expect(newSnapShot).toMatchSnapshot();
})


