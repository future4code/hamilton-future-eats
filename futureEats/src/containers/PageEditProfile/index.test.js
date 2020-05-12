import React from 'react';
import {shallow} from 'enzyme'
import { ProfileWrapper, ProfileHeader, ProfileText, 
EditProfileInputsWrapper} from '../PageProfile/style';
import { Inputs, EntrarButton } from '../PageLogin/style'
import {PageEditProfile} from '../PageEditProfile/index'

describe ("Testing edit profile page", () => {
    test("Finding subComponents", () => {
        //preparação
        const renderedComponent = shallow(<PageEditProfile/>)
        const findProfileWrapper = renderedComponent.find(ProfileWrapper)
        const findProfileHeader = renderedComponent.find(ProfileHeader)
        const findProfileText = renderedComponent.find(ProfileText)
        const findEditProfileInputsWrapper = renderedComponent.find(EditProfileInputsWrapper)
        const findInputs = renderedComponent.find(Inputs)
        const findEntrarButton = renderedComponent.find(EntrarButton)

        //verificação
        expect(findProfileWrapper).toHaveLength(1)
        expect(findProfileText).toHaveLength(1)
        expect(findProfileHeader).toHaveLength(1)
        expect(findEditProfileInputsWrapper).toHaveLength(1)
        expect(findInputs).toHaveLength(3)
        expect(findEntrarButton).toHaveLength(1)
    })

})
