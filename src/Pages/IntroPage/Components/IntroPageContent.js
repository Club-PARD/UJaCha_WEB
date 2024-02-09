import styled from "styled-components";
import { Container } from "../../../Layout/Layout";
import { theme } from "../../../Styles/theme";

function IntroPageContent() {
    return (
        <IntroPageContentContainer>

        </IntroPageContentContainer>
    );

}

const IntroPageContentContainer = styled(Container)`
    width: 100%;
    height : 883px;
    background-color: ${theme.colors.peach_100};
    border-radius : 36px;
`
export default IntroPageContent;