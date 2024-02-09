import styled from "styled-components";
import { Container } from "../../Layout/Layout";
import TestPageLayout from "./Components/TestPageLayout";
import TestPageHeader from "./Components/TestPageHeader";
import TestPageQuestion from "./Components/TestPageQuestion";
import TestPageAnswer from "./Components/TestPageAnswer";
import TestPageButton from "./Components/TestPageButton";

function TestPage() {
  return (
    <TestPageLayout>
      <TestPageQuestion />
      {/* <TestPageHeader /> */}
      {/* <TestPageAnswer /> */}
      {/* <TestPageButton /> */}
    </TestPageLayout>
  );
}
export default TestPage;
