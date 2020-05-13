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


export class PageProfile extends React.Component {

    componentDidMount() {
        this.props.setCurrentPage(3);
    }
    handleClick = (event) => {
        this.props.goToEditProfile()
    }

    render() {
        
        return (
            <ProfileWrapper>
                <ProfileHeader>
                    <ProfileText>Meu perfil</ProfileText>
                </ProfileHeader>
                <ProfileInfosWrapper>
                    <ProfileInfos>
                        <ProfileText>Bruna Oliveira</ProfileText>
                        <ProfileText>bruna_o@gmail.com</ProfileText>
                        <ProfileText>333.333.333-36</ProfileText>
                    </ProfileInfos>
                    <EditIcon onClick={this.handleClick}><i class="material-icons md-36">create</i></EditIcon>
                </ProfileInfosWrapper>

                <ProfileAdressInfoWrapper>
                    <ProfileAdressInfo>
                        <ProfileTextSecond>
                            Endereço Cadastrado
                        </ProfileTextSecond>
                        <ProfileText>
                            Rua Alessandra Vieira, 42 - Santana
                        </ProfileText>
                    </ProfileAdressInfo>
                    <EditIcon><i class="material-icons">create</i></EditIcon>
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
const mapDispatchToProps = dispatch => ({
    goToEditProfile: () => dispatch(push(routes.editProfile)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
})


export default connect(null, mapDispatchToProps)(PageProfile);