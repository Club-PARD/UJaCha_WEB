import styled from "styled-components";

// variable : 목 데이터 (차트를 위한)
export const tempChartData = [
    {
        "testId": 1,
        "hallucination": 49,
        "abnormalBehavior": 33,
        "moody": 49,
        "delusion": 66,
        "total": 49,
        "date": "2024-02-11"
    }, {
        "testId": 2,
        "hallucination": 23,
        "abnormalBehavior": 43,
        "moody": 45,
        "delusion": 77,
        "total": 23,
        "date": "2024-02-11"
    }, {
        "testId": 3,
        "hallucination": 15,
        "abnormalBehavior": 30,
        "moody": 60,
        "delusion": 40,
        "total": 35,
        "date": "2024-02-12"
    }, {
        "testId": 4,
        "hallucination": 35,
        "abnormalBehavior": 50,
        "moody": 25,
        "delusion": 55,
        "total": 42,
        "date": "2024-02-13"
    }, {
        "testId": 5,
        "hallucination": 55,
        "abnormalBehavior": 20,
        "moody": 35,
        "delusion": 45,
        "total": 50,
        "date": "2024-02-14"
    }, {
        "testId": 6,
        "hallucination": 40,
        "abnormalBehavior": 45,
        "moody": 30,
        "delusion": 60,
        "total": 55,
        "date": "2024-02-15"
    }, {
        "testId": 7,
        "hallucination": 25,
        "abnormalBehavior": 55,
        "moody": 20,
        "delusion": 35,
        "total": 38,
        "date": "2024-02-16"
    }, {
        "testId": 8,
        "hallucination": 65,
        "abnormalBehavior": 15,
        "moody": 40,
        "delusion": 30,
        "total": 45,
        "date": "2024-02-17"
    }, {
        "testId": 9,
        "hallucination": 30,
        "abnormalBehavior": 60,
        "moody": 50,
        "delusion": 25,
        "total": 55,
        "date": "2024-02-18"
    }, {
        "testId": 10,
        "hallucination": 50,
        "abnormalBehavior": 25,
        "moody": 65,
        "delusion": 20,
        "total": 60,
        "date": "2024-02-19"
    }
];

// handler : date를 기준으로 test 정보 정렬
export const getLatestData = (data) => {
    // date 속성이 있는 데이터와 없는 데이터로 분류합니다.
    const dataWithDate = data.filter(item => item.date);
    const dataWithoutDate = data.filter(item => !item.date);

    // date 속성이 있는 데이터를 date를 기준으로 오름차순으로 정렬합니다.
    const sortedDataWithDate = dataWithDate.sort((a, b) => new Date(a.date) - new Date(b.date));
    // 정렬된 데이터에서 최신 7개의 데이터를 추출합니다.
    const latestDataWithDate = sortedDataWithDate.slice(-7);

    // date 속성이 없는 데이터는 뒤로 정렬되어야 하므로 뒤에 추가합니다.
    const sortedDataWithoutDate = dataWithoutDate.sort((a, b) => data.indexOf(a) - data.indexOf(b));
    
    // 최신 데이터와 date가 없는 데이터를 합칩니다.
    const latestData = [...latestDataWithDate, ...sortedDataWithoutDate];
    
    return latestData;
};

export const sortByMaxValue = (data) => {
    // 주어진 데이터에서 total 값을 제외한 각 속성값 추출
    const { hallucination, abnormalBehavior, moody, delusion } = data;

    // 속성값들을 배열로 저장 (total 제외)
    const attributes = [
        { name: 'hallucination', value: hallucination },
        { name: 'abnormalBehavior', value: abnormalBehavior },
        { name: 'moody', value: moody },
        { name: 'delusion', value: delusion }
    ];

    // 속성값을 기준으로 정렬
    attributes.sort((a, b) => b.value - a.value);

    // total 값을 가장 마지막에 추가
    const totalValue = data.total;

    // 정렬된 속성값을 객체로 반환
    const sortedData = {};
    attributes.forEach(attribute => {
        sortedData[attribute.name] = attribute.value;
    });
    sortedData.total = totalValue;

    return sortedData;
}