import { Img } from "../../../Layout/Layout";
import styled from "styled-components";

function TestLoading() {
  return (
    <LodingContainer>
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
