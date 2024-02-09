import styled from "styled-components";
import { Container } from "../../../Layout/Layout";
import { useEffect, useState } from "react";

function TestPageButton() {
  const [questionCount, setQuestionCount] = useState(1);

  useEffect(() => {
    console.log("questionCount", questionCount);
  }, [questionCount]);

  const handleDecreaseQuestionCount = () => {
    if (questionCount === 1) {
      alert("첫 페이지입니다.");
    } else {
      setQuestionCount(questionCount - 1);
    }
  };

  const handleIncreaseQuestionCount = () => {
    if (questionCount === 10) {
      alert("마지막 페이지입니다.");
    } else {
      setQuestionCount(questionCount + 1);
    }
  };
  return (
    <TestPageButtonContainer>
      <WrapperButton>
        <Button onClick={handleDecreaseQuestionCount}>이전</Button>
        <Button onClick={handleIncreaseQuestionCount}>다음</Button>
      </WrapperButton>
    </TestPageButtonContainer>
  );
}

const TestPageButtonContainer = styled(Container)`
  height: 200px;

  display: flex;
  justify-content: center;
`;

const WrapperButton = styled.div`
  width: 342px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 167px;
  height: 56px;
  font-size: 15px;
  background: none;
  border: 1px solid black;
  border-radius: 16px;

  &:hover {
    opacity: 50%;
    background-color: #00000050;
  }
`;
export default TestPageButton;
