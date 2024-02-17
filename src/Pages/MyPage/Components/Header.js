import styled from "styled-components";
import { Img, MyLink } from "../../../Layout/Layout";
import { Line } from "recharts";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleCloseButton = () => {
    const jwt = sessionStorage.getItem("jwtToken");
    if (jwt) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <HeaderContainer>
      <Img
        src="img/x-close.png"
        alt="x-close"
        width="30px"
        height="30px"
        onClick={handleCloseButton}
      />
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
