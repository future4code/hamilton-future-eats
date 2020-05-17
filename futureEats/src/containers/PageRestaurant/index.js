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
        const token = localStorage.getItem("token")
        if (token === null) {
            this.props.goToLoginScreen()
        }
        this.props.setCurrentPage(1);
    }

    handleAddToCart = ( newOrder ) => {
        this.props.setOrder( newOrder )
    }

    filteredMainMenu = () => {
        const { restaurant } = this.props

        let mainProducts=[];

        if(restaurant.products){
            mainProducts = restaurant.products.filter(
                product => {
                return (
                    product.category
                    .toLowerCase() !== 'bebida' && product.category !== 'acompanhamento')
            })
        }
        return mainProducts
    }

    filteredSideDish = () => {
        const { restaurant } = this.props

        let sideDish=[];

        if(restaurant.products){
        
            sideDish = restaurant.products.filter(
                product => {
                return (
                    product.category
                    .toLowerCase() === 'acompanhamento')
            })
        }
        return sideDish
    }

    filteredBeverage = () => {
        const { restaurant } = this.props

        let beverage=[];

        if(restaurant.products){
            beverage = restaurant.products.filter(
                product => {
                return (
                    product.category
                    .toLowerCase() === 'bebida')
            })
        }
        return beverage
    }

    renderMainMenu = () => {
        return (
            this.filteredMainMenu()
            .map( product => (
                <OrderCard
                key={product.id}
                photoUrl={product.photoUrl}
                name={product.name}
                // quantity={quantity}
                description={product.description}
                price={product.price}
                id={product.id}
                // addItem={addItem}
                addToCart={this.handleAddToCart}
                />
            ))
        )
    }

    renderSideDish = () => {
        return (
            this.filteredSideDish()
            .map( product => (
                <OrderCard
                key={product.id}
                photoUrl={product.photoUrl}
                name={product.name}
                // quantity={quantity}
                description={product.description}
                price={product.price}
                // addItem={addItem}
                addToCart={this.handleAddToCart}
                />
            ))
        )
    }

    renderBeverage = () => {
        return (
            this.filteredBeverage()
            .map( product => (
                <OrderCard
                key={product.id}
                photoUrl={product.photoUrl}
                name={product.name}
                // quantity={quantity}
                description={product.description}
                price={product.price}
                // addItem={addItem}
                addToCart={this.handleAddToCart}
                />
            ))
        )
    }



    render() {
        const { restaurant } = this.props

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
                                this.renderMainMenu()
                            ) : (
                                <span> Carregando... </span>
                            )}
                    </MainMenu>
                    <MenuTitle>Acompanhamentos</MenuTitle>
                    <SideDish>
                        {restaurant.products ? (
                                this.renderSideDish()
                           ) : (
                                <span> Carregando... </span>
                            )}
                    </SideDish>
                    <MenuTitle>Bebidas</MenuTitle>
                    <Beverage>
                        {restaurant.products ? (
                                this.renderBeverage()
                            ) : (
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
    orders: state.orders.orders
})

const mapDispatchToProps = dispatch => {
    return {
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        getRestaurantDetail: () => dispatch(getRestaurantDetail()),
        setOrder: (newOrder) => dispatch(setOrder(newOrder))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRestaurant);