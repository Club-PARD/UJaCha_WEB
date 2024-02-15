import React from 'react';
import {LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis} from 'recharts';
import styled from 'styled-components';
import { theme } from '../../../Styles/theme';

// [ 바로가기 ]
// Component : hover된 때의 모든 증상 보여주는 Tooltip
// Div : Tooltip 영역

const HomePageChart = (e) => {
    return (
        <LineChart width={344} height={140} data={e.tempChartData} margin = {{left : 20, right : 20, top : 10}}>

            {/* 배경 Grid 지정 */}
            <CartesianGrid stroke="#1E1E1E" strokeOpacity={20} vertical={false} /> {/* 가로줄만 그리도록 strokeDasharray 설정 */}

            {/* Y축 */}
            {/* <YAxis type="number" domain={[0, 100]} axisLine={false} hide={true} ticks={[0, 25, 50, 75, 100]} /> */}

            {/* X축 */}
            <XAxis type="category" dataKey="testId" tickFormatter={(value) => `${value}차`} tick={{ fontSize: 12, fill: theme.colors.black_20 }} />
            
            {/* Tooltip */}
            <Tooltip content={customTooltip} /> 
            
            <Line type="monotone" dataKey="delusion" stroke={theme.colors.green_100} strokeWidth={2}/>
            <Line type="monotone" dataKey="hallucination" stroke={theme.colors.pink_100} strokeWidth={2} />
            <Line type="monotone" dataKey="abnormalBehavior" stroke={theme.colors.purple_100} strokeWidth={2} />
            <Line type="monotone" dataKey="moody" stroke={theme.colors.lemon_100} strokeWidth={2} />
            <Line type="monotone" dataKey="total" stroke={theme.colors.black_100} strokeWidth={2} />
        </LineChart>
    );
}

// Component : hover된 때의 모든 증상 보여주는 Tooltip
const customTooltip = (data) => {
    if (data && data.payload && data.payload.length > 0) {
        const {payload} = data;
        return (
            <TooltipDiv>
                <p>총합 : {payload[0].payload.total}%</p>
                <p>망상 : {payload[0].payload.delusion}%</p>
                <p>환각/환청 : {payload[0].payload.hallucination}%</p>
                <p>이상행동 : {payload[0].payload.abnormalBehavior}%</p>
                <p>감정변화 : {payload[0].payload.moody}%</p>
            </TooltipDiv>
        );
    }
    return null;
};

// Div : Tooltip 영역
const TooltipDiv = styled.div `
    padding : 5px;

    border : 2px solid #8b8bb5;
    border-radius: 5px;
    
    color : #454545 ;
    background-color: ${theme.colors.purple_100};

    text-align: right;

    & > p{
        font-size : 15px;
        font-weight: 500;
    }
`
export default HomePageChart;