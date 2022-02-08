import { FC } from "react";
import Header from "./Header";
import Title from "./Title";
import Menu from "./Menu";
// import { useSelector } from "./redux/store";
// import { useDispatch } from "react-redux";
// import { additional, subtraction } from "./redux/counterSlice";

const App: FC = () => {
  // const count = useSelector((state: any) => state.counter.count);
  // const dispatch = useDispatch();
  return (
    <>
      <Header />
      <Title />
      <Menu />
      {/* <h1>Count: {count}</h1>
      <button onClick={() => dispatch(additional(1))}>UP</button>
      <button onClick={() => dispatch(subtraction(1))}>DOWN</button> */}
    </>
  );
};

export default App;
