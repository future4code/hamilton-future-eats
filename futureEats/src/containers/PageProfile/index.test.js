import React from 'react'
import {shallow} from 'enzyme'
import { ProfileWrapper, ProfileHeader, ProfileText, ProfileInfos, EditIcon, ProfileInfosWrapper, 
ProfileAdressInfoWrapper, ProfileTextSecond, ProfileAdressInfo, HistPedidosCard, PedidoPlaceText,
PedidoDateText, SubtotalText, HistPedidosWrapper, Footer} from './style';
import {PageProfile} from './index'
import renderer from 'react-test-renderer'

describe ("Testing profile page", () => {
    test("Finding subComponents", () => {
        //preparação
        const renderedComponent = shallow(<PageProfile/>)
        const findProfileWrapper = renderedComponent.find(ProfileWrapper)
        const findProfileHeader = renderedComponent.find(ProfileHeader)
        const findProfileText = renderedComponent.find(ProfileText)
        const findProfileInfos = renderedComponent.find(ProfileInfos)
        const findEditIcon = renderedComponent.find(EditIcon)
        const findProfileInfosWrapper = renderedComponent.find(ProfileInfosWrapper)
        const findProfileAdressInfoWrapper = renderedComponent.find(ProfileAdressInfoWrapper)
        const findProfileTextSecond = renderedComponent.find(ProfileTextSecond)
        const findProfileAdressInfo = renderedComponent.find(ProfileAdressInfo)
        const findHistPedidosCard = renderedComponent.find(HistPedidosCard)
        const findPedidoPlaceText = renderedComponent.find(PedidoPlaceText)
        const findPedidoDateText = renderedComponent.find(PedidoDateText)
        const findSubtotalText = renderedComponent.find(SubtotalText)
        const findHistPedidosWrapper = renderedComponent.find(HistPedidosWrapper)
        const findFooter = renderedComponent.find(Footer)
        //verificação
        expect(findProfileWrapper).toHaveLength(1)
        expect(findProfileHeader).toHaveLength(1)
        expect(findProfileText).toHaveLength(6)
        expect(findProfileInfos).toHaveLength(1)
        expect(findEditIcon).toHaveLength(2)
        expect(findProfileInfosWrapper).toHaveLength(2)
        expect(findProfileAdressInfoWrapper).toHaveLength(1)
        expect(findProfileTextSecond).toHaveLength(1)
        expect(findProfileAdressInfo).toHaveLength(1)
        expect(findHistPedidosCard).toHaveLength(4)
        expect(findPedidoPlaceText).toHaveLength(4)
        expect(findPedidoDateText).toHaveLength(4)
        expect(findSubtotalText).toHaveLength(4)
        expect(findHistPedidosWrapper).toHaveLength(1)
        expect(findFooter).toHaveLength(1)
    })
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
    test("Testando styled do PedidoPlaceText", () => {
        const newSnapShot = renderer.create(<PedidoPlaceText />).toJSON();

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

})
