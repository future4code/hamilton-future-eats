import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { FaAngleLeft } from 'react-icons/fa'

export const SearchWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 44px 72px 1fr;
    justify-items:center;
    align-items:center;
`
export const LogoWrapper = styled.div`
    border-bottom: 1px solid #b8b8b8;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
export const DivBackIcon = styled.span `
    margin: auto 0px auto 16px;
`
export const Logo = styled(Typography)`
    margin: auto;
    font-size: 16px;
`
export const BackIcon = styled(FaAngleLeft) `
`
export const ResultsWrapper = styled.div `
    height: 99%;
    width: 100%;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`