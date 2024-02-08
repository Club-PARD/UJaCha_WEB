import styled from "styled-components";

export const Container = styled.div`
    width : 390px;
    height : auto;

    margin : 0 auto;
`
export const P = styled.div`
    font-size: ${props => props.fontSize || "11px"};
    font-weight: ${props => props.fontWeight};
`

export const A = styled.a`
    text-decoration: none;
    color: black;
`