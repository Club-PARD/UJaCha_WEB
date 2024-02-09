import styled from "styled-components";
import { Container } from "../../Layout/Layout";
import IntroPageContent from "./Components/IntroPageContent";
import IntroPageMain from "./Components/IntroPageMain";
import IntroPageSub from "./Components/IntroPageSub";
import IntroPageBottom from "./Components/IntroPageBottom";
import IntroPageHeader from "./Components/IntroPageHeader";

function IntroPage() {
    return (
        <IntroPageContainer>
            <IntroPageHeader/>
            <IntroPageMain />
            <IntroPageContent />
            <IntroPageSub />
            <IntroPageBottom/>
        </IntroPageContainer>
    );
}

const IntroPageContainer = styled(Container)`
    height : auto;

    background-color: black;

    padding : 0px 8px;
    box-sizing: border-box;
`
export default IntroPage;