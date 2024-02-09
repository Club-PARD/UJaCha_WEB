import styled from "styled-components";
import { Container, Img, P } from "../../../Layout/Layout";

function IntroPageHeader() {
    return (
        <IntroPageHeaderContainer>
            <IntroPageHeaderWrapper>
                <TuneLogoP>tune</TuneLogoP>
                <Img src = "img/user-02.png" alt = "user-02" width = "24px" height = "24px"/>
            </IntroPageHeaderWrapper>
        </IntroPageHeaderContainer>
    );
}

const IntroPageHeaderContainer = styled(Container)`
    width: 100%;
    height : 100px;

    /* background-color: aqua; */
    padding : 20px 20px 15px 20px;
    box-sizing: border-box;

    display: flex;
    align-items: end;
`;
const IntroPageHeaderWrapper = styled.div`

    width: 100%;
    height : auto;

    /* background-color: aliceblue; */

    display: flex;
    justify-content: space-between;
    align-items: center;

    color : white;
`

const TuneLogoP = styled(P)`
    font-size: 32.69px;
    font-weight: bold;
    letter-spacing: 3px;
    width : 30px;
`
export default IntroPageHeader;