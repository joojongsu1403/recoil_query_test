// query api 연결

import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTest } from "../../api/TestAPi";

export function OtherViewModule() {
  const { data, error, isFetching } = useQuery(["todos"], () => getTest(), {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {},
    onError: (data) => {},
  });

  return {
    item: {
      data,
      error,
      isFetching,
    },
  };
}

export function OtherViewModule2(id) {
  const {
    data: todoList,
    error,
    isFetching,
  } = useQuery(["todos2", { id }], () => getTest(), {
    onSuccess: (data) => {},
    onError: (data) => {},
    enabled: !!id,
  });

  return {
    todoList,
    error,
    isFetching,
  };
}

export function OtherViewModule3() {
  const item = useQuery(["todos3"], () => getTest(), {
    onSuccess: (data) => {},
    onError: (data) => {},
  });

  return item;
}

export function OtherViewModule4() {
  const queryClient = useQueryClient();

  const item = useMutation(() => getTest(), {
    onMutate: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("todos"); // 위의 쿼리 함수 중 키값에 해당것 실행
      queryClient.setQueryData(["todos2", { id: 5 }], data); // 위의 쿼리 함수 중 해당 함수의 파라미터 변경
    },
  });

  return item;
}
