import React, { useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import TodoListComponent from "../../components/ViewComponents/Todo/TodoListComponent";
import {
  OtherViewModule,
  OtherViewModule2,
} from "../../modules/OtherViewModule/OtherViewModule";
import { todoListState } from "../../modules/Atom/todoListState";
import { todoSetQuery } from "./../../modules/Todo/TodoViewModule";

import { useQuery, useQueryClient } from "react-query";
import { getTest } from "../../api/TestAPi";

function TodoController() {
  // recoil - 단순히 데이터를 가지고 오는 애
  const todoList = useRecoilValue(todoSetQuery);

  // query - 외부에서 쿼리 함수를 세팅후 가져오는 방식
  const { item } = OtherViewModule();

  // console.log(item.isFetching);
  // console.log(testData.data);

  // recoil - 해당 기능에 대한 사용 함수를 묶어 두는?
  function useTodoList() {
    const [setTodoList, setSetTodoList] = useRecoilState(todoSetQuery);

    const addItem = (inputValue) => {
      setSetTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
    };

    return {
      addItem,
    };
  }

  const todoFn = useTodoList();

  return (
    <>
      <TodoListComponent
        setTodoList={todoList}
        addItem={todoFn.addItem}
        todoSetQuery={todoSetQuery}
      />
    </>
  );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

export default TodoController;
