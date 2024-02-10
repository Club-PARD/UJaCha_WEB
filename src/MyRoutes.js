import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import UserInfo from "./Pages/UserInfo/UserInfo";
import Header from "./Layout/Header";
import GraphTest from "./Pages/Test/GraphTest";
import UserInfoChange from "./Pages/UserInfo/UserInfoChange";
import IntroPage from "./Pages/IntroPage/IntroPage";
import TestPage from "./Pages/TestPage/TestPage";
import RegisterPage from "./Pages/LoginPage/RegisterPage";

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<IntroPage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/register" element={<RegisterPage/>}/>
            <Route element={<Header/>}>
                <Route path="/home" element={<HomePage />}/>
                <Route path="/page1" element={<Page1 />}/>
                <Route path="/page2" element={<Page2/>}/>
                <Route path="/page3" element={<Page3/>}/>
                <Route path="/userInfo" element={<UserInfo />} />
                <Route path="/userInfoChange" element={<UserInfoChange/>}/>
                <Route path="/test1" element={<GraphTest />} />
            </Route>
        </Routes>
    );
}

export default MyRoutes;