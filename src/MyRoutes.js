import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UserInfo from "./Pages/UserInfo/UserInfo";
import Header from "./Layout/Header";
import GraphTest from "./Pages/0Test/GraphTest";
import UserInfoChange from "./Pages/UserInfo/UserInfoChange";
import IntroPage from "./Pages/IntroPage/IntroPage";
import TestPage from "./Pages/TestPage/TestPage";
import RegisterPage from "./Pages/LoginPage/RegisterPage";
import ResultPage from "./Pages/ResultPage/ResultPage";
import CommunityPage from "./Pages/CommunityPage/CommunityPage";
import MyPage from "./Pages/MyPage/MyPage";
import CommunityPageDetail from "./Pages/CommunityPage/CommunityPageDetail/CommunityPageDetail";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<IntroPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route element={<Header />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/userInfoChange" element={<UserInfoChange />} />
        <Route path="/test1" element={<GraphTest />} />
        <Route path="/community" element={<CommunityPage />}/>
      </Route>
      <Route path="/communitydetail" element={<CommunityPageDetail/>}/>
    </Routes>
  );
}

export default MyRoutes;
