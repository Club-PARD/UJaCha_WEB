import styled from "styled-components";
import ResultHeader from "./Components/ResultHeader";
import ResultContents from "./Components/ResultContents";
import { useState } from "react";

function ResultPage() {
  return (
    <ResultPageContainer>
      <ResultHeader />
      <ResultContents />
    </ResultPageContainer>
  );
}

const ResultPageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
`;
export default ResultPage;
