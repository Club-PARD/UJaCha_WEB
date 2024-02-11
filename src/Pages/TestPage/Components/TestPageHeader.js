import styled from "styled-components";
import { Container } from "../../../Layout/Layout";

function TestPageHeader() {
  return (
    <TestPageHeaderContainer>
      <h1>header</h1>
    </TestPageHeaderContainer>
  );
}

const TestPageHeaderContainer = styled(Container)`
  height: 200px;
`;

export default TestPageHeader;
