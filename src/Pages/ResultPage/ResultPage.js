import styled from "styled-components";
import ResultHeader from "./Components/ResultHeader";
import ResultContents from "./Components/ResultContents";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { pageState } from "../../Atoms";

function ResultPage() {
  const setPage = useSetRecoilState(pageState);
  useEffect(() => {
    setPage(0);
  }, []);

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
  background-color: ${({ theme }) => theme.colors.black_100};
  display: flex;
  justify-content: center;
`;
export default ResultPage;
