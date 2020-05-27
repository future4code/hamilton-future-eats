import styled from "styled-components";
import Typography from "@material-ui/core/Typography";


export const FeedWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 44px 72px 42px 1fr 49px;
    justify-items:center;
    align-items:center;
`

export const LogoWrapper = styled.div`
    border-bottom: 1px solid #b8b8b8;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Logo = styled(Typography)`
    margin: auto;
    font-size: 16px;
`

export const NavBar = styled.div`
    height: 42px;
    width: 100%;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding-left: 8px;
`

export const OptionText = styled(Typography)`
    padding: 8px;
    font-size: 18px;

    :nth-of-type(${props => props.activeOption}){
       && {
         color: green;  
       } 
    }
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
`