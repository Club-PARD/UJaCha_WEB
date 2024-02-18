import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Layout/Header";
import GraphTest from "./Pages/0Test/GraphTest";
import IntroPage from "./Pages/IntroPage/IntroPage";
import TestPage from "./Pages/TestPage/TestPage";
import RegisterPage from "./Pages/LoginPage/RegisterPage";
import ResultPage from "./Pages/ResultPage/ResultPage";
import CommunityPage from "./Pages/CommunityPage/CommunityPage";
import MyPage from "./Pages/MyPage/MyPage";
import CommunityPageDetail from "./Pages/CommunityPage/CommunityPageDetail/CommunityPageDetail";
import CommunityPageAddPost from "./Pages/CommunityPage/CommunityPageAddPost/CommunityPageAddPost";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" index="index" element={<IntroPage />}/>
            <Route path="/test" element={<TestPage />}/>
            <Route path="/result" element={<ResultPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/mypage" element={<MyPage />}/>
            <Route path="/communitydetail" element={<CommunityPageDetail />}/>

            <Route element={<Header />}>
                <Route path="/home" element={<HomePage />}/>
                <Route path="/test1" element={<GraphTest />}/>
                <Route path="/community" element={<CommunityPage />}/>
                <Route path="/communityaddpost" element={<CommunityPageAddPost/>}/>
            </Route>
        </Routes>
    );
}

export default MyRoutes;
