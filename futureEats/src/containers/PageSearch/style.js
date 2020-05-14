import styled from "styled-components";
import Typography from "@material-ui/core/Typography";


export const SearchWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 72px 1fr;
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
    margin-top: 33px;
    font-size: 16px;
`
