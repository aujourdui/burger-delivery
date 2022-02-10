import { FC } from "react";
import { useSelector } from "./redux/store";

const Header: FC = () => {
  const count = useSelector((state: any) => state.counter.count);
  const menus = useSelector((state: any) => state.changeCart.item);
  const sumPrice = useSelector((state: any) => state.sumPrice.price);

  // let arr = menus.map((obj) => obj[menus.price]);

  // const priceReducer = (accumulator, currentValue) =>
  //   accumulator + currentValue;
  // let i = arr.reduce(priceReducer);

  return (
    <>
      <div className="flex justify-between h-24 leading-8">
        <div className="text-3xl font-bold ml-8">
          <h1>Logo</h1>
        </div>
        <div>
          <p className="text-3xl float-right mr-8">Cart{count}</p>
          {menus.map((menu) => (
            <>
              <div key={menu.id} className="mr-4">
                <p>{menu.title}</p>
                <p className="text-xs">Price: ${menu.price}</p>
              </div>
            </>
          ))}
          <p>Total: ${sumPrice}</p>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
