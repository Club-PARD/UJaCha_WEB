import LineChartComponent from "./LineChart";
import RedarChartComponent from "./RedarChart";

function GraphTest() {
    return (
        <div>
            <h1>Graph Test</h1>
            <h3>LineChart</h3>
            <LineChartComponent />

            <h3>RedarChart</h3>
            <RedarChartComponent />
            <p>➡️아쉽게도 이건 안 쓴다고 함</p>
        </div>
    )
}

export default GraphTest;