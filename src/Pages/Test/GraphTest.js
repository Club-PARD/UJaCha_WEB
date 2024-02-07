import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';
import styled from 'styled-components';
import { data } from './data'; // 외부 데이터 파일에서 데이터 가져오기

function GraphTest() {
    return (
        <div>
            <h1>Graph 연습</h1>
            <LineChart width={600} height={300} data={data}>

                {/* 배경 Grid 지정 */}
                <CartesianGrid stroke="#eee" strokeDasharray="5 5"/> {/* X축에 표시될 이름 지정 */}
                <XAxis dataKey="name"/> {/* y축에 표시될 이름 지정 */}
                <YAxis domain={[50, 100]}/> {/* 툴팁을 활성화하며, 마우스를 그래프 위에 올리면 해당 지점의 데이터를 표시 */}
                <Tooltip content={customTooltip}/> {/* 그래프의 범례를 표시 */}
                <Legend/> {/* 그래프 Line */}
                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2}/>
                <Line type="monotone" dataKey="data1" stroke="#82ca9d"/>
                <Line type="monotone" dataKey="data2" stroke="#ffcc33"/>
            </LineChart>
        </div>
    );
}

const customTooltip = (data) => {
    if (data && data.payload && data.payload.length > 0) {
        const {payload} = data;
        return (
            <TooltipDiv>
                <p>총합 : {payload[0].payload.total}%</p>
                <p>수치1 : {payload[0].payload.data1}%</p>
                <p>수치2 : {payload[0].payload.data2}%</p>
            </TooltipDiv>
        );
    }
    return null;
};

const TooltipDiv = styled.div `
    background-color: #F1FFFA;
    border : 2px solid #93B7BE;
    border-radius: 5px;
    padding : 5px;
    color : #454545 ;

    text-align: right;
`

export default GraphTest;