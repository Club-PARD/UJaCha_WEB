import styled from "styled-components";
import { Container } from "../../Layout/Layout";
import TestPageHeader from "./Components/TestPageHeader";
import TestPageQuestion from "./Components/TestPageQuestion";
import TestPageAnswer from "./Components/TestPageAnswer";
import TestPageButton from "./Components/TestPageButton";

function TestPage() {
  return (
    <TestPageContainer>
      <QuestionContainer>
        {/* <TestPageQuestion /> */}
        {/* <TestPageHeader /> */}
        <TestPageAnswer />
        <TestPageButton />
      </QuestionContainer>
    </TestPageContainer>
  );
}

const TestPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

const QuestionContainer = styled.div`
  width: 100vw;
  height: 88vh;
  border-radius: 24px 24px 0px 0px;
  background-color: ${({ theme }) => theme.colors.purple_100};
  position: absolute;
  bottom: 0px;

  /* 애니메이션 부분 */
  animation: transY 1.3s ease-out;

  @keyframes transY {
    0% {
      transform: translateY(500px);
      opacity: 0.2;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  /* 애니메이션 끝 */
`;
export default TestPage;
