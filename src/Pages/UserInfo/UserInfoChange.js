import { useRecoilState } from "recoil";
import { userInfo } from "../../Atoms";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserInfoChange() {
    const [userInfoData, setUserInfoData] = useRecoilState(userInfo); // 서버에서 가져온 user 정보 변수 (Read / modify)
    const [newUserInfoData, setNewUserInfoData] = useState(userInfoData); // 새로 추가할 user 정보 변수

    const navigate = useNavigate(); // 페이지 이동을 위한 navigate 변수

    // 입력값 수정용 핸들러
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setNewUserInfoData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // 내용 수정 확인용 핸들러
    const handleClickChangeButton = () => {
        if (window.confirm("수정하시겠습니까?")) {
            alert("수정 완료!");
            setUserInfoData(newUserInfoData);
            navigate("/userInfo");
        } else {
        }
    }

    return (
        <div>
            <h1>정보 수정하기</h1>
            <div>
                <span>이름 : </span>
                <input type = "text" value = {newUserInfoData.name} name = "name" onChange={handleInputChange}/>
            </div>
            <button onClick={handleClickChangeButton}>수정하기</button>
        </div>
    );
}

export default UserInfoChange;