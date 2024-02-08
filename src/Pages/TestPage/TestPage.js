import styled from "styled-components";
import { Container } from "../../Layout/Layout";
import TestPageHeader from "./Components/TestPageHeader";
import TestPageQuestion from "./Components/TestPageQuestion";
import TestPageAnswer from "./Components/TestPageAnswer";
import TestPageButton from "./Components/TestPageButton";

function TestPage() {
    return (
        <TestPageContainer>
            <TestPageHeader />
            <TestPageQuestion />
            <TestPageAnswer />
            <TestPageButton/>
        </TestPageContainer>
    );
}

const TestPageContainer = styled(Container)`
    height : 844px;
    background-color: gray;
`
export default TestPage;