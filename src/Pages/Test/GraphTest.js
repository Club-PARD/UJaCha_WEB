import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

const data = [
    { name: '1차', total: 83, data1: 88, data2: 90 },
    { name: '2차', total: 85, data1: 78, data2: 88 },
    { name: '3차', total: 81, data1: 83, data2: 85 },
    { name: '4차', total: 78, data1: 81, data2: 80 },
    { name: '5차', total: 75, data1: 76, data2: 81 },
    { name: '6차', total: 71, data1: 75, data2: 74 },
    { name: '7차', total: 69, data1: 72, data2: 76 },
    { name: '8차', total: 67, data1: 70, data2: 77 },
    { name: '9차', total: 66, data1: 71, data2: 70 },
    { name: '10차', total: 60, data1: 69, data2: 69 },
];

const customTooltip = (data) => {
    if (data && data.payload && data.payload.length > 0) {
        const { payload } = data;
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

const TooltipDiv = styled.div`
    background-color: #F1FFFA;
    border : 2px solid #93B7BE;
    border-radius: 5px;
    padding : 5px;
    color : #454545 ;

    text-align: right;
`


function GraphTest() {
    return (
        <div>
            <h1>Graph 연습</h1>
            <LineChart width={600} height={300} data={data}>

                {/* 배경 Grid 지정 */}
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

                {/* X축에 표시될 이름 지정 */}
                <XAxis dataKey="name" />
                {/* y축에 표시될 이름 지정 */}
                <YAxis domain={[50, 100]} />

                {/* 툴팁을 활성화하며, 마우스를 그래프 위에 올리면 해당 지점의 데이터를 표시 */}
                <Tooltip content={customTooltip} />

                {/* 그래프의 범례를 표시 */}
                <Legend />

                {/* 그래프 Line */}
                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2}/>
                <Line type="monotone" dataKey="data1" stroke="#82ca9d" />
                <Line type="monotone" dataKey="data2" stroke="#ffcc33" />
            </LineChart>
        </div>
    );
}

export default GraphTest;
