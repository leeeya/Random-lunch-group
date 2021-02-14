# 📰 Make Lunch Group!
이름을 등록하면 랜덤으로 점심 그룹을 만들어주는 서비스입니다.

![Findicle](/readme-assets/findicle_thumbnail.gif);

## Table of contents
1. [Feature](#feature)
2. [How to use](#how-to-use)
3. [How to run](#how-to-run)
4. [Tech Stack](#tech-stack)
5. [Difficulties](#Difficulties)
6. [Difficulties](#Difficulties)

---

## 📌 Feature
1. 점심을 함께 할 사람의 이름을 추가하거나 삭제할 수 있고 이름 카드 리스트를 확인 할 수 있습니다.
2. 최소 그룹 인원 수와 원하는 그룹 수를 입력하면 랜덤으로 점심 그룹을 만들어줍니다.
3. 다시하기 버튼을 클릭해서 그룹을 재생성 할 수 있습니다.

## 🎯 How to use
1. **이름 추가/삭제**
  - 왼쪽 사이드 폼에서 이름을 입력하여 이름 카드를 생성 할 수 있습니다.
  - 중복된 이름으로는 이름 카드를 생성 할 수 없습니다.
  - 생성된 이름 카드 하단에 있는 `delete` 버튼을 클릭하여 이름 카드를 삭제 할 수 있습니다.

2. **그룹의 최소 인원 수와 그룹 수 입력**
  - 중앙에 있는 폼에서 최소 인원 수와 그룹 수를 입력 할 수 있습니다.
  - 입력 값이 1부터 10까지의 수가 아니거나 문자를 입력하면 안내 문구가 보입니다.
  - 그룹 리스트를 생성 할 수 없는 값을 입력하면 알림 메세지가 보입니다.
  - `Make Group!` 버튼을 클릭하면 결과 페이지로 이동 후 생성된 그룹 리스트를 볼 수 있습니다.

3. **그룹 리스트 확인과 그룹 재생성**
  - 결과 페이지에서 점심 그룹 리스트를 확인 할 수 있습니다.
  - `Again!` 버튼을 클릭하면 랜덤 그룹이 재생성됩니다.
  - `Go Back` 버튼을 클릭하면 이전 페이지로 이동 할 수 있습니다.
  - 앞으로 가기 버튼을 클릭하면 결과가 그대로 남아있습니다.

## 🏃‍♀️ How to run
- **Installation**

  - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)에서 MongoDB URL 발급 후 env 파일에 입력

  ```
  npm install

  npm start
  npm run start:server
  ```
1. 환경 변수를 .env.sample에 맞게 입력합니다.
2. npm install을 통해 패키지를 설치합니다.
3. 터미널에서 **npm start**와 **npm run start:server** 로 실행할 수을 확인할 수 있습니다. (Default Server: [http://localhost:3000](http://localhost:3000))

## 💻 Tech Stack
- **Frontend**
   - TypeScript
   - React
   - React-router-dom
   - Redux (Reduxjs/toolkit)
   - Redux-thunk
   - Styled-components
   - Eslint
   - React-Testing-Library
- **Frontend**
   - NodeJs
   - Express
   - MongoDB
   - Mongoose

## 📐 Design Pattern
- **Flux Pattern**
   - 단반향 데이터 컴포넌

- **Atomic Design**
   - 컴포넌트를 기능 별로 더 세분화..
    컨테이너를 없애볼까 훅을 이용해서
`
## 😅 Difficulties
### 디스패치와 리액트의 사이클 문제해결
최상단에 있는 APP 페이지에서 랜덤 그룹리스트를 만드는 유틸 함수에 폼에서 입력 받은 최소 인원수와 그룹 수를 스토어에서 가져와 인자로 넘겨 주어 실행시키는 핸들러를 `<GroupingForm />`와 `<ResultPage />`의 `onClick`에 넘겨주었습니다. 그룹 리스트를 최초 생성 할 때와 재생성할 때 같은 핸들러를 사용하게끔해서 중복 핸들러를 제거했습니다. 하지만 최초 생성 버튼 핸들러로 `onClick`을 실행하고 `/result`페이지로 라우팅되었지만 랜덤 그룹 리스트가 랜더링되지 않는 문제가 있었습니다. 혹시 `useHistory`를 이용한 라우팅이 먼저되서 빈 페이지가 보여지는 것인지, 폼에서 입력 받은 값이 디스패치가 되지 않는건지, 여러가지 랜더링 문제를 염두해서 디버깅을 한 결과, 입력 받은 값을 디스패치한 다음에 라우팅 함수가 실행되지 않고 라우팅이 된 후 디스패치 함수가 실행이되는 문제를 발견 할 수 이었습니다.
분명 동기적으로 작성된 코드가 동기적으로 작동하지 않아 서치를 한 결과 디스패치 사이클과 리액트 랜더링 사이클이 분리되어 적용이 되기 때문에 동기적으로 함수가 실행되어도 내부적으로 사이클이 어긋나서 핸들러가 실행되었을 때 인자로 넘겨준 입력 값은 디스패치 되기 전인 초기 값인 0이었기 때문에 그룹리스트가 생성되지 않아 빈페이지가 보여진 것임을 알게되었습니다. 해결 방법으로 스토어 사용을 하지 않고 상단 컴포넌트에서 `setState`를 내려주어 컴포넌트 내부 상태 값을 사용할지 고민을 하다가 전역적으로 사용되는 상태 값이라고 판단을 해서 다른 방법으로 폼의 입력 값을 제출 버튼을 클릭할 때가 아닌 `onChange` 핸들러에서 디스패치가 되게끔 로직을 변경 함으로써 제출 버튼을 눌렀을 때는 이미 스토어에 입력 받은 값이 저장되어있기 때문에 결과 페이지에 그룹 리스트가 정상적으로 랜더링이 되었습니다.

### 랜더링 최적화 - React.memo와 useSelector Hook
`<GroupingForm />`의 `onChange` 함수가 실행 될 때마다 디스패치가 실행이 되어 상태가 변하면서 `<AsideBoard />`와 `<NameList />`컴포넌트가 불필요한 랜더링이 되었습니다. 이유는 `useSelector` Hook을 이용해 `people` state를 바라보고 있기 때문에 상위 컴포넌트에서 state가 변화하면 이를 감지하기 때문이었습니다. 그래서 최적화의 필요성을 느꼈고 `React.memo`를 이용해서 컴포넌트를 감싸주었습니다. 하지만 `React.memo`도 결국 캐싱을 하여 메모리 공간을 사용하는 것이기 때문에 완벽하게 최적화가 되었다고 볼수 없어서 실제로 성능을 테스트 해보지 않는 이상 `React.memo`를 사용하는 것이 옳바른 최적화 방법인지에 대해서는 조금 더 고민해야할 부분이라고 생각합니다. 그리고 서치를 통해 `useSelector` Hook으로 상태를 조회할 때 state를 더 세밀하게 분해해서 `useSelector` Hook을 여러개 사용함으로서 state 변화 감지를 최소화 시킬 수 있다는 점을 알게되었습니다.

### 랜덤 알고리즘과 Map 자료구조
`getRandomGroupList` 함수는 인자로 넘긴 최소값과 최댓값 사이에서 랜덤숫자를 만들어주는 `getRandomInt`와  최소인원수를 고려해서 그룹의 멤버를`getNumberOfperGroupList`

## 🏹 New Challenge
- **Typescript**
타입스크립트를 처음 사용하면서 Redux-Thunk와 Redux-Toolkit 외 여러 라이브러리의 보일러 플레이트 설정과 컴포넌트를 만들 때마다  `interface를` 만들고 `Type을` 지정 해주어야히는 번거로움 때문에 초기 설정에 시간이 꽤 소요 되었습니다. 하지만 `Type`을 지정함으로써 컴파일 단계에서 에러를 잡아주기 때문에 타입스크립트를 사용하기 전 런 타임 때 props과 state로 인한 오류로 새로고침을 하고 디버깅을 하면서 낭비 했던 물리적인 시간을 줄일 수 있었습니다. 짧은 시간내에 적용하다보니 돔의 확장성을 고려하지 못한 커스텀 인터페이스와 로컬스테이트의 타입 미지정 등 더 상세하게 타입을 설정하지 못한점등이 아쉬웠습니다.

- **Redux-Thunk**
이번 과제를 통해 Redux-Thunk를 처음 사용하면서 가장 좋았던 점은 컴포넌트에서 비동기요청 로직을 분리함으로서 컴포넌트가 Thunk 함수내에서 처리함으로서 dispatch만으로 컴포넌트에서 비즈니스 로직을 분리함으로서 굉장히 간편하고 slice
rhkstlatk qnsfl 비동기작업을 신경

## 💡 느낀점
새로운 도전


채ㄹ린저스
1.알고리즘 map구조사용
2.useSeletor 최적화 하는 방법
3.dispatch와 랜더 라이플 사이클 어긋

8. useSeletor로 최적화 하는 방법
프리젠테이션 컴포넌트에는 React.memo 사용해서

디스패치 큐에저장..?
미모
Type 'IterableIterator<number>' is not an array type or a string type. Use compiler option '--downlevelIteration' to allow iterating of iterators.
 -> 에러발생해서     "downlevelIteration": true, 설정해줘서 해결

 Object 순서를 보장해주지 않아서 Map 자료구조를 사용하였다.

 const 변수 바인딩을 변경 불가능하게 만들지 만 그 값은 여전히 ​​수정할 수 있습니다.

 Object.freeze() 개체에 대한 값 수정을 무시하지만 바인딩에는 제한이 없습니다.
상태공유의 필요성
React.memo 사용 local
