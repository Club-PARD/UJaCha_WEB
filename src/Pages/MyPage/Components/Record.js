import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userInfo } from "../../../Atoms";

function Record() {
  const userData = useRecoilValue(userInfo);
  console.log(userData);
  const data = [
    {
      nickname: userData.reliableName,
      shared: "2024.02.08",
    },
    // {
    //   nickname: "찬이맘",
    //   shared: "2024.02.09",
    // },
    // {
    //   nickname: "경아빠",
    //   shared: "2024.02.09",
    // },
    // {
    //   nickname: "람언니",
    //   shared: "2024.02.09",
    // },
  ];

  return (
    <Container>
      <Title>기록 공유 유저</Title>
      <RowDataContainer>
        <Text style={{ width: "174px", marginBottom: "16px" }}>닉네임</Text>
        <Text style={{ marginBottom: "16px" }}>공유 날짜</Text>
      </RowDataContainer>

      {data.map((item, index) => (
        <RowDataContainer key={index}>
          <DetailText style={{ width: "174px", marginBottom: "8px" }}>
            {item.nickname}
          </DetailText>
          <DetailText>{item.shared}</DetailText>
        </RowDataContainer>
      ))}
      <Button>기록 공유하기</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 358px;
  height: 292px;
  border-radius: 20px;
  background-color: RGBA(254, 254, 254, 0.1);
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const Title = styled.div`
  color: var(--White, #fefefe);
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  margin: 16px 0px 24px 16px;
`;

const RowDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
`;

const Text = styled.div`
  color: #fefefe;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const DetailText = styled.div`
  color: #868686;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 112.5% */
`;

const Button = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 326px;
  height: 46px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--Purple, #b9b9d7);

  color: var(--Black, #1e1e1e);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  margin: 33px 16px 16px 16px;
`;

export default Record;
