import React from 'react'
import {shallow} from 'enzyme'
import { ProfileWrapper, ProfileHeader, ProfileText, ProfileInfos, EditIcon, ProfileInfosWrapper, 
ProfileAdressInfoWrapper, ProfileTextSecond, ProfileAdressInfo, HistPedidosCard, PedidoPlaceText,
PedidoDateText, SubtotalText, HistPedidosWrapper, Footer} from './style';
import {PageProfile} from './index'

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

})
