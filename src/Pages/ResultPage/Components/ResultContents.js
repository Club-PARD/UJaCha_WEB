import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { resultState } from "../../../Atoms";

function ResultContents() {
  const result = useRecoilValue(resultState);
  if (!result) {
    return null; // 결과가 없을 때 렌더링하지 않음
  }

  console.log(result);

  const getBackgroundColor = () => {
    if (result.total >= 60) {
      return "#FEE28D";
    } else if (result.total >= 40) {
      return "#CEE7F6";
    } else {
      return "#B2E3D4";
    }
  };

  return (
    <>
      <Container backgroundColor={getBackgroundColor()}></Container>
    </>
  );
}

const Container = styled.div`
  width: 374px;
  height: 636px;
  border-radius: 24px;
  position: absolute;
  top: 109px;
  background-color: ${(props) => props.backgroundColor};
`;

export default ResultContents;
