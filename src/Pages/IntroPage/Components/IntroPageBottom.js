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
    height : 122px;
    background-color: gray;

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
                    <A href = "" onClick={hanlderOnClick}>tune</A>
                </td>
                <td>
                    <A href = "" onClick={hanlderOnClick}>Instargram</A>
                </td>
                <td>
                    <A href = "" onClick={hanlderOnClick}>Team</A>
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
        border-right: 1px solid black;
    }

    & > tr > td:last-child{
        border-left: 1px solid black;
    }

    & > tr > td > a {
        font-size: 16px;

    }

`
const Copyright = styled.p`
    font-size: 11px;
    margin-bottom: 20px;
`
export default IntroPageBottom;