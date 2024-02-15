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
import { theme } from '../../../Styles/theme';

const HomePageChart = (e) => {
    const formatXAxis = (xTick) => {
    return `${xTick.substring(4, 6)}차`;
    };
    return (
        <MyLineChart width={310} height={150} data={e.tempChartData} margin={{  right: 15, left:     15 }}>

            {/* 배경 Grid 지정 */}
            <CartesianGrid stroke="gray" vertical={false} /> {/* 가로줄만 그리도록 strokeDasharray 설정 */}
            {/* <XAxis type="number" dataKey="hallucination" tickCount={7} domain={[0, 7]} /> */}
            {/* <XAxis type = "number" dataKey="testId" tickCount={7} domain={[0, 7]}/> */}

            <YAxis type="number" domain={[0, 99]} axisLine={false} hide={true} tickCount={10} />
            <XAxis type="category" dataKey="testId" tickFormatter={(value) => `${value}차`} tick={{ fontSize: 15, fill: 'gray'}} />
            <Tooltip content={customTooltip} /> 
            
            <Line type="monotone" dataKey="delusion" stroke={theme.colors.green_100} strokeWidth={2}/>
            <Line type="monotone" dataKey="hallucination" stroke={theme.colors.pink_100} strokeWidth={2} />
            <Line type="monotone" dataKey="abnormalBehavior" stroke={theme.colors.purple_100} strokeWidth={2} />
            <Line type="monotone" dataKey="moody" stroke={theme.colors.lemon_100} strokeWidth={2} />
            <Line type="monotone" dataKey="total" stroke={theme.colors.black_100} strokeWidth={2} />
        </MyLineChart>
    );
}

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

const TooltipDiv = styled.div `
    background-color: #F1FFFA;
    border : 2px solid #93B7BE;
    border-radius: 5px;
    padding : 5px;
    color : #454545 ;

    text-align: right;

    & > p{
        font-size : 15px;
    }
`

const MyLineChart = styled(LineChart)`
    width : 100%;
`
export default HomePageChart;