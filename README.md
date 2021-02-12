# Lunch

Let's randomly divide people for lunch time.

## Requirements

### Tasks
  - Show current people
  - ADD/DELETE a person to people
      - A person has only one property: name
      - Prevent adding an existing name
  - MAKE random groups with options
      - Options (Please implement options together, not separately)
          - The Number of groups
          - Minimum member size (of a group)
      - Show error if you can't make groups
  - Example
      - 6people
      - Minimum member size : 2, The number of groups: 2
      - Group cases : (2, 4), (3, 3), (4, 2)
      - members must be randomly assigned to each groups.

### Implementations
  - Don't need to use bootstrap@4.0.0. You can downgrade it or use other framework or use vanilla
  - Use state management library (e.g redux, mobx... etc) at Front-end.
  - Use fetch API at Front-end.
  - Add some APIs to express in the starter kit.
  - For persistence, you can use,
    - raw-DB access
    - ORM or other helpers
    - design patterns for abstracting away DB (repository pattern / etc)
  - Use of `ESLint` in your editor recommended.


1. 처음했던 고민은 flux 패턴?
2. atomic 디자인패턴
3. 타입스크립트적용
4. thunk사용
5. 툴킷사용
6. container를 없앴다

Type 'IterableIterator<number>' is not an array type or a string type. Use compiler option '--downlevelIteration' to allow iterating of iterators.
 -> 에러발생해서     "downlevelIteration": true, 설정해줘서 해결

 Object 순서를 보장해주지 않아서 Map 자료구조를 사용하였다.

 const 변수 바인딩을 변경 불가능하게 만들지 만 그 값은 여전히 ​​수정할 수 있습니다.

 Object.freeze() 개체에 대한 값 수정을 무시하지만 바인딩에는 제한이 없습니다.
