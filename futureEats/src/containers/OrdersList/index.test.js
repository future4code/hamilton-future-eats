import React from 'react'
import { shallow } from 'enzyme'
import {
    OrdersListWrapper,
    OrderWrapper,
    IfEmpty,
    RestaurantInfo,
    RestaurantName,
    RestaurantAddress,
    ExpectedTime,
} from './style';
import { OrdersList } from './index'
import renderer from 'react-test-renderer'




describe("Testing OrdersList", () => {
    test("Finding subComponents of cart with items", () => {
        //preparação
        const mockFunction = jest.fn()
        const mockOrderProps = [
            {
                category: 'Refeição',
                description: 'A tradição italiana na sua casa',
                id: 'FcAp6stw4Essna5JdTKS',
                name: 'Penne do Campo',
                photoUrl: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/1b7b1a90-043d-45d6-9932-2903b304b956/201905291247_x5ae_c.jpg',
                price: 32,
            }
        ]
        const mockRestaurantProps =
        {
            id: "1",
            name: "Habibs",
            logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
            deliveryTime: 60,
            category: "Árabe",
            description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
            shipping: 6,
            address: "Rua das Margaridas, 110 - Jardim das Flores"
        }

        const renderedComponent = shallow(<OrdersList
            getRestaurantDetail={mockFunction}
            orders={mockOrderProps}
            restaurant={mockRestaurantProps}
        />)


        const findOrdersListWrapper = renderedComponent.find(OrdersListWrapper)
        const findOrderWrapper = renderedComponent.find(OrderWrapper)
        const findRestaurantInfo = renderedComponent.find(RestaurantInfo)
        const findRestaurantName = renderedComponent.find(RestaurantName)
        const findRestaurantAddress = renderedComponent.find(RestaurantAddress)
        const findExpectedTime = renderedComponent.find(ExpectedTime)

        //verificação
        expect(findOrdersListWrapper).toHaveLength(1);
        expect(findOrderWrapper).toHaveLength(1);
        expect(findRestaurantInfo).toHaveLength(1);
        expect(findRestaurantName).toHaveLength(1);
        expect(findRestaurantAddress).toHaveLength(1);
        expect(findExpectedTime).toHaveLength(1);
    })
    test("Testando styled do OrdersListWrapper", () => {
        const newSnapShot = renderer.create(<OrdersListWrapper />).toJSON()

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do IfEmpty", () => {
        const newSnapShot = renderer.create(<IfEmpty />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do OrderWrapper", () => {
        const newSnapShot = renderer.create(<OrderWrapper />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do RestaurantInfo", () => {
        const newSnapShot = renderer.create(<RestaurantInfo />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do RestaurantName", () => {
        const newSnapShot = renderer.create(<RestaurantName />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do RestaurantAddress", () => {
        const newSnapShot = renderer.create(<RestaurantAddress />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })
    test("Testando styled do ExpectedTime", () => {
        const newSnapShot = renderer.create(<ExpectedTime />).toJSON();

        expect(newSnapShot).toMatchSnapshot();
    })

})