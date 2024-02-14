import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { resultState } from "../../../Atoms";

function ResultContents() {
  const result = useRecoilValue(resultState);

  const korResult = [
    {
      symptom: "환각/환청",
      outcome: result.hallucination,
    },
    {
      symptom: "이상행동",
      outcome: result.abnormalBehavior,
    },
    {
      symptom: "감정 변화",
      outcome: result.moody,
    },
    {
      symptom: "망상",
      outcome: result.delusion,
    },
  ];

  const getExplanation = () => {
    if (result.total >= 70) {
      return `조현병 증상이 ${result.total}% 의심됩니다.\n증상이 매우 위험한 정도로 보여지므로\n증상을 꾸준히 기록해 보시는 것과\n정신과 내원을 권고합니다.`;
    } else if (result.total >= 40) {
      return `조현병 증상이 ${result.total}% 의심됩니다.\n약간의 경각심이 필요한 수준입니다.\n지속적으로 관찰하기를 추천드립니다.`;
    } else if (result.total >= 20) {
      return `조현병 증상이 ${result.total}% 의심됩니다.\n아직은 안전하지만 약간의 증상이\n있으니 지속적으로 기록해보세요.`;
    } else {
      return `조현병 증상이 ${result.total}% 의심됩니다.\n증상이 거의 없는 상태이며 조현병의\n발병 위험이 거의 없다고 생각됩니다.`;
    }
  };

  return (
    <>
      <Container total={result.total}>
        <Title>조현병 위험도</Title>
        <Ratio total={result.total}>{result.total}%</Ratio>
        <Line total={result.total}></Line>
        <DetailContainer>
          {korResult.map((item, index) => (
            <SymptomContainer key={index}>
              <SymptonContents>{item.symptom}</SymptonContents>
              <SymptonContents>{item.outcome}%</SymptonContents>
            </SymptomContainer>
          ))}
        </DetailContainer>
        <Explanation>{getExplanation()}</Explanation>
        <Button>카카오 로그인</Button>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
  height: 636px;
  border-radius: 24px;
  position: absolute;
  top: 109px;
  background-color: ${(props) =>
    props.total >= 70
      ? props.theme.colors.lemon_100
      : props.total >= 40
      ? props.theme.colors.peach_100
      : props.total >= 20
      ? props.theme.colors.sky_100
      : props.theme.colors.green_100};
`;

const Title = styled.div`
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin-top: 39px;
`;

const Ratio = styled.div`
  text-align: center;
  font-family: WefontGothic(OTF);
  font-size: 78.861px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: ${(props) =>
    props.total >= 70
      ? "#FF2946"
      : props.total >= 40
      ? "#FF7339"
      : props.total >= 20
      ? "#8280FF"
      : "#0FA958"};
`;

const Line = styled.hr`
  width: 168px;
  height: 4px;
  background-color: ${(props) =>
    props.total >= 70
      ? "#FF2946"
      : props.total >= 40
      ? "#FF7339"
      : props.total >= 20
      ? "#8280FF"
      : "#0FA958"};
  border: 0;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 342px;
  height: 144px;
  border-radius: 24px;
  background: var(--White, #fefefe);
  margin-top: 36px;
`;

const SymptomContainer = styled.div`
  width: 294px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SymptonContents = styled.div`
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const Explanation = styled.div`
  color: "#1e1e1e";
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 36px;
  white-space: pre-wrap;
  height: 112px;
`;

const Button = styled.div`
  width: 342px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--Black, #1e1e1e);
  background: var(--Black, #1e1e1e);
  color: var(--White, #fefefe);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-top: 57px;
`;

export default ResultContents;
