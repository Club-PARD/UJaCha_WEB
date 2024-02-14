import styled from "styled-components";
import TestPageQuestion from "./Components/TestPageQuestion";
import TestPageAnswer from "./Components/TestPageAnswer";
import TestPageButton from "./Components/TestPageButton";
import { useEffect, useState } from "react";
import TestHeader from "./Components/TestHeader";
import TestLoading from "./Components/TestLoading";
import { useRecoilState } from "recoil";
import { pageState, formState } from "../../Atoms";

function TestPage() {
  const totalQuestion = 12;
  const [page, setPage] = useRecoilState(pageState);
  const [form, setForm] = useRecoilState(formState);

  useEffect(() => {
    setPage(0);
    setForm({
      question1: 0,
      question2: 0,
      question3: 0,
      question4: 0,
      question5: 0,
      question6: 0,
      question7: 0,
      question8: 0,
      question9: 0,
      question10: 0,
      question11: 0,
      question12: 0,
    });
  }, []);

  return (
    <TestPageContainer>
      <TestHeader />
      <QuestionContainer>
        {page !== totalQuestion ? (
          <>
            <TestPageQuestion />
            <TestPageAnswer />
            <TestPageButton />
          </>
        ) : (
          <TestLoading />
        )}
      </QuestionContainer>
    </TestPageContainer>
  );
}

const TestPageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: black;

  display: flex;
  justify-content: center;
`;

const QuestionContainer = styled.div`
  width: 390px;
  height: calc(100% - 100px);
  border-radius: 36px 36px 0px 0px;
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

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default TestPage;
