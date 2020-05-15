import React from 'react';
import { connect } from "react-redux"
import {
    ProfileWrapper, ProfileHeader, ProfileText, ProfileInfos, EditIcon, ProfileInfosWrapper,
    ProfileAdressInfoWrapper, ProfileTextSecond, ProfileAdressInfo, HistPedidosCard, PedidoPlaceText,
    PedidoDateText, SubtotalText, HistPedidosWrapper
} from './style';
import { push } from "connected-react-router";
import { routes } from '../Router'
import Footer from '../Footer'
import {setCurrentPage} from "../../actions/page"
import { replace } from "connected-react-router"
import {getProfile} from '../../actions/user'
import {ordersHistory} from '../../actions/orders'

export class PageProfile extends React.Component {

    componentDidMount() {
        const token = localStorage.getItem("token")
        this.props.getProfile(token)
        this.props.ordersHistory()
        if (token === null) {
            this.props.goToLoginScreen()
        }
        this.props.setCurrentPage(3);
    }

    handleClick = () => {
        this.props.goToEditProfile()
    }
    handleClick2 = () => {
        this.props.goToEditAdress()
    }

    render() {
        const {user} = this.props
        return (
            <ProfileWrapper>
                <ProfileHeader>
                    <ProfileText>Meu perfil</ProfileText>
                </ProfileHeader>
                <ProfileInfosWrapper>
                    <ProfileInfos>
                        <ProfileText>{user.name}</ProfileText> 
                        <ProfileText>{user.email}</ProfileText>
                        <ProfileText>{user.cpf}</ProfileText>
                    </ProfileInfos>
                    <EditIcon onClick={this.handleClick}><i class="material-icons md-36">create</i></EditIcon>
                </ProfileInfosWrapper>

                <ProfileAdressInfoWrapper>
                    <ProfileAdressInfo>
                        <ProfileTextSecond>
                            Endereço Cadastrado
                        </ProfileTextSecond>
                        <ProfileText>
                            {user.address}
                        </ProfileText>
                    </ProfileAdressInfo>
                    <EditIcon onClick={this.handleClick2}><i class="material-icons">create</i></EditIcon>
                </ProfileAdressInfoWrapper>

                <ProfileInfosWrapper style={{ borderBottom: '1px solid black' }}>
                    <ProfileText>
                        Histórico de pedidos
                    </ProfileText>
                </ProfileInfosWrapper>

                <HistPedidosWrapper>
                    <HistPedidosCard>
                        <PedidoPlaceText>
                            Bullguer Vila Madalena
                        </PedidoPlaceText>
                        <PedidoDateText>
                            23 outubro 2019
                        </PedidoDateText>
                        <SubtotalText>
                            Subtotal R$67,00
                        </SubtotalText>
                    </HistPedidosCard>
                    <HistPedidosCard>
                        <PedidoPlaceText>
                            Vila Burguer  Butantã
                        </PedidoPlaceText>
                        <PedidoDateText>
                            30 setembro 2019
                        </PedidoDateText>
                        <SubtotalText>
                            Subtotal R$89,00
                        </SubtotalText>
                    </HistPedidosCard>
                    <HistPedidosCard>
                        <PedidoPlaceText>
                            Bullguer Vila Madalena
                        </PedidoPlaceText>
                        <PedidoDateText>
                            23 outubro 2019
                        </PedidoDateText>
                        <SubtotalText>
                            Subtotal R$77,00
                        </SubtotalText>
                    </HistPedidosCard>
                    <HistPedidosCard>
                        <PedidoPlaceText>
                            Bullguer Vila Madalena
                        </PedidoPlaceText>
                        <PedidoDateText>
                            23 outubro 2019
                        </PedidoDateText>
                        <SubtotalText>
                            Subtotal R$77,00
                        </SubtotalText>
                    </HistPedidosCard>
                </HistPedidosWrapper>

                <Footer />

            </ProfileWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user,  
    ordersHistory: state.orders.ordersHistory
})

const mapDispatchToProps = dispatch => ({
    goToEditProfile: () => dispatch(push(routes.editProfile)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
    goToLoginScreen: () => dispatch(replace(routes.login)),
    getProfile: (token) => dispatch(getProfile(token)),
    ordersHistory: () => dispatch(ordersHistory()),
    goToEditAdress:() => dispatch(push(routes.editAddress)),

})


export default connect(mapStateToProps, mapDispatchToProps)(PageProfile);