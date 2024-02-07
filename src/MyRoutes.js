import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Header from "./Header";
import GraphTest from "./Pages/Test/GraphTest";

function MyRoutes() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/page1" element={<Page1 />}/>
                <Route path="/page2" element={<Page2/>}/>
                <Route path="/page3" element={<Page3/>}/>
                <Route path="/page4" element={<Page4 />} />
                <Route path="/test1" element={<GraphTest/>}/>
            </Route>
        </Routes>
    );
}

export default MyRoutes;