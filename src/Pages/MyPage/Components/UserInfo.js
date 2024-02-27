import styled from "styled-components";
import { Img } from "../../../Layout/Layout";
import { useEffect, useState } from "react";
import { getUserData } from "../../../Api/test";

function UserInfo() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const userData1 = await getUserData(); // 비동기 함수 호출을 await로 감쌉니다.

          if (userData1) {
            // console.log("result", userData1.data);
            setUserData(userData1.data);
            return userData1.data.test;
          }
        } catch (error) {
          console.error("Error fetching user data", error); // 오류 메시지를 콘솔에 출력합니다.
        }
      };

      // console.log(fetchData);

      fetchData().then((data) => {

      });
    }, []);
  
  return (
    <Container>
      <NameBox>
        <p>{userData.nickname}</p>
        <Img
          src="img/pencil-line.png"
          alt="pencil-line"
          width="26px"
          height="26px"
        />
      </NameBox>
      <JoinDate>가입일: 2024.02.10</JoinDate>
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
