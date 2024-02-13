import styled from "styled-components";
import ResultHeader from "./Components/ResultHeader";
import ResultContents from "./Components/ResultContents";
import { useState } from "react";

function ResultPage() {
  const [result, setResult] = useState({
    symptom1: 0,
    symptom2: 0,
    symptom3: 0,
    symptom4: 0,
    total: 0,
    date: "",
  });

  return (
    <ResultPageContainer>
      <ResultHeader />
      <ResultContents result={result} />
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
