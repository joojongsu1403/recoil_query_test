// recoil - api 연결

import { selector } from "recoil";
import { todoListState } from "../Atom/todoListState";

// const fetchNodeList = async (nodeTableId) => {
//   const setTodoList = useSetRecoilState(todoListState);

//   if (!nodeTableId) return;
//   const { data } = await URL.get(`/node/all/${nodeTableId}`);
//   return data;
// };

// 전역에서 부분적으로 사용 - 메인은 리액트 쿼리 연동
export const todoSetQuery = selector({
  key: "charCountState",
  get: ({ get }) => {
    // const response = await myDBQuery({
    //   userID: get(todoListState),
    // });

    // 비동기 처리로 나는 이슈 있음
    // api 사용 안할 경우 async 하지 않음
    const todoList = get(todoListState);
    // return response.name;
    return todoList;
  },
  set: ({ set }, newValue) => {
    set(todoListState, newValue);
  },
});
