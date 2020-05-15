import React from 'react';
import { connect } from "react-redux"
import { 
    RestaurantPageWrapper, 
    Title, 
    RestaurantInformation,
    RestaurantImg,
    RestaurantName,
    Details,
    MenuWrapper,
    MenuTitle,
    MainMenu, 
    SideDish,
    Beverage,
    Delivery,
    } from './style';
import Footer from '../Footer'
import OrderCard from '../../components/OrderCard'
import { setCurrentPage } from "../../actions/page"
import { setOrder } from "../../actions/orders"
import { getRestaurantDetail } from '../../actions/restaurants'


export class PageRestaurant extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
        // this.props.getActiveOrder();
       // this.props.getRestaurantDetail()
    }

    handleAddToCart = ( newOrder ) => {
        console.log(newOrder)
        this.props.setOrder( newOrder )
    }


    render() {
        const { restaurant, quantity, addItem } = this.props

        let mainProducts=[];
        let sideDish=[];
        let beverage=[];

        if(restaurant.products){
            mainProducts = restaurant.products.filter(
                product => {
                return (
                    product.category
                    .toLowerCase() !== 'bebida' && product.category !== 'acompanhamento')
            })
            sideDish = restaurant.products.filter(
                product => {
                return (
                    product.category
                    .toLowerCase() === 'acompanhamento')
            })
            beverage = restaurant.products.filter(
                product => {
                return (
                    product.category
                    .toLowerCase() === 'bebida')
            })
        }

        return (
            <RestaurantPageWrapper>
                <Title>Restaurante</Title>

                <RestaurantInformation>
                    <RestaurantImg
                    src={restaurant.logoUrl}
                    />
                    <RestaurantName>{restaurant.name}</RestaurantName>
                    <Details>{restaurant.category}</Details>
                    <Details>
                        <Delivery>{restaurant.deliveryTime} min</Delivery><Delivery>Frete R${restaurant.shipping}</Delivery>
                    </Details>
                    <Details>{restaurant.address}</Details>
                </RestaurantInformation>

                <MenuWrapper>
                    <MenuTitle>Principais</MenuTitle>
                    <MainMenu>
                        {restaurant.products ? (
                            mainProducts.map( product => (
                                <OrderCard
                                key={product.id}
                                photoUrl={product.photoUrl}
                                name={product.name}
                                quantity={quantity}
                                description={product.description}
                                price={product.price}
                                id={product.id}
                                addItem={addItem}
                                addToCart={this.handleAddToCart}
                                />
                            ))) : (
                                <span> Carregando... </span>
                            )}
                    </MainMenu>
                    <MenuTitle>Acompanhamentos</MenuTitle>
                    <SideDish>
                        {restaurant.products ? (
                            sideDish.map( product => (
                                <OrderCard
                                key={product.id}
                                photoUrl={product.photoUrl}
                                name={product.name}
                                quantity={quantity}
                                description={product.description}
                                price={product.price}
                                addItem={addItem}
                                addToCart={this.handleAddToCart}
                                />
                            ))) : (
                                <span> Carregando... </span>
                            )}
                    </SideDish>
                    <MenuTitle>Bebidas</MenuTitle>
                    <Beverage>
                        {restaurant.products ? (
                            beverage.map( product => (
                                <OrderCard
                                key={product.id}
                                photoUrl={product.photoUrl}
                                name={product.name}
                                quantity={quantity}
                                description={product.description}
                                price={product.price}
                                addItem={addItem}
                                addToCart={this.handleAddToCart}
                                />
                            ))) : (
                                <span> Carregando... </span>
                            )}
                    </Beverage>
                </MenuWrapper>

                <Footer/>

            </RestaurantPageWrapper>
        
        )
    }
}

const mapStateToProps = (state) => ({
    restaurant: state.restaurants.restaurantDetail,
    quantity: state.orders.quantity,
})

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        getRestaurantDetail: () => dispatch(getRestaurantDetail()),
        setOrder: (newOrder) => dispatch(setOrder(newOrder))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRestaurant);