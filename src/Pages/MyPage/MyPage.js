import styled from "styled-components";
import Header from "./Components/Header";
import UserInfo from "./Components/UserInfo";
import Record from "./Components/Record";
import Account from "./Components/Account";

function MyPage() {
  return (
    <Container>
      <Header />
      <UserInfo />
      <Record />
      <Account />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100vw;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black_100};

  margin-bottom: 200px;
`;

export default MyPage;
