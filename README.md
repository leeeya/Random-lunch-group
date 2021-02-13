# 📰 Findicle
Findicle은 사용자가 검색어를 입력하면 관련된 기사 리스트를 보여주는 서비스입니다.
![Findicle](/readme-assets/findicle_thumbnail.gif)

## Table of contents
1. [Feature](#feature)
2. [How to use](#how-to-use)
3. [How to run](#how-to-run)
4. [Tech Stack](#tech-stack)
5. [Difficulties](#Difficulties)

---

## 📌 Feature
1. 검색어를 입력하면 관련된 기사 리스트를 볼 수 있습니다.
2. 기사를 클릭하면 새로운 탭에서 해당 기사를 확인할 수 있습니다.
3. 기사를 북마크하면 내용을 자유롭게 수정할 수 있습니다.

## 🎯 How to use
1. **로그인**
  - 상단의 [로그인] 버튼을 누르면 로그인 창을 확인할 수 있습니다.
  - 아이디 또는 비밀번호가 틀린 경우, 하단에서 메세지를 확인할 수 있습니다.
  - 로그인 전에는 기사 검색만 가능하며, 로그인 후에는 북마크가 가능합니다.

2. **기사 검색**
  - 검색창에 검색어를 입력하면 관련된 기사 리스트가 뜹니다.
  - 기본적으로 최신 발행순으로 정렬되어 있으며, [Source]를 선택하면 언론사 기준으로 정렬됩니다.
  - 스크롤을 내리면 관련된 추가 기사 리스트를 볼 수 있습니다.
  - 기사를 클릭하면 출처 사이트에서 기사를 자세하게 확인할 수 있습니다.

3. **북마크**
  - 기사 위에 마우스를 올리면 북마크를 추가할 수 있는 [+]이 노출됩니다.
  - 추가 후에 다시 마우스를 올리면 [-] 버튼을 확인할 수 있고, 북마크에서 제거 가능합니다.
  - 북마크에 추가하면 상단 [Bookmark] 버튼을 통해, 북마크한 기사를 모아서 볼 수 있습니다.
  - 북마크된 기사의 내용은 자유롭게 수정할 수 있고, 언제든지 다시 확인할 수 있습니다.

## 🏃‍♀️ How to run
- **Installation**
Local 환경에서 실행하기 위해서는 아래 내용을 먼저 확인해주세요.
<!-- env file sample -->
  - [Google Firebase Realtime Database](https://firebase.google.com/): Firebase SDK 발급 후 env 파일에 입력

```
npm install
npm start
```
1. 환경 변수를 .env.sample에 맞게 입력합니다.
2. npm install을 통해 패키지를 설치합니다.
3. 터미널에서 npm start로 실행하면 Findacle을 확인할 수 있습니다. (Default Server: [http://localhost:3000](http://localhost:3000))

## 💻 Tech Stack
- **Frontend**
    - TypeScript
    - React
    - React-router-dom
    - Redux (Reduxjs/toolkit)
    - Redux-thunk
    - Styled-components
    - eslint

## 🤔 Difficulties
- TypeScript를 실제 프로젝트에 처음 적용해봐서, 설정부터 타입을 지정하는 것까지 생각보다 어려움이 많았습니다. 특히, React Component부터 Redux의 Reducer, Saga까지 적용하다보니 더욱 어렵게 느껴졌습니다. 하지만 초기 셋팅 후 어느정도 적응하고 나서는 컴파일 단계에서 미리 오류를 잡아주니 디버깅 시간이 많이 단축되었고, 무엇보다 일관성 있는 데이터의 중요성에 대해서도 재차 느낄 수 있었습니다. 다만, 아직 기본 단계에 있어서 코드의 재사용성을 높일 수 있는 generics를 활용하지 못하거나 효율적인 interface를 생성하지 못한 부분은 아쉬움이 많이 남습니다. TypeScript를 더 효율적으로 사용할 수 있게 앞으로도 계속 노력하겠습니다.
- 보통 이전 프로젝트에서는 대부분의 데이터를 Redux에서 관리하는 방식으로 진행했습니다. 통합적으로 관리할 수 있다는 이점이 있지만, 한편으로는 Redux가 너무 많은 역할을 가지게 되어 무거워지는 단점도 있었습니다. 이번 과제는 뉴스를 검색하는 것은 그때그때 계속해서 바뀌는 데이터라서 Redux에 넣지 않고 Component 내에서 관리했고, 북마크는 즉시적인 추가와 firebase에서 기존에 저장된 데이터를 모두 가져와야 해서 Redux로 저장해서 사용했습니다. 이렇게 데이터의 흐름이 2개가 되다보니, 모두 Redux에 넣을지, 아니면 모두 Component 단에서 관리하는게 나을지 여러 차례 구조를 변경했습니다. 결국 처음 생각했던대로 진행했는데, 데이터 구조에 대한 고민을 더 많이 해보고자 합니다.

1. 처음했던 고민은 flux 패턴?
2. atomic 디자인패턴
3. 타입스크립트적용
4. thunk사용
5. 툴킷사용
6. container를 없앴다
7. 디스패치 동기? 비동기?

디자인패턴
1. flux패턴
2. atomic 디자인
새로운 도전

1. thunk사용
2. Typescript

채린저스
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
