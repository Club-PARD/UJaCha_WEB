import styled from "styled-components";
import { Container } from "../../../Layout/Layout";
import { Questions } from "../Utils/Questions.js";
import { useState } from "react";

function TestPageQuestion({ page }) {
  return (
    <TestPageQuestionContainer>
      <Order>{Questions[page].order}</Order>
      <Question>{Questions[page].item}</Question>
    </TestPageQuestionContainer>
  );
}

const TestPageQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100vw;
  top: 10%;
  position: absolute;
`;

const Order = styled.div`
  width: 90%;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 39.2px */
  margin-bottom: 24px;
`;

const Question = styled.div`
  width: 90%;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
`;
export default TestPageQuestion;
