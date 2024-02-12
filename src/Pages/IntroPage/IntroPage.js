import styled from "styled-components";
import {Container} from "../../Layout/Layout";
import IntroPageContent from "./Components/IntroPageContent";
import IntroPageMain from "./Components/IntroPageMain";
import IntroPageSub from "./Components/IntroPageSub";
import IntroPageBottom from "./Components/IntroPageBottom";
import IntroPageHeader from "./Components/IntroPageHeader";

function IntroPage() {
    return (
        <BlackContainer>
            <IntroPageContainer>
                <IntroPageHeader/>
                <IntroPageMain/>
                <IntroPageContent/>
                <IntroPageSub/>
                <IntroPageBottom/>
            </IntroPageContainer>
        </BlackContainer>
    );
}

const IntroPageContainer = styled(Container)`
    height : auto;

    background-color: black;

    padding : 0px 8px;
    box-sizing: border-box;
`

export const BlackContainer = styled.div`
    width: 100vw;

    background-color: black;
    
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: ${props => props.flexDirection};
`
export default IntroPage;