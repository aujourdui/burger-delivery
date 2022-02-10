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
          <div className="flex flex-col">
            <p className="text-3xl m-auto mr-8">Cart{count}</p>
            {menus.map((menu) => (
              <>
                <div className="flex justify-center items-center mr-4">
                  <div key={menu.id} className="mr-auto">
                    <p className="mr-2">{menu.title}</p>
                    <p className="text-xs">Price: ${menu.price}</p>
                  </div>
                  <div>D</div>
                </div>
              </>
            ))}
            <p>Total: ${sumPrice}</p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
