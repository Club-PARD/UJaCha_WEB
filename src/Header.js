import {Link, Outlet} from "react-router-dom";
import styled from "styled-components";

function Header() {
    return (
        <div>
            <MyHeader/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

const MyHeader = () => {
    return (
        <LinkDiv>
            <LogoDiv to="/">
                유자차
            </LogoDiv>
            <MenuDiv>
                <MyLink to="/page1">페이지1</MyLink>
                <MyLink to="/page2">페이지2</MyLink>
                <MyLink to="/page3">페이지3</MyLink>
                <MyLink to="/page4">페이지4</MyLink>
            </MenuDiv>
        </LinkDiv>
    );

}

// 헤더바 전체 영역
const LinkDiv = styled.div `
    width: 100%;
    height : 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: gray;
`

// 헤더바 내부 로고 영역
const LogoDiv = styled(Link)`
    width : 10%;
    font-size : 30px;
    font-weight: bold;
    color : #ffcc33;
    text-align: center;

    text-decoration: none;

    &:hover{
        opacity: 50%;
    }
`

const MenuDiv = styled.div `
    width : 90%;

    display: flex;
    justify-content: end;
`
const MyLink = styled(Link)`
    text-decoration: none;
    color : white;
    background-color: black;
    margin : 0 20px;

    font-size: 20px;

    &:hover{
        color : yellow;
        background-color: gray;
    }
`;

export default Header;