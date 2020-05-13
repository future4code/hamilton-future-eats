import styled from "styled-components";


export const FooterWrapper = styled.div`
    height: 49px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items:center;
    justify-items: center;

    svg{
        fill: #b8b8b8;
    }

    svg:nth-child(${props=>props.active}){
        fill: #5cb646;
    }
`
