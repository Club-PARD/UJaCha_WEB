import styled from "styled-components";
import { Container } from "../../../Layout/Layout";
import { theme } from "../../../Styles/theme";

function IntroPageSub() {

    return (
        <IntroPageSubContainer>

        </IntroPageSubContainer>
    );
}

const IntroPageSubContainer = styled(Container)`
    width: 100%;
    height : 555px;
    background-color: ${theme.colors.sky_100};

    border-radius: 36px;
`

export default IntroPageSub;