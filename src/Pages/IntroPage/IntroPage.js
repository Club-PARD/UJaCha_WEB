import styled from "styled-components";
import { Container } from "../../Layout/Layout";
import IntroPageContent from "./Components/IntroPageContent";
import IntroPageMain from "./Components/IntroPageMain";
import IntroPageSub from "./Components/IntroPageSub";
import IntroPageBottom from "./Components/IntroPageBottom";

function IntroPage() {
    return (
        <IntroPageContainer>
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
`
export default IntroPage;