import styled from "styled-components";
import { Container } from "../../Layout/Layout";
import TestPageHeader from "./Components/TestPageHeader";
import TestPageQuestion from "./Components/TestPageQuestion";
import TestPageAnswer from "./Components/TestPageAnswer";
import TestPageButton from "./Components/TestPageButton";

function TestPage() {
  return (
    <TestPageContainer>
      <QuestionContainer></QuestionContainer>
      {/* <TestPageHeader /> */}
      {/* <TestPageQuestion /> */}
      {/* <TestPageAnswer /> */}
      {/* <TestPageButton /> */}
    </TestPageContainer>
  );
}

const TestPageContainer = styled(Container)`
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
`;
export default TestPage;
