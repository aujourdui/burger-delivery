import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state: any) => state.counter.count);
  return (
    <div className="App">
      <h1>Count: {count}</h1>
    </div>
  );
};

export default App;
