import styled from "styled-components";

export const Container = styled.div`
    width : 390px;
    height : auto;

    margin : 0 auto;
`
export const P = styled.p`
    font-size: ${props => props.fontSize || "11px"};
    font-weight: ${props => props.fontWeight};

    letter-spacing: ${props => props.letterSpacing};
    

`

export const A = styled.a`
    text-decoration: none;
    color: black;
`

export const Img = styled.img`
    width : ${props => props.width};
    height : ${props => props.height};
`

export const ButtonOpacity50 = styled.button`
    &:hover{
        opacity: 50%;
    }
`

export const ImgOpacity50 = styled(Img)`
    &:hover{
        opacity: 50%;
    }
`