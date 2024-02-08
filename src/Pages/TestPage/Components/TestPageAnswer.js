import styled from "styled-components";
import { Container } from "../../../Layout/Layout";

function TestPageAnswer() {
    return (
        <TestPageAnswerContainer>
            <h1>answer</h1>
        </TestPageAnswerContainer>
    );
}

const TestPageAnswerContainer = styled(Container)`
    height : 30px;
`;

export default TestPageAnswer;