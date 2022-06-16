# **프로젝트 소개**

# Nostanding

## **LOGO**

<img src="https://user-images.githubusercontent.com/95327764/171786761-3ed710e3-a911-4527-89a0-50b1202f1ecb.png" width="170" height="100"/>

## **ABOUT**


**예약 서비스는 많은 실태**

**종합으로 되어있는 예약 서비스가 잘 없는 현실**

**여러 방면의 가게를 서비스 하나로 모두 예약 할 수 있는 종합 예약 서비스**

**NoStanding을 통해 사용 가능한 기능**

* 카테고리 선택을 통한 필터링 / 검색
* 시간대 별 예약 시스템
* 리뷰 시스템으로 가게의 솔직한 평판 확인 가능
* 예약 한 것을 미리 알려주는 단계 별 알람 시스템
* 소셜 로그인을 통한 가입 절차 간편화
* 점주들에게는 다른 UI를 제공하여 예약 시스템 관리 편의성 개선

# 사용 스택

![Nostanding](https://user-images.githubusercontent.com/95732945/173584663-749d234f-da61-413e-8106-18d9829396d2.png)

## FRONT
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/style_component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/AXIOS-A100FF?style=for-the-badge&logoColor=white" width="150" height="50"/>

## BACK
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/Node-339933?style=for-the-badge&logo=Node.js&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/AXIOS-A100FF?style=for-the-badge&logoColor=white" width="150" height="50"/>

## AWS
<img src="https://img.shields.io/badge/S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/Cloudfront-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/EC2-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/RDS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/LoadBalancer-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white" width="150" height="50"/><img src="https://img.shields.io/badge/Route53-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white" width="150" height="50"/>


# More Info

* [Wireframe](https://miro.com/app/board/uXjVOyoJqCo=/)
* [flowchart](https://miro.com/app/board/uXjVOyoJqCo=/) 

# Team Members

<details><summary>김상한</summary>

***
* <a href="https://github.com/Sangkan-K"><img src="https://img.shields.io/badge/GitHub-
Sangkan.K-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
* Position: **Back-End(Team Leader)**
* Stack : `Node` `Sequelize` `JWT` `Express` `MySQL` `Axios`
* Contributions :
  * A

***
</details>

<details><summary>박윤신</summary>

***
* <a href="https://github.com/Sangkan-K"><img src="https://img.shields.io/badge/GitHub-BaGyun0107-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
* Position: **Back-End**
* Stack : `Node` `Sequelize` `JWT` `Express` `MySQL` `Axios`
* Contributions :
  * **스키마 작성**
  * **OAuth 계정연동 회원가입**
  * **회원가입**
    * 중복 확인
    * 비밀번호 암호화
       * util과 crypto 활용
    * 이메일 인증 
       * ejs와 nodemailer를 활용
  * **로그인, 로그아웃**
    * JWT를 이용한 로그인
    * 로그아웃 시, 쿠키 만료
  * **검색필터링** 
    * 검색과 데이터베이스 간에 띄어쓰기 구분제거 (ex. 서 울 음 식 점 = 서울음식점)
  * **마이페이지 ( 고객 )**
    * 알림
       * 예약 완료 시 알림
       * 예약시간으로부터 한시간 뒤, 리뷰 작성유도 하기 위한 알림
       * 점주님이 리뷰에 답글을 작성했을 시 알림
    * 내가 쓴 후기
    * 회원 정보 수정
       * 닉네임 변경 시, 중복확인
       * 비밀번호 변경 시, 암호화
    * 회원탈퇴
       * 회원탈퇴 시, 연결되있는 리뷰, 별점 등 데이터베이스 전부 삭제
  * **마이페이지 ( 점주 )**
    * 알림 
      * 고객님이 예약 완료 시 알림
      * 고객님이 리뷰 작성 했을 시 답글을 작성유도 하기 위한 알림
    * 내 가게 관리 ( 메뉴, 가게설명 )
      * 메뉴 추가 
      * 가게 설명 수정
    * 내 가게 후기
    * 회원 정보 수정 
      * 닉네임 변경 시, 중복확인
      * 비밀번호 변경 시, 암호화
    * 회원탈퇴 
      * 회원탈퇴 시, 연결되있는 리뷰, 별점 등 데이터베이스 전부 삭제
  * **댓글 수, 별점으로 필터링해서 재정렬**


***
</details>

<details><summary>윤선웅</summary>

***
* <a href="https://github.com/Sangkan-K"><img src="https://img.shields.io/badge/GitHub-Sun970324-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
* Position: **Front-End**
* Stack : `React` `Redux` `Redux Toolkit` `React-Router` `JavaScript` `Styled-Components` `Axios`
* Contributions :
  * A

***
</details>

<details><summary>박상하</summary>

***
* <a href="https://github.com/Sangkan-K"><img src="https://img.shields.io/badge/GitHub-gamemakerr-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
* Position: **Front-End**
* Stack : `React` `Redux` `Redux Toolkit` `React-Router` `JavaScript` `Styled-Components` `Axios`
* Contributions :
  * A

***
</details>

