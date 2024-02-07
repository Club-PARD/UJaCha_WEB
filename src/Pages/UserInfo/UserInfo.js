import { useRecoilValue } from "recoil";
import { userInfo } from "../../Atoms";
import { Link } from "react-router-dom";

function UserInfo() {
    const userInfoData = useRecoilValue(userInfo); // 서버에서 가져온 user 정보 변수 (Read만)
    return (
        <div>
            <h1>UserInfo</h1>
            <div>
                <h3>유저 정보</h3>
                <h4>이름 : {userInfoData.name}</h4>
            </div>
            <Link to = "/userInfoChange"><button>정보 수정</button></Link>
        </div>
    );
}

export default UserInfo;