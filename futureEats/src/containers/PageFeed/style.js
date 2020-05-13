import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import SearchIcon from '@material-ui/icons/Search';

export const FeedWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 72px 42px 1fr 49px;
    justify-items:center;
    align-items:center;
`

export const SearchBar = styled(OutlinedInput)`
    height: 56px;
    width: 328px;
`
export const SearchIconCustom = styled(SearchIcon)`
    color: #b8b8b8;
`
export const LogoWrapper = styled.div`
    border-bottom: 1px solid #b8b8b8;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Logo = styled(Typography)`
    margin-top: 33px;
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
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
`