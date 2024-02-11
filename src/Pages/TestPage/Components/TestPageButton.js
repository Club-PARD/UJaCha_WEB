import styled from "styled-components";
import { Container } from "../../../Layout/Layout";
import { useEffect, useState } from "react";

function TestPageButton({ page, handlePage }) {
  const [questionCount, setQuestionCount] = useState(page);

  useEffect(() => {
    console.log("questionCount", questionCount);
  }, [questionCount]);

  const handleDecreaseQuestionCount = () => {
    if (questionCount === 0) {
      alert("첫 페이지입니다.");
    } else {
      handlePage(page - 1);
      setQuestionCount(page - 1);
    }
  };

  const handleIncreaseQuestionCount = () => {
    if (questionCount === 11) {
      alert("마지막 페이지입니다.");
    } else {
      handlePage(page + 1);
      setQuestionCount(page + 1);
    }
  };
  return (
    <TestPageButtonContainer>
      <WrapperButton>
        <ButtonBack onClick={handleDecreaseQuestionCount}>이전</ButtonBack>
        <ButtonNext onClick={handleIncreaseQuestionCount}>다음</ButtonNext>
      </WrapperButton>
    </TestPageButtonContainer>
  );
}

const TestPageButtonContainer = styled.div`
  position: absolute;
  height: 60px;
  width: 100vw;
  top: 78%;
  display: flex;
  justify-content: center;
`;

const WrapperButton = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;

const ButtonBack = styled.button`
  width: 167px;
  height: 56px;
  font-size: 15px;
  background: none;
  border: 1px solid black;
  border-radius: 16px;
  margin-right: 8px;
`;

const ButtonNext = styled.button`
  width: 167px;
  height: 56px;
  font-size: 15px;
  background: black;
  border: 1px solid black;
  border-radius: 16px;
  color: white;
`;
export default TestPageButton;
