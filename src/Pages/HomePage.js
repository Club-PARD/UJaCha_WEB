import {useRecoilValue } from "recoil";
import { userInfo } from "../Atoms";

function HomePage() {
    const userInfoData = useRecoilValue(userInfo);
    return (
        <div>
            <h1>홈 페이지</h1>
            <div>
                <h3>{ userInfoData.name ? userInfoData.name : "홍길동"}님 반갑습니다.</h3>
            </div>
        </div>
    );
}


export default HomePage;