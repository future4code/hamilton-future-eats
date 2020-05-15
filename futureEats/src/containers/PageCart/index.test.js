import React from 'react'
import {shallow} from 'enzyme'
import { 
    CartWrapper, 
    Title, 
    DeliveryAddressWrapper,
    AddressTitle,
    PaymentWrapper, 
    DeliveryPrice,
    TotalPrice,
    SubTotalTitle,
    SubTotalPrice,
    PaymentMethod,
    PaymentTitle,
    PaymentRadioGroup,
    RadioPayment,
    ConfirmButton } from './style';
import {PageCart} from './index'



describe ("Testing Cart Page", () => {
    test("Finding subComponents", () => {
        //preparação
        const mockFunction = jest.fn()

        const renderedComponent = shallow(<PageCart setCurrentPage={mockFunction}/>)
        const findCartWrapper = renderedComponent.find(CartWrapper)
        const findTitle = renderedComponent.find(Title) 
        const findDeliveryAdressWrapper = renderedComponent.find(DeliveryAddressWrapper)
        const findAddressTitle = renderedComponent.find(AddressTitle)
        const findPaymentWrapper = renderedComponent.find(PaymentWrapper)
        const findDeliveryPrice = renderedComponent.find(DeliveryPrice)
        const findTotalPrice = renderedComponent.find(TotalPrice)
        const findSubTotalTitle = renderedComponent.find(SubTotalTitle)
        const findSubTotalPrice = renderedComponent.find(SubTotalPrice)
        const findPaymentMethod = renderedComponent.find(PaymentMethod)
        const findPaymentTitle = renderedComponent.find(PaymentTitle)
        const findPaymentRadioGroup = renderedComponent.find(PaymentRadioGroup)
        const findRadioPayment = renderedComponent.find(RadioPayment)
        const findConfirmButton = renderedComponent.find(ConfirmButton)

        //verificação
        expect(findCartWrapper).toHaveLength(1);
        expect(findTitle).toHaveLength(1);
        expect(findDeliveryAdressWrapper).toHaveLength(1);
        expect(findAddressTitle).toHaveLength(1);
        expect(findPaymentWrapper).toHaveLength(1);
        expect(findDeliveryPrice).toHaveLength(1);
        expect(findTotalPrice).toHaveLength(1);
        expect(findSubTotalPrice).toHaveLength(1);
        expect(findSubTotalTitle).toHaveLength(1);
        expect(findPaymentMethod).toHaveLength(1);
        expect(findPaymentTitle).toHaveLength(1);
        expect(findPaymentRadioGroup).toHaveLength(1);
        expect(findRadioPayment).toHaveLength(2);
        expect(findConfirmButton).toHaveLength(1);

    })

    test("handleOnClick", () => {
        //preparação
        const mockOnClick = jest.fn()
        const mockFunction = jest.fn()

        const event = { preventDefault: () => {} };
        const renderedComponent = shallow(
            <PageCart 
            onClick={mockOnClick}
            setCurrentPage={mockFunction}
            >Confirmar
            </PageCart>
            )
        const findButton = renderedComponent.find({name: 'confirmButton'})
        jest.spyOn(event, 'preventDefault');
        //execução
        findButton.simulate("click")
        //verificação
        expect(findButton).toHaveLength(1);
        // expect(event.preventDefault).toBeCalled();
        // expect(mockOnClick.mock.calls.length).toEqual(1);  
      })
})