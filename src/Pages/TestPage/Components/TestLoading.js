import { Img } from "../../../Layout/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { postFirstData } from "../../../Api/test";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { formState, resultState } from "../../../Atoms";
import { useNavigate } from "react-router-dom";

function TestLoading() {
  const movePage = useNavigate();
  const form = useRecoilValue(formState);
  const [result, setResult] = useRecoilState(resultState);
  const [showLoding, setShowLoding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoding(true);
    }, 100);

    const timeout = setTimeout(async () => {
      const response = await postFirstData(form);
      setResult(response.data);
      console.log(response.data);
      console.log(result);
      movePage("/result");
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 해제
  }, []); // 초기 렌더링 시 한 번만 실행

  return (
    <LodingContainer style={{ opacity: showLoding ? 1 : 0 }}>
      <Img
        src="img/result_loading.gif"
        alt="loading"
        width="70px"
        height="70px"
      />
      <Text>결과 분석중</Text>
    </LodingContainer>
  );
}

const LodingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 1s ease;
`;
const Text = styled.div`
  color: var(--Black, #1e1e1e);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
`;

export default TestLoading;
