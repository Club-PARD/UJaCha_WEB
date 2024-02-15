import { Link } from "react-router-dom";
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
    
    text-align: ${props => props.textAlign};

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

export const LeftRightPadding20px = styled.div`
    padding : 0px 35px;
`   

export const MyLink = styled(Link)`
    text-decoration:  none;
    color : black;    
`

// Component : 증상을 나타내는 색상 사각형
export const MiniSquare = styled.div `
    background-color: ${props => props.backgroundColor};
    width: 12px;
    height : 12px;
    margin-right : 10px;

    display: inline-block;
`