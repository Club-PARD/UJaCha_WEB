import styled from "styled-components";
import { Img } from "../../../Layout/Layout";

function UserInfo() {
  return (
    <Container>
      <NameBox>
        <p>유자차장님</p>
        <Img
          src="img/pencil-line.png"
          alt="pencil-line"
          width="26px"
          height="26px"
        />
      </NameBox>
      <JoinDate>가입일: 2024.02.01</JoinDate>
    </Container>
  );
}

const Container = styled.div`
  width: 342px;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    color: var(--White, #fefefe);
    font-family: "Pretendard Variable";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const JoinDate = styled.div`
  color: var(--primary-grayscale-500, #868686);
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  margin-top: 8px;
`;

export default UserInfo;
