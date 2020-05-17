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
    ConfirmButton,
    Address,
    RadioCustom } from './style';
import {PageCart} from './index';
import renderer from 'react-test-renderer';



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
      test("Testando styled do CartWrapper", () => {
        const newSnapShot = renderer.create(<CartWrapper />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    
    test("Testando styled do Title", () => {
        const newSnapShot = renderer.create(<Title />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do DeliveryAddressWrapper", () => {
        const newSnapShot = renderer.create(<DeliveryAddressWrapper />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do AddressTitle", () => {
        const newSnapShot = renderer.create(<AddressTitle />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do Address", () => {
        const newSnapShot = renderer.create(<Address />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do PaymentWrapper", () => {
        const newSnapShot = renderer.create(<PaymentWrapper />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do DeliveryPrice", () => {
        const newSnapShot = renderer.create(<DeliveryPrice />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do TotalPrice", () => {
        const newSnapShot = renderer.create(<TotalPrice />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do PaymentMethod", () => {
        const newSnapShot = renderer.create(<PaymentMethod />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do PaymentTitle", () => {
        const newSnapShot = renderer.create(<PaymentTitle />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do PaymentRadioGroup", () => {
        const newSnapShot = renderer.create(<PaymentRadioGroup />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    
    test("Testando styled do RadioCustom", () => {
        const newSnapShot = renderer.create(<RadioCustom />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
      
    
})