import styled from "styled-components";
import { Img } from "../../../Layout/Layout";

function Account() {
  return (
    <Container>
      <Title>계정</Title>
      <ButtonContainer>
        <p>로그아웃</p>
        <Img
          src="img/chevron-right.png"
          alt="chevron-right"
          width="18px"
          height="18px"
        />
      </ButtonContainer>
      <ButtonContainer>
        <p>탈퇴하기</p>
        <Img
          src="img/chevron-right.png"
          alt="chevron-right"
          width="18px"
          height="18px"
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 358px;
  height: 144px;
  flex-shrink: 0;
  border-radius: 20px;
  background: RGBA(254, 254, 254, 0.1);
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: var(--White, #fefefe);
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 100% */
  width: 326px;
  text-align: left;
  margin: 16px 0px 24px 0px;
`;

const ButtonContainer = styled.div`
  width: 326px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
  p {
    color: RGBA(254, 254, 254, 0.5);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 112.5% */
  }
`;

export default Account;
