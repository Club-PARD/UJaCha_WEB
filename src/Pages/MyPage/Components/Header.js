import styled from "styled-components";
import { Img, MyLink } from "../../../Layout/Layout";
import { Line } from "recharts";

function Header() {
  return (
    <HeaderContainer>
      <MyLink to = "/home"><Img src="img/x-close.png" alt="x-close" width="30px" height="30px" /></MyLink>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 342px;
  margin-top: 52px;

  transition: opacity 1s ease;
`;

export default Header;
