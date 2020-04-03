# tsStudy
### 타입스크립트
```
자바스크립트의 약한 타입 언어에 단점을 가진 언어를 강한 타입 시스템을 적용한 언어. 높은 가독성과 코드 품질을 제공할 수 있다.
확장자 .ts를 가지고 있으며 vsCode를 사용하면 쉽게 사용 할 수 있다. (타입스크립트 지원 기능이 있기 때문에)
일반적으로 타입스크립트를 전역설치 하여 컴파일하면 된다.
npm install -g typescript
tsc --version
tsc ./src/main.ts

Parcel (localhost:1234)
타입스크립트를 로컬 환경에서 간단하고 빠르게 테스트하고 싶은 경우 사용하는 번들러이다.
mkdir typescript-test
cd typescript-test
npm init -y
npm install typescript
npm install --save-dev parcel-bundler

그리고 나서 tsconfig.json 파일을 생성하여 원하는 옵션을 추가 한 뒤
main.ts를 만들어 원하는 타입스크립트 코드를 입력한다.
```
