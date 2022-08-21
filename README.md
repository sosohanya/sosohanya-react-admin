# 추가 설치 
## [prettier]

### 설치
`npm i prettier --save-dev`

## Router 설치
`npm i react-router-dom`


### 코딩 스타일 지정
`.prettierrc.js` : 해당 파일 없을 경우 default 값으로 지정, 별도 지정하려면 해당 파일에 지정

### 설정
Settings > Languages & Frameworks > JavaScript > Prettier : [체크] On save

## 폴더 구조
- /assets : css, image, font 등 리소스 모음  
- /commons : 컴포넌트가 아닌 순수 자바스크립트 공통 함수들 모음
- /components : Top / Lnb / 페이징 등 전반적인 페이지에서 공통으로 쓰는 컴포넌트 모음
- /layouts : 감싸는 영역 부분
- /pages : Contents 부분에 보여질 컴포넌트 모음, route로 이동하도록 할 예정 