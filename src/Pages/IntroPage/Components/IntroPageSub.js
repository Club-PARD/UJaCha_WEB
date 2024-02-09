import styled from "styled-components";
import {Container} from "../../../Layout/Layout";
import {theme} from "../../../Styles/theme";
import {ButtonItems} from "./IntroPageMain";

function IntroPageSub() {

    return (
        <IntroPageSubContainer>
            <WrapperTitle>
                {contentData}
            </WrapperTitle>
            <ButtonItems/>
        </IntroPageSubContainer>
    );
}

const contentData = "조기 발견을 위해서는\n빠른 사전 진단이\n필수입니다.";

const IntroPageSubContainer = styled(Container)`
    width: 100%;
    height : 555px;
    background-color: ${theme.colors.sky_100};

    border-radius: 36px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding : 15px;
    box-sizing: border-box;
`

const WrapperTitle = styled.p`
    width: 100%;

    font-size: 24px;
    font-weight: 500;
    line-height: 36px;

    /* background-color: aliceblue; */
    
    white-space: pre-line;

    margin-top: 35px;

`

export default IntroPageSub;