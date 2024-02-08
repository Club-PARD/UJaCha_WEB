import styled from "styled-components";
import { Container } from "../../../Layout/Layout";

function TestPageButton() {
    return (
        <TestPageButtonContainer>
            <h1>button</h1>
        </TestPageButtonContainer>
    );
}

const TestPageButtonContainer = styled(Container)`
    height : 30px;
`;

export default TestPageButton;