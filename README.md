# UJaCha_Web

<p align="center">
  <br>
    <img src="./readme/Tune.png">
  <br>
</p>

<h3 align = "center"> 조현병 조기 진단 서비스, tune </h3>

<br/>

## ⚙️ 기술 스택

|  React   |  Recoil   |  Github   |  styled   |  axios   |  router   |
| :------: | :-------: | :-------: | :-------: | :------: | :-------: |
| ![axios] | ![recoil] | ![github] | ![styled] | ![axios] | ![router] |

<br>

## 🖥️ 페이지 구조

<br/>

### IntroPage

    서비스 소개
    테스트 페이지 이동 및 로그인 제공

### TestPage

    조현병 자가 진단 테스트 서비스 제공

### RegisterPage

    카카오 로그인 후 회원 정보 등록

### HomePage

    테스트 결과 조회
    테스트 결과 요약
    테스트 진행하기
    기록 공유

### CommunityPage

    게시글 작성
    게시글 목록

### MyPage

    자신의 정보 확인

<br/>
<br/>

## 📌 주요 기능

### 조현병 테스트

: 12개의 질문을 바탕으로 조현병 테스트를 진행하고, 테스트 결과를 조현병 의심도를 제공합니다.

### 조현병 테스트 결과 (차트 형식)

: 지금까지 진행된 자신의 조현병 테스트 결과를 차트 형식으로 보여줍니다. 또한, 각 테스트 별 증상들의 퍼센트도 제공합니다.

### 커뮤니티

: 조현병 자녀를 둔 부모들 간의 소통할 수 있는 창구를 제공합니다.

<br/>

<br/>

<!-- ### 👨‍👩‍👦‍👦Member

 <details markdown = "1">
  <summary>로그인 : api/member/login  (POST)</summary>
    <ul>
      <li>Request body</li>

```json
{
  "email": "string",
  "uid": "string"
}
```

  <li>Response body </li>

```json
{
  "token": "string",
  "exprTime": 0,
  "first": true
}
```

  </ul>
 </details>

 <details markdown = "1">
  <summary>회원가입 : api/member/first (POST)</summary>
    <ul>
      <li>Request body</li>

```json
{
  "nickname": "string",
  "childAge": 0,
  "uid": "string"
}
```

  <li>Response body </li>

```
string(token 값)
```

  </ul>
 </details>

 <details markdown = "1">
  <summary>업데이트 : api/member/update  (POST)</summary>
    <ul>
     <li>Request header</li>

```json
{
  "Authorization": "String",
  "Content-Type": "application/json"
}
```

<li>Request body</li>

```json
{
  "nickname": "string",
  "reliableName": "string",
  "childAge": 0
}
```

  <li>Response body </li>

```json
"업데이트 성공"
```

  </ul>
 </details>

 <details markdown = "1">
  <summary>회원 조회 : api/member  (GET)</summary>
    <ul>
     <li>Request header</li>

```json
{
  "Authorization": "String",
  "Content-Type": "application/json"
}
```

  <li>Response body </li>

```json
{
  "uid": "string",
  "email": "string",
  "nickname": "string",
  "reliableName": "string",
  "childAge": 0,
  "test": [
    {
      "testId": 0,
      "hallucination": 0,
      "abnormalBehavior": 0,
      "moody": 0,
      "delusion": 0,
      "total": 0,
      "date": "2024-02-16"
    }
  ]
}
```

  </ul>
 </details>

 <details markdown = "1">
  <summary>남의 정보 조회 : api/member/reliable  (GET)</summary>
    <ul>
     <li>Request header</li>

```json
{
  "Authorization": "String",
  "Content-Type": "application/json"
}
```

  <li>Response body </li>

```json
{
  "uid": "string",
  "email": "string",
  "nickname": "string",
  "reliableName": "string",
  "childAge": 0,
  "test": [
    {
      "testId": 0,
      "hallucination": 0,
      "abnormalBehavior": 0,
      "moody": 0,
      "delusion": 0,
      "total": 0,
      "date": "2024-02-16"
    }
  ]
}
```

  </ul>
 </details>

 <details markdown = "1">
  <summary>닉네임 중복확인 : api/member/duplicate  (GET)</summary>
    <ul>
     <li>RequestParam</li>

```
?name="string
```

  <li>Response body </li>

```
boolean
```

  </ul>
 </details>

<details markdown = "1">
  <summary>멤버 삭제 : api/member/delete  (DELETE)</summary>
    <ul>
     <li>Request header</li>

```json
{
  "Authorization": "String",
  "Content-Type": "application/json"
}
```

  <li>Response body </li>

```
"삭제 되었습니다."
```

  </ul>
 </details>

<br/>

### ✍️ Test

 <details markdown = "1">
  <summary>TEST(로그인 후) : api/test (POST)</summary>
    <ul>
      <li>Request Header</li>

```json
{
  "Authorization": "String",
  "Content-Type": "application/json"
}
```

  <li>Request Body </li>

```json
{
  "question1": 0,
  "question2": 0,
  "question3": 0,
  "question4": 0,
  "question5": 0,
  "question6": 0,
  "question7": 0,
  "question8": 0,
  "question9": 0,
  "question10": 0,
  "question11": 0,
  "question12": 0
}
```

  <li>Response body</li>

```json
{
  "testId": 0,
  "hallucination": 0,
  "abnormalBehavior": 0,
  "moody": 0,
  "delusion": 0,
  "total": 0,
  "date": "2024-02-16"
}
```

  </ul>
 </details>

 <details markdown = "1">
  <summary >TEST(로그인 전)(DB에 저장안됨): api/test/first(POST)</summary>
    <ul>
  <li>Request Body </li>

```json
{
  "question1": 0,
  "question2": 0,
  "question3": 0,
  "question4": 0,
  "question5": 0,
  "question6": 0,
  "question7": 0,
  "question8": 0,
  "question9": 0,
  "question10": 0,
  "question11": 0,
  "question12": 0
}
```

  <li>Response Body </li>

```json
{
  "hallucination": 0,
  "abnormalBehavior": 0,
  "moody": 0,
  "delusion": 0,
  "total": 0
}
```

  </ul>
  </details>

 <details markdown = "1">
  <summary>오늘 테스트 했는지 안 했는지 확인 :api/test/exist-today (GET)</summary>
    <ul>
      <li>Request Header</li>

```json
{
  "Authorization": "String",
  "Content-Type": "application/json"
}
```

  <li>Response body</li>

```
boolean
```

  </ul>
 </details> -->

<!-- Stack Icon Refernces -->

[axios]: /readme/axios.png
[github]: /readme/github.png
[react]: /readme/react.png
[recoil]: /readme/recoil.png
[router]: /readme/router.png
[styled]: /readme/styled.png
[tune]: /readme/tune.png
