import React from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import { data2 } from './data';

function RedarChartComponent() {

    return (
        <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data2}>
            <PolarGrid/>
            <PolarAngleAxis dataKey="subject"/>
            <PolarRadiusAxis/>
            <Radar
                name="Mike"
                dataKey="data"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.5}/>
        </RadarChart>
    );
}

export default RedarChartComponent;