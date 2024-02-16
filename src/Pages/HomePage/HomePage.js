import styled from "styled-components";
import { theme } from "../../Styles/theme";
import HomePageChart from "./Components/HomePageChart";
import HomePageChartResult from "./Components/HomePageChartResult";
import { getLatestData, tempChartData } from "./Components/tempChartData";
import { Link, useNavigate } from "react-router-dom";
import { LeftRightPadding20px, MiniSquare, MyLink } from "../../Layout/Layout";
import { useEffect, useState } from "react";
import { getUserData } from "../../Api/test";
import { Modal2 } from "../../Layout/Modal2";
import { Modal } from "../../Layout/Modal";
import { getExistToday } from "../../Api/test";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userInfo } from "../../Atoms";

// [ 바로가기 ] Container: HomePage Wrapper: HomePage(Chart / Result) Component:
// Button (오늘의 증상 추가하기 / 기록 공유하기) Div : Legend (카테고리) handler : 추가할 빈 데이터 생성 함수

function HomePage() {
  const [userData, setUserData] = useState([]);
  const [userDataRecoil, setUserDataRecoil] = useRecoilState(userInfo);
  const latestSevenData = getLatestData(userData);
  const dataLength = latestSevenData.length;
  const lastDataWithDate = latestSevenData
    .slice()
    .reverse()
    .find((item) => item.date);

  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleAddSympton = async () => {
    const response = await getExistToday();
    if (response.data) {
      openModal();
    } else {
      navigate("/test");
    }
  };

  const hanlderCheckDataLength = (data) => {
    console.log(data.length);
    const dataLengthToAdd = 7 - data.length;
    console.log(dataLengthToAdd);
    if (dataLengthToAdd > 0) {
      const newData = generateEmptyData(dataLengthToAdd); // 추가할 빈 데이터 생성
      const updatedData = [...data, ...newData]; // 기존 데이터와 새로운 데이터 합치기
      setUserData(updatedData); // 상태 업데이트
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData1 = await getUserData(); // 비동기 함수 호출을 await로 감쌉니다.

        if (userData1) {
          console.log("result", userData1.data);
          setUserDataRecoil(userData1.data);
          return userData1.data.test;
        }
      } catch (error) {
        console.error("Error fetching user data", error); // 오류 메시지를 콘솔에 출력합니다.
      }
    };

    console.log(fetchData);

    fetchData().then((data) => {
      if (data) {
        console.log("pangil", data);
        // const limitedData = data.slice(-7); 데이터의 각 값의 testId를 길이의 순서대로 변경합니다.
        const modifiedData2 = data.map((item, index) => ({
          ...item,
          testId: index + 1,
        }));
        const modifiedData = modifiedData2.slice(-7);
        // fetchData 함수의 반환 값을 상태에 설정합니다.
        setUserData(modifiedData);

        // setUserData가 완료된 후에 hanlderCheckDataLength 함수를 호출합니다.
        console.log("userData123", userData);
        hanlderCheckDataLength(modifiedData);
        console.log("Get data", data); // 데이터를 상태에 설정한 후에 콘솔에 데이터를 출력합니다.

        // setUserData가 완료된 후에 testId 값을 확인합니다.
        console.log("testId!!!", modifiedData);
      } else {
        alert("다시 로그인을 해주세요.");
        navigate("/");
      }
    });
  }, []); // useEffect 의존성 배열이 비어 있으므로 한 번만 호출됩니다.

  return (
    <HomePageContainer>
      {/* 카테고리 / Chart */}
      <HomePageWrapper height="225px" backgroundColor={theme.colors.white_100}>
        <div>
          <LegendDiv />
          <HomePageChart tempChartData={latestSevenData} />
        </div>
      </HomePageWrapper>

      <HomePageWrapper height="215px" backgroundColor={theme.colors.white_100}>
        <HomePageChartResult
          lastedData={lastDataWithDate ? lastDataWithDate : []}
        />
      </HomePageWrapper>

      {/* Buttons */}
      <Button
        height="56px"
        backgroundColor={theme.colors.purple_100}
        onClick={handleAddSympton}
      >
        오늘의 증상 추가하기
      </Button>
      <Button
        height="56px"
        backgroundColor={theme.colors.white_100}
        onClick={openModal2}
      >
        기록 공유하기
      </Button>
      <Modal2
        isOpen={isModal2Open}
        closeModal={closeModal2}
        navigate={navigate}
        page="home"
      />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        navigate={navigate}
        page="home"
      />
    </HomePageContainer>
  );
}

// Container : HomePage
const HomePageContainer = styled.div`
  width: 100%;
  height: auto;
  /* background-color: white; */

  padding-bottom: 150px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

// Wrapper : HomePage (Chart / Result)
const HomePageWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height};

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  margin-bottom: 15px;
  padding: 20px 30px;
  box-sizing: border-box;

  background-color: ${(props) => props.backgroundColor};

  border-radius: 20px;
`;

// Component : Button (오늘의 증상 추가하기 / 기록 공유하기)
const Button = styled.button`
  width: 100%;
  height: ${(props) => props.height};

  margin-bottom: 15px;

  border: none;
  border-radius: 20px;

  background-color: ${(props) => props.backgroundColor};

  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #8280ff;
  }
`;

// Div : Legend (카테고리)
const LegendDiv = () => {
  // Container : LegendDiv
  const LegendDivContainer = styled.div`
    width: 100%;
    height: 50px;

    padding-right: 15px;
    box-sizing: border-box;

    /* background-color: yellow; */
  `;

  // Component : Row (두 개의 행)
  const Row = styled.div`
    display: flex;
    justify-content: end;

    &:first-child {
      margin-bottom: 12px;
    }
  `;

  // Componet : Item (각 카테고리)
  const Item = styled.div`
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
  return (
    <LegendDivContainer>
      <Row>
        <Item>
          <MiniSquare backgroundColor={theme.colors.green_100} />
          망상
        </Item>
        <Item>
          <MiniSquare backgroundColor={theme.colors.pink_100} />
          환각/환청
        </Item>
        <Item>
          <MiniSquare backgroundColor={theme.colors.purple_100} />
          이상 행동
        </Item>
      </Row>
      <Row>
        <Item>
          <MiniSquare backgroundColor={theme.colors.lemon_100} />
          감정 변화
        </Item>
        <Item>
          <MiniSquare backgroundColor={theme.colors.black_100} />
          의심 정도
        </Item>
      </Row>
    </LegendDivContainer>
  );
};

// handler : 추가할 빈 데이터 생성 함수
const generateEmptyData = (count) => {
  const emptyData = [];
  for (let i = 0; i < count; i++) {
    emptyData.push({
      testId: null,
      hallucination: null,
      abnormalBehavior: null,
      moody: null,
      delusion: null,
      total: null,
      date: null,
    });
  }
  return emptyData;
};
export default HomePage;
