import {
  FC,
  useState,
  Key,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "./redux/store";

import { editCount } from "./redux/counterSlice";
import { deleteCart } from "./redux/changeCartSlice";
import { editPrice } from "./redux/sumPriceSlice";

const Header: FC = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const count = useSelector((state: any) => state.counter.count);
  const menus = useSelector((state: any) => state.changeCart.item);
  const sumPrice = useSelector((state: any) => state.sumPrice.price);

  const handleClick = () => {
    setOpen(!open);
  };

  const deleteItem = (menu: {
    id: Key;
    title: boolean | ReactChild | ReactFragment | ReactPortal;
    price: boolean | ReactChild | ReactFragment | ReactPortal;
  }) => {
    dispatch(deleteCart(menu));
    dispatch(editPrice(menu.price));
    dispatch(editCount(1));
  };

  return (
    <>
      <div className="flex justify-between h-24 leading-8">
        <div className="text-3xl font-bold ml-8">
          <h1>Logo</h1>
        </div>
        <div>
          <div className="flex flex-col">
            <button onClick={handleClick} className="text-3xl m-auto mr-8">
              Cart{count}
            </button>
            <div className={`block bg-rose-900 pl-2 ${open ? "hidden" : ""}`}>
              {menus.map(
                (menu: {
                  id: Key;
                  title: boolean | ReactChild | ReactFragment | ReactPortal;
                  price: boolean | ReactChild | ReactFragment | ReactPortal;
                }) => (
                  <div key={menu.id}>
                    <div
                      className={`flex justify-center items-center mr-4${
                        open ? "hidden" : ""
                      }`}
                    >
                      <div className="mr-auto">
                        <p className="mr-2">{menu.title}</p>
                        <p className="text-xs">Price: ${menu.price}</p>
                      </div>
                      <button onClick={() => deleteItem(menu)}>D</button>
                    </div>
                  </div>
                )
              )}
              <p>Total: ${sumPrice}</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
