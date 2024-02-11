import styled from "styled-components";
import { Img } from "../../../Layout/Layout";

function TestHeader({ page }) {
  return (
    <HeaderContainer>
      <Img src="img/x-close.png" alt="x-close" width="30px" height="30px" />
      <ProgressBar>
        <progress value={page / 12} />
      </ProgressBar>
      <Img src="img/user-02.png" alt="user-02" width="24px" height="24px" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  top: 6%;
  position: absolute;
`;

const ProgressBar = styled.div`
  margin-left: 27px;
  margin-right: 34px;

  progress {
    width: 227px;
    height: 4px;
    -webkit-appearance: none;
    appearance: none;
  }

  progress::-webkit-progress-bar {
    border-radius: 19px;
    background-color: var(--White, #fefefe);
  }
  progress::-webkit-progress-value {
    border-radius: 19px;
    background-color: var(--Lemon, #fee28d);
  }
`;

export default TestHeader;
