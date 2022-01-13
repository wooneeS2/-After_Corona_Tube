# 🙌애코튜브 프로젝트 프론트엔드입니다.

## ❓ 애코튜브란?

- 코로나 19이후, 유튜브 인기동영상 데이터를 분석한 내용을 확인하고, 인기 해시태그가 포함되어있는 인기동영상을 검색 할 수 있는 프로젝트입니다.
- 인사이트 제시, 종류별 기간별 데이터 시각화, 해시태그로 동영상을 검색하는 세 가지 파트로 나눠져있습니다.

## 🙋‍♀️ 프로젝트 구성 안내

1. react를 이용해서 만든 프로젝트입니다.
2. 각 디자인 및 기능별로 적절한 라이브러리를 사용했습니다.
   - 스크롤 애니메이션 : React-Scroll-motion
   - 차트 : VictoryChart
   - 워드 클라우드 :React-tag-cloud
   - 페이지네이션 : Bootstrap

## 🛠 실행방법

```bash
git clone https://github.com/wooneeS2/-After_Corona_Tube.git

npm install

npm start
```

## 🤟 프로젝트 구현 내용

**1. home**

- 프로젝트 인트로 및 배경 설명
- 스크롤 애니메이션을 이용하여 구성

**2. chart**

- 기간별로 기본정보/시간/카테고리/워드클라우드 주제별 차트
- 각 차트별로 마우스 오버시 각 가중치 툴팁 표시

**3. search**

- 유튜브 인기 동영상 카테고리 및 해시태그 선택시 해당 동영상 표시
- 결과 영상 클릭시 유튜브 페이지로 이동

**4. sign-in/ sign-up**

- 회원 가입 및 로그인 기능
- 이메일 벨리데이션 기능
- 로그인시 메뉴버튼 옆에 사용자 이름 표시
- 로그아웃 기능

**5. 반응형 디자인**

- 각 페이지별 디자인을 모바일에 최적화했습니다.

## 🗂 프로젝트 구조 설명

1. components

- `base` : 프로젝트 기본구조인 header & footer 컴포넌트
- `chartPageChartComponents` : 차트페이지에 쓰인 기본정보/카테고리/시간/워드클라우드 차트
- `etc` : 버튼, 로딩바 컴포넌트
- `startPageChartComponents` : 미디어 트렌드 차트, 환자수 차트, 스크롤 페이지 별 컴포넌트

2. data

- 프로젝트에 쓰인 데이터입니다.

3. design

- 프로젝트에 사용된 디자인 파일

4. pages

- 라우터로 이동하는 페이지 컴포넌트 홈/차트/검색 컴포넌트
- `sign` : 회원가입, 회원가입 완료, 로그인 페이지 컴포넌트

## 📆 진행 기간

- 2021년 12월 21일 ~ 2021년 1월 9일
- 3주동안 진행하였으며 기획 1주, 개발 2주 소요됨.

## 🏅 버전

1.0 : 2022-01-09 배포

## 🥁 데모

**PC버전**
![Jan-11-2022 15-23-04](https://user-images.githubusercontent.com/49189226/148891913-8cd5b570-4bf0-4e5c-adeb-28d5333dec45.gif)
![demo2](https://user-images.githubusercontent.com/49189226/148891547-50c2642d-2b09-4ee3-b510-5cde148f7c55.gif)
![demo3](https://user-images.githubusercontent.com/49189226/148891553-79db2bac-faff-4d6a-9f4d-bebea331e24d.gif)

**Mobile버전**  
 ![m-demo1](https://user-images.githubusercontent.com/49189226/148892384-4ea22e88-4403-426e-9d01-8d8b6c3f2a87.gif)

![m-demo2](https://user-images.githubusercontent.com/49189226/148892396-1a44db19-369b-4b69-991c-366ef3c5857f.gif)

![m-demo3](https://user-images.githubusercontent.com/49189226/148892405-fb341f0e-629f-4287-ae79-1b2ce685c475.gif)

## ✅ 수정해야 하는 부분

- 전역변수 관리 로직을 App.js에서 분리하기
- 코드 리팩토링

## ☺️ 도움을 주신 분

@shawn (엘리스 AI 트랙 3기 데이터분석 웹 프로젝트 코치님)
