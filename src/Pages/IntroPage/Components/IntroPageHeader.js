import styled from "styled-components";
import { Container, Img, ImgOpacity50, MyLink, P } from "../../../Layout/Layout";

// [ 바로가기 ]
// Container : IntroPageHeader
// Wrapper : IntroPageHeader

function IntroPageHeader() {
  return (
    <IntroPageHeaderContainer>
      <IntroPageHeaderWrapper>
          <Img src="img/tune_logo.png" alt="logo_tune" height="21px" />

          <Img
            src="img/user-02.png"
            alt="user-02"
            width="24px"
          height="24px"
          onClick={() => { alert("로그인 후 이용 가능합니다.") }}
          />
      </IntroPageHeaderWrapper>
    </IntroPageHeaderContainer>
  );
}

// Container : IntroPageHeader
const IntroPageHeaderContainer = styled(Container)`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: end;

  padding: 20px 20px 15px 20px;
  box-sizing: border-box;

  /* background-color: aqua; */
`;

// Wrapper : IntroPageHeader
const IntroPageHeaderWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: aliceblue; */
  color: white;
`;
export default IntroPageHeader;
