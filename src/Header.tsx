import { FC } from "react";
import { useSelector } from "./redux/store";

const Header: FC = () => {
  const count = useSelector((state: any) => state.counter.count);

  return (
    <div className="flex justify-between h-24 leading-8">
      <div className="text-3xl font-bold ml-8">
        <h1>Logo</h1>
      </div>
      <div className="text-3xl font-bold mr-8">
        <h1>Cart{count}</h1>
      </div>
    </div>
  );
};

export default Header;
