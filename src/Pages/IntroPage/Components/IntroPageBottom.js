import styled from "styled-components";
import {A, Container} from "../../../Layout/Layout";

function IntroPageBottom() {
    return (
        <IntroPageBottonContainer>
            <WrapperLinkTable/>
            <Copyright>ⓒ 2024. PARD. All right reserved.</Copyright>
        </IntroPageBottonContainer>
    );
}

const IntroPageBottonContainer = styled(Container)`
    width: 100%;
    height : 122px;
    /* background-color: gray; */

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`;

const WrapperLinkTable = () => {

    const hanlderOnClick = (e) => {
        e.preventDefault();
        alert("준비중입니다.")
    }
    return (
        <LinkTable>
            <tr>
                <td>
                    <LinkA href = "" onClick={hanlderOnClick}>tune</LinkA>
                </td>
                <td>
                    <LinkA href = "" onClick={hanlderOnClick}>Instargram</LinkA>
                </td>
                <td>
                    <LinkA href = "" onClick={hanlderOnClick}>Team</LinkA>
                </td>
            </tr>
        </LinkTable>
    );
}

const LinkTable = styled.table `

    width : 195px;
    text-align: center;
    border-spacing: 0px;

    margin-top : 30px;

    & > tr > td:first-child{
        border-right: 1px solid white;
    }

    & > tr > td:last-child{
        border-left: 1px solid white;
    }

    & > tr > td > A {
        font-size: 16px;

        &:hover{
            color : #FFD984;
        }

    }

`
const Copyright = styled.p`
    font-size: 11px;
    margin-bottom: 20px;

    color : white;
`

const LinkA = styled(A)`
    color : white;
`
export default IntroPageBottom;