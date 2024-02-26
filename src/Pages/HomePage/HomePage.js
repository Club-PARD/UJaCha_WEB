// import
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../../Atoms";

import HomePageChart from "./Components/HomePageChart";
import HomePageChartResult from "./Components/HomePageChartResult";
import {getLatestData} from "./Components/tempChartData";

import {Img, MiniSquare, OutletContainer} from "../../Layout/Layout";
import {Modal2} from "../../Layout/Modal2";
import {Modal} from "../../Layout/Modal";

import {getUserData} from "../../Api/test";
import {getExistToday} from "../../Api/test";

import {theme} from "../../Styles/theme";

function HomePage() {
    // 변수 선언
    const [userData, setUserData] = useState([]);
    const [userDataRecoil, setUserDataRecoil] = useRecoilState(userInfo);
    const latestSevenData = getLatestData(userData);
    const lastDataWithDate = latestSevenData.slice().reverse().find((item) => item.date);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);

    // 핸들러 선언 openModal, closeModal, openMdal2, closeModal2 : 모달 창 관련 핸들러
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal2 = () => {
        setIsModal2Open(true);
    };

    const closeModal2 = () => {
        setIsModal2Open(false);
    };

    // navigate : 이동을 위한 핸들러
    const navigate = useNavigate();

    // handleAddSympton : 오늘의 테스트 여부 판단 핸들러
    const handleAddSympton = async () => {
        const response = await getExistToday();
        if (response.data) {
            openModal();
        } else {
            navigate("/test");
        }
    };

    // hanldeCheckDataLength : Data 길이를 체크하고, 부족한 개수 만큼 빈 데이터를 추가하여 반환하는 핸들러
    const hanldeCheckDataLength = (data) => {

        // 현재 갖고 있는 Data 길이 출력
        console.log("Data Length", data.length);

        // 추가해야 할 Data 길이 계산 후 출력
        const dataLengthToAdd = 7 - data.length;
        console.log("Data Length to Add", dataLengthToAdd);

        // 추가해야 할 데이터가 0개보다 큰 경우, 추가할 빈 데이터를 생성하여 추가
        if (dataLengthToAdd > 0) {
            // 추가할 빈 데이터 생성
            const newData = handleGenerateEmptyData(dataLengthToAdd);

            // 기존 데이터와 새로운 데이터 합치기
            const updatedData = [
                ...data,
                ...newData
            ];

            // 상태 업데이트
            setUserData(updatedData);
        }
    };

    // useEffect : 유저 정보 가져오는 부분 (test 정보를 가져온다.)
    useEffect(() => {

        // fetchData : 로그인한 유저가 갖고 있는 모든 테스트 정보를 반환한다.
        const fetchData = async () => {
            try {
                const getUserDataResponse = await getUserData(); // 비동기 함수 호출을 await로 감쌉니다.

                if (getUserDataResponse) {
                    console.log("result", getUserDataResponse.data);
                    setUserDataRecoil(getUserDataResponse.data);
                    return getUserDataResponse.data.test;
                }
            } catch (error) {
                console.error("Error fetching user data", error); // 오류 메시지를 콘솔에 출력합니다.
            }
        };

        // fetchData 핸들러 실행
        fetchData().then((data) => {
            if (data) {
                // response된 모든 test 결과 출력
                console.log(" All test result in response", data);

                // const limitedData = data.slice(-7); 데이터의 각 값의 testId를 길이의 순서대로 변경합니다.
                // modifiedDataAddTestid = 객체 속성에 'testid'를 추가한 배열을 반환하여 저장한다.
                const modifiedDataAddTestid = data.map((item, index) => ({
                    ...item,
                    testId: index + 1
                }));

                // modifiedDataSliced 최근 7개의 데이터만 반환하여 저장
                const modifiedDataSliced = modifiedDataAddTestid.slice(-7);

                // fetchData 함수의 반환 값을 상태에 저장.
                setUserData(modifiedDataSliced);
                console.log("modifiedDataSliced reulst", userData);

                // setUserData가 완료된 후에 hanldeCheckDataLength 함수를 호출
                hanldeCheckDataLength(modifiedDataSliced);
                console.log("Get data", data); // 데이터를 상태에 설정한 후에 콘솔에 데이터를 출력합니다.

                // setUserData가 완료된 후에 testId 값을 확인합니다.
                console.log("testId!!!", modifiedDataSliced);
            } else {
                alert("다시 로그인을 해주세요.");
                navigate("/");
            }
        });
    }, []); // useEffect 의존성 배열이 비어 있으므로 한 번만 호출됩니다.

    return (
        <HomePageContainer>
            {
                // userData의 test 유무 판단
                userDataRecoil.test
                    ? (
                        // userData의 test 결과 개수 판단
                        userDataRecoil.test.length <= 0
                            ? (
                                // test의 결과가 0개보다 적을 경우
                                <div>
                                    <Img
                                        src="img/noDataImage1.png"
                                        width="100%"
                                        height="225px"
                                        style={{
                                            marginBottom: "10px"
                                        }}/>
                                    <Img
                                        src="img/noDataImage2.png"
                                        width="100%"
                                        height="215px"
                                        style={{
                                            marginBottom: "10px"
                                        }}/>
                                </div>
                            )
                            : (
                                // test의 결과가 1개 이상일 경우
                                <div>
                                    < HomePageWrapper height="225px" backgroundColor={theme.colors.white_100}>
                                        <div>
                                            <LegendDiv/>
                                            <HomePageChart tempChartData={latestSevenData}/>
                                        </div>
                                    </HomePageWrapper>
                                    <HomePageWrapper height="215px" backgroundColor={theme.colors.white_100}>
                                        <HomePageChartResult
                                            lastedData={lastDataWithDate
                                                ? lastDataWithDate
                                                : ""}/>
                                    </HomePageWrapper>
                                </div>
                            )
                    )
                    : ( 
                        // Loading을 위한 배경화면
                        <div>
                            <HomePageWrapper height="225px" backgroundColor={theme.colors.white_100}/>
                            <HomePageWrapper height="215px" backgroundColor={theme.colors.white_100}/>
                        </div>
                    )

            }

            {/* Buttons */}
            <Button
                height="56px"
                backgroundColor={theme.colors.purple_100}
                onClick={handleAddSympton}>
                오늘의 증상 추가하기
            </Button>
            <Button
                height="56px"
                backgroundColor={theme.colors.white_100}
                onClick={openModal2}>
                기록 공유하기
            </Button>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                navigate={navigate}
                page="home" />
            <Modal2
                isOpen={isModal2Open}
                closeModal={closeModal2}
                navigate={navigate}
                page="home"/>
        </HomePageContainer>
    );
}

const HomePageContainer = styled(OutletContainer) `
    background-color: red;

    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const HomePageWrapper = styled.div `
    width: 100%;
    height: ${ (props) => props.height};

    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    margin-bottom: 15px;
    padding: 20px 30px;
    box-sizing: border-box;

    background-color: ${props => props.backgroundColor};

    border-radius: 20px;
`;

const Button = styled.button `
    width: 100%;
    height: ${ (props) => props.height};

    margin-bottom: 15px;

    border: none;
    border-radius: 20px;

    background-color: ${props => props.backgroundColor};

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: #8280ff;
    }
`;

const LegendDiv = () => {
    return (
        <LegendDivContainer>
            <Row>
                <Item>
                    <MiniSquare backgroundColor={theme.colors.green_100}/>
                    망상
                </Item>
                <Item>
                    <MiniSquare backgroundColor={theme.colors.pink_100}/>
                    환각/환청
                </Item>
                <Item>
                    <MiniSquare backgroundColor={theme.colors.purple_100}/>
                    이상 행동
                </Item>
            </Row>
            <Row>
                <Item>
                    <MiniSquare backgroundColor={theme.colors.lemon_100}/>
                    감정 변화
                </Item>
                <Item>
                    <MiniSquare backgroundColor={theme.colors.black_100}/>
                    의심 정도
                </Item>
            </Row>
        </LegendDivContainer>
    );
};

const LegendDivContainer = styled.div `
    width: 100%;
    height: 50px;

    padding-right: 15px;
    box-sizing: border-box;

    /* background-color: yellow; */
`;

const Row = styled.div `
    display: flex;
    justify-content: end;

    &:first-child {
        margin-bottom: 12px;
    }
`;

const Item = styled.div `
    display: flex;
    align-items: center;

    margin-right: 15px;

    font-size: 15px;
    line-height: 14px;
    font-weight: 400;

    &:last-child {
        margin-right: 0px;
    }
`;

// handleGenerateEmptyData : 추가할 빈 데이터 생성 함수
const handleGenerateEmptyData = (count) => {
    const emptyData = [];
    for (let i = 0; i < count; i++) {
        emptyData.push({
            testId: null,
            hallucination: null,
            abnormalBehavior: null,
            moody: null,
            delusion: null,
            total: null,
            date: null
        });
    }
    return emptyData;
};
export default HomePage;
