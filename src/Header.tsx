import { FC } from "react";
import { useSelector } from "./redux/store";

const Header: FC = () => {
  const count = useSelector((state: any) => state.counter.count);
  const menus = useSelector((state: any) => state.changeCart.item);

  return (
    <div className="flex justify-between h-24 leading-8">
      <div className="text-3xl font-bold ml-8">
        <h1>Logo</h1>
      </div>
      <div>
        <p className="text-3xl">Cart{count}</p>
        {menus.map((menu) => (
          <p>{menu}</p>
        ))}
      </div>
    </div>
  );
};

export default Header;
