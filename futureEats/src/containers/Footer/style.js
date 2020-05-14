import styled from "styled-components";


export const FooterWrapper = styled.div`
    height: 49px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items:center;
    justify-items: center;
    box-shadow: 0 -0.9px 0 0 rgba(0, 0, 0, 0.25);
    z-index: 1;

    svg{
        fill: #b8b8b8;
    }

    svg:nth-child(${props=>props.active}){
        fill: #5cb646;
    }
`