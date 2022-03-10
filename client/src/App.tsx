import { FC } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Menu from "./components/Menu";

const App: FC = () => {
  return (
    <>
      <Header />
      <Title />
      <Menu />
    </>
  );
};

export default App;
