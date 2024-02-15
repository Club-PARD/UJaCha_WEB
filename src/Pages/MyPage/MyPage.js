import styled from "styled-components";
import Header from "./Components/Header";
import UserInfo from "./Components/UserInfo";

function MyPage() {
  return (
    <Container>
      <Header />
      <UserInfo />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black_100};
`;

export default MyPage;
