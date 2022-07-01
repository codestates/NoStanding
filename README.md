# **프로젝트 소개**

# Nostanding

### 배포링크 : https://www.semicolon-nostanding.com
### 노션링크 : https://codestates.notion.site/7-semicolon-Nostanding-297a7ffb182f4d1b852847f2628e6c26

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

# 주요 기능별 시연 GIF

### 노션 작성
* [링크](https://codestates.notion.site/7-semicolon-Nostanding-297a7ffb182f4d1b852847f2628e6c26)

# More Info

* [Wireframe](https://miro.com/app/board/uXjVOyoJqCo=/)
* [flowchart](https://miro.com/app/board/uXjVOyoJqCo=/) 
* [Api Docs](https://server.semicolon-nostanding.com/api-docs/)
* [DB Schema](https://dbdiagram.io/d/62942ef6f040f104c1bb60ce)

# Team Members

<details><summary>김상한</summary>

***
* <a href="https://github.com/Sangkan-K"><img src="https://img.shields.io/badge/GitHub-Sangkan.K-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
* Position: **Back-End(Team Leader)**
* Stack : `Node` `Sequelize` `JWT` `Express` `MySQL` `Axios`
* Contributions :
  * **서버 환경 구축** 
  * **API 문서 작성**
    * Swagger 활용
  * **스키마 작성**
  * **OAuth 계정연동 회원가입**
  * **카테고리 필터**
    * 선택 카테고리 별 필터링 된 Data 제공
    * 별점순, 리뷰순으로 정렬 가능
  * **회원가입**
    * 점주 회원가입 시 주소 데이터를 위도,경도 변환 후 데이터 저장
  * **예약하기**
    * 가게 선택 후 시간,메뉴 채택하여 예약 가능
  * **마이페이지 ( 고객 )**
    * 예약 내역 조회
       * 고객의 예약 내역 제공
       * 예약 취소 가능
    * 즐겨찾기
       * 즐겨찾기 된 가게 정보 제공
       * 추가 및 삭제 가능
    * 리뷰 추가
       * 사진 업로드 기능/삭제 가능(Multer 활용)
  * **마이페이지 ( 점주 )**
    * 예약 현황 조회
       * 내 가게의 예약 정보를 제공
    * 가게 정보 수정
       * 메뉴 이미지 업로드/삭제 가능(Multer 활용)
       * 사진 정보 수정 , 이미지 업로드/삭제 가능(Multer 활용)
  * **https 배포**
    * client
      * S3 , CloudFront 활용
    * server
      * EC2 , RDS , ELB 활용
    * client-server 연결
      * Router53 활용

***
</details>

<details><summary>박윤신</summary>

***
* <a href="https://github.com/Sangkan-K"><img src="https://img.shields.io/badge/GitHub-BaGyun0107-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
* Position: **Back-End**
* Stack : `Node` `Sequelize` `JWT` `Express` `MySQL` `Axios`
* Contributions :
  * **스키마 작성**
  * **API 문서 작성**
    * Swagger 활용
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
* Stack : `React` `React-Router` `React-Redux` `Redux-Toolkit` `Redux-Persist` `JavaScript` `Styled-Components` `Axios`
* Contributions :
  * **Basic**
    * Figma를 통한 전체 구조 틀 계획
    * Flowchart 계획
  * **Front**
    * 라우팅 구성 및 중첩라우팅 구성
    * 로딩 인디케이터 구현
    * React-Redux를 통한 State 관리
    * 메인페이지
      * 구조 및 CSS
      * 페이지네이션
      * 검색 기능
      * 카테고리 기능
      * 알림 기능
    * 매장 상세 페이지
      * 구조 및 CSS
      * 즐겨찾기 등록/해제
      * 매장 위치 기반 카카오 지도 마커 구현
      * 예약기능
    * 마이페이지 (고객회원)
      * 구조 및 CSS
      * 현재 시간을 기준으로 나눈 과거/현재 예약내역 구분
      * 과거 예약내역 리뷰작성 기능
      * 현재 예약내역 예약취소 기능
      * 리뷰작성 별점, 사진추가하기
      * 작성된 리뷰 삭제하기
      * 알림 기능
      * 회원정보 수정 구현
      * 회원탈퇴
    * 로그인/로그아웃 구현
      * OAuth 2.0 소셜 회원가입 및 로그인 (카카오, 구글)
      * Redux-persist를 활용한 로그인 유지기능
      * 비밀번호 찾기 기능
    * 회원가입 구현
      * 구조 및 CSS
      * 고객회원/점주회원 구분한 회원가입
      * 유효성 검사 기능
      * 이메일 중복 검사 기능
***
</details>

<details><summary>박상하</summary>

***
* <a href="https://github.com/Sangkan-K"><img src="https://img.shields.io/badge/GitHub-gamemakerr-181717?style=for-the-badge&logo=GitHub&logoColor=white"/></a>
* Position: **Front-End**
* Stack : `React` `Redux` `Redux Toolkit` `React-Router` `JavaScript` `Styled-Components` `Axios`
* Contributions :
  * **Basic**
    * Figma를 통한 전체 구조 틀 계획
    * Flowchart 계획
  * **Front**
    * 라우팅 구성 및 중첩라우팅 구성
    * React-Redux를 통한 State 관리
    * 헤더
      * 헤더 구현
      * 로그인 모달 창 구현
    * 메인페이지
      * 구조 및 CSS
      * react-slick 이용한 자동 슬라이드 구현 및 디자인

    * 매장 상세 페이지
      * 구조 및 CSS
      * 매장 위치 기반 카카오 지도 구현
    * 마이페이지 (점주회원)
      * 구조 및 CSS
      * 날짜 별 예약 현황 확인기능 ,예약 취소 기능 구현
      * 고객이 단 리뷰를 보여주고 리리뷰를 작성하는 기능 구현
      * 점주는 점주의 리리뷰만 삭제 가능하게 구현
      * 가게 정보, 가게 사진, 가게 메뉴 변경 페이지 구현
      * 가게 메뉴 이름,가격,사진 CRUD 기능 구현
      * 가게 사진 CRUD 기능 구현
      * 가게 상세정보 변경 기능 구현
      * 알림 기능
      * 회원정보 수정 구현
      * 회원탈퇴
    * 로그인/로그아웃 구현
      * OAuth 2.0 소셜 회원가입 및 로그인 (카카오, 구글)
      * Redux-persist를 활용한 로그인 유지기능
    * 회원가입 구현
      * 구조 및 CSS
      * 점주회원 주소지 API 기능 구현           

***
</details>
