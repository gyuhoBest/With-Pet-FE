<div align="center">
	<h1>소중한 반려견을 관리하는 서비스, With pet</h1>
	<img src="./src/lib/assets/images/dog/lg_icon.png"/>
</div>

# 프로젝트 소개

with pet은 반려견의 하루하루를 기록하는 서비스입니다. with pet을 통해서 반려견을 관리하고 커뮤니티도 참여해보세요

### [[배포 링크]](https://d2i6lpoir6sk2p.cloudfront.net/) - **현재 비용 문제로 백엔드 서버가 닫혀 있습니다**<br><br><br>

# 목차

1. [기술 스택](#기술-스택)
2. [커밋 컨벤션](#커밋-컨벤션)
3. [브랜치 전략](#브랜치-전략)
4. [아키텍처](#프로젝트-아키텍처)
5. [주요-기능](#주요-기능)
6. [그 밖에 특징](#그-밖에-특징)

<br><br>

# 기술 스택

### Language

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">

### Framework

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### State Management

<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">

### Style

<img src="https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=Sass&logoColor=white">

### Deploy

<img src="https://img.shields.io/badge/AWS S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"><img src="https://img.shields.io/badge/AWS CloudFront-F38020?style=for-the-badge&logo=amazonaws&logoColor=white">

<br><br>

# 커밋 컨벤션

| Gitmoji | Tag | Description |
| --- | --- | --- |
| :gift: | Feat | 새로운 기능추가 |
| :bug: | Fix | 버그 수정 |
| :memo: | Docs | 문서 수정 |
| :art: | Styles | 코드 포맷팅, 세미콜론 누락, 코드 변경 없음 등 |
| :hammer: | Refactor | 코드 리팩토링 |
| :white_check_mark: | Test | 테스트 추가, 리팩토링 테스트 |
| :recycle: | Chore | 빌드 작업, 패키지 관리자 구성 등 업데이트 |

<br><br>

# 브랜치 전략

- 브랜치명: [Title]/[description] ex) Design/landingPage
- 브랜치 플로우<br>
  1. 개인 브랜치에 push
  2. 상대방이 검토 후 production branch에 merge

<br><br>

# 프로젝트 아키텍처

![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/b46ce145-acc2-4b42-8db2-fb4a7f754b72)

<br><br>

# 주요 기능

### 🚀 다이어리를 통해 주 단위로 챌린지를 추가하고, 반려견의 건강을 관리할 수 있습니다.

<img src="./src/lib/assets/images/readme/diary.gif" width="100%">

#### A. 반려동물 정보 CRUD

#### B. 날짜별 챌린지 CRUD

#### C. 날짜별 건강기록 CRUD

#### D. 날짜별 다이어리

<br><br>

### 🚀 위치 기반 커뮤니티를 통하여 반려견 관련한 소통과 반려견 카페, 병원에 대한 정보를 공유할 수 있습니다.

<img src="./src/lib/assets/images/readme/communities.gif" width="100%">

#### A. 커뮤니티 페이지
 - `위치, 키워드`에 따른 검색 결과 표시
 - 게시글 "좋아요"/"좋아요 취소" => `Optimistic Update` 적용
 - Intersection Observer API를 사용하여 `Cursor Pagination`기반의 Infinity Scroll구현
 - 게시글 text를 렌더링하기 전에 sanitize하여 XSS에 대응<br>
![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/6cebb6a8-206a-4075-979b-3d6c73f82166)


#### B. 게시글 작성 페이지
- 사용자가 작성한 글의 형태를 유지하기 위해 `WYSIWYG 라이브러리`를 사용하여 게시글 CRUD
- 사용자가 이미지를 업로드했다가 게시글 작성 전 삭제를 했음에도 S3에는 그대로 남아있는 문제 발생. 아래 `그림 13, 14번 과정`을 통해 S3용량 관리 ![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/2d74b070-14d5-4441-b2b1-28c83cdecdc7)

#### C. 게시글 상세 정보 페이지
- 게시글 상세 정보 확인 (sanitize하여 XSS 대응)
- 댓글 및 대댓글 CRUD

<br><br>

### 🚀 가계부를 통하여 반려견에 대한 소비를 기록하고, 각 반려견 별로 지출을 관리할 수 있습니다.

<img src="./src/lib/assets/images/readme/account.gif" width="100%">

#### A. 날짜별 지출 CRUD

<br><br>

### 🚀 내 주변 동물 병원을 찾을 수 있습니다.

<img src="./src/lib/assets/images/readme/hospital.gif" width="100%"> <br><br>

<br><br>

# 그 밖에 특징

### 1. 인증 / 인가

- XSS, CSRF를 고려하여 `Refresh Token은 HttpOnly Cookie`, `Access Token은 만료시간을 짧게 하여 LocalStorage`에 저장
- OAuth 2.0(Kakao) 및 로컬 로그인

### 2. 최적화

- 이미지 용량을 줄임.
- SPA의 특성 상, 한 번에 모든 번들이 로드되어야 작동하므로 코드 스플리팅 적용하여 초기 로딩 속도 향상.
- cloudFront(CDN), S3로 재배포. `Edge Location에서 빌드 파일을 캐싱`하기 때문에 사용자는 좀더 빨리 데이터를 전달 받을 수 있다.
- 데스크탑 버전 LCP `3s => 0.7s`로 단축
<div align="center">
<img src="https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/4c45d804-c55e-4c27-a13e-cdc2c7381f33" width="60%" />
</div>

<br><br>

### 3. 랜딩페이지의 로컬 정적 이미지에 대해서 Progressive Rendering Image 적용 
- 네트워크 설정 `빠른 3g, 캐시 사용 중지`에서도 이미지가 로드 되기 전까지 빈 공간이 아닌 blur이미지를 보여줌.(사용자 경험 개선)
<br>

![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/5a32e688-57cf-44d7-af87-beefb236453a)

![progressiveImg](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/cbbcde26-7a34-4983-809c-3a74c634b42f)


