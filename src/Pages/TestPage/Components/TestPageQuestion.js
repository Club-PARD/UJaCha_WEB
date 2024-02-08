import styled from "styled-components";
import { Container } from "../../../Layout/Layout";

function TestPageQuestion() {
    return (
        <TestPageQuestionContainer>
            <h1>question</h1>
        </TestPageQuestionContainer>
    );
}

const TestPageQuestionContainer = styled(Container)`
    height : 200px;
`;

export default TestPageQuestion;