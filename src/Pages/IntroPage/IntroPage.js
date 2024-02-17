import styled from "styled-components";
import { BlackContainer, Container } from "../../Layout/Layout";
import IntroPageContent from "./Components/IntroPageContent";
import IntroPageMain from "./Components/IntroPageMain";
import IntroPageSub from "./Components/IntroPageSub";
import IntroPageBottom from "./Components/IntroPageBottom";
import IntroPageHeader from "./Components/IntroPageHeader";

// [ 바로가기 ]
// Container : IntroPage

function IntroPage() {
  return (
    <BlackContainer>
      <IntroPageContainer>
        <IntroPageHeader />
        <IntroPageMain />
        <IntroPageContent />
        <IntroPageSub />
        <IntroPageBottom />
      </IntroPageContainer>
    </BlackContainer>
  );
}

// Container : IntroPage
const IntroPageContainer = styled(Container)`
  height: auto;

  padding: 0px 8px;
  box-sizing: border-box;

  /* background-color: red; */
`;
export default IntroPage;
