import logo from "./logo.svg";
import "./App.css";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import TodoController from "./controller/Todo/TodoController";

function App() {
  return (
    <div className="App">
      <TodoController />
    </div>
  );
}

export default App;
