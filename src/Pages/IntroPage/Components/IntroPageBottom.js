import styled from "styled-components";
import {A, Container} from "../../../Layout/Layout";

// [ 바로가기 ]
// Container : IntroPageBottom
// ComponentList : Link Table
// Container : Link Table 
// Component : Copyright
// Component : Link

function IntroPageBottom() {
    return (
        <IntroPageBottonContainer>
            <WrapperLinkTable/>
            <Copyright>ⓒ 2024. Yujacha. All right reserved.</Copyright>
        </IntroPageBottonContainer>
    );
}

// Container : IntroPageBottom
const IntroPageBottonContainer = styled(Container)`
    width: 100%;
    height : 122px;
    
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    /* background-color: gray; */
`;

// ComponentList : Link Table
const WrapperLinkTable = () => {

    const hanlderOnClick = (e) => {
        e.preventDefault();
        alert("준비중입니다.")
    }
    return (
        <LinkTable>
            <tbody>
                <tr>
                    <td>
                        <LinkA href = "https://glaze-avenue-3eb.notion.site/6ecea8823b954ed182e9480cde29c9ec" >tune&nbsp;</LinkA>
                    </td>
                    <td>
                        <LinkA href = "" onClick={hanlderOnClick}>Instargram</LinkA>
                    </td>
                    <td>
                        <LinkA href = "https://we-pard.com" >&nbsp;PARD</LinkA>
                    </td>
                </tr>
            </tbody>
        </LinkTable>
    );
}

// Container : Link Table 
const LinkTable = styled.table `
    width : 195px;

    margin-top : 30px;

    border-spacing: 0px;
    
    text-align: center;

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

// Component : Copyright
const Copyright = styled.p`
    margin-bottom: 20px;

    font-size: 11px;

    color : white;
`

// Component : Link
const LinkA = styled(A)`
    color : white;
`
export default IntroPageBottom;