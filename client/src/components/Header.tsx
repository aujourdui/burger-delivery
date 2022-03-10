import {
  FC,
  useState,
  Key,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../redux/store";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

import { editCount } from "../redux/counterSlice";
import { resetCount } from "../redux/counterSlice";
import { deleteCart } from "../redux/changeCartSlice";
import { deleteAllCart } from "../redux/changeCartSlice";
import { editPrice } from "../redux/changePriceSlice";
import { resetPrice } from "../redux/changePriceSlice";

const Header: FC = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const count = useSelector((state: any) => state.counter.count);
  const menus = useSelector((state: any) => state.changeCart.item);
  const sumPrice = useSelector((state: any) => state.changePrice.price);

  const handleClick = () => {
    setOpen(!open);
  };

  const deleteItem = (menu: {
    id: Key;
    title: boolean | ReactChild | ReactFragment | ReactPortal;
    price: boolean | ReactChild | ReactFragment | ReactPortal | any;
    quantity: boolean | ReactChild | ReactFragment | ReactPortal | any;
  }) => {
    const price = `${menu.quantity * menu.price}`;
    dispatch(deleteCart(menu));
    dispatch(editPrice(price));
    dispatch(editCount(menu.quantity));
  };

  const resetItem = () => {
    dispatch(deleteAllCart([]));
    dispatch(resetCount(0));
    dispatch(resetPrice(0));
  };

  return (
    <>
      <div className="flex justify-between h-24 leading-8 sticky top-0 z-[2]">
        <div className="text-3xl font-bold ml-8">
          <h1>
            <img src="/logo.png" alt="Logo" />
          </h1>
        </div>
        <div>
          <div className="flex flex-col">
            <button onClick={handleClick} className="text-3xl m-auto mr-8">
              <ShoppingCartIcon fontSize="large" />({count})
            </button>
            <div className={`block bg-rose-rgba ${open ? "hidden" : ""}`}>
              {menus.map(
                (menu: {
                  id: Key;
                  title: boolean | ReactChild | ReactFragment | ReactPortal;
                  price: boolean | ReactChild | ReactFragment | ReactPortal;
                  quantity: boolean | ReactChild | ReactFragment | ReactPortal;
                }) => (
                  <div key={menu.id}>
                    <div
                      className={`flex justify-center items-center pr-4 pl-2 hover:bg-rose-700${
                        open ? "hidden" : ""
                      }`}
                    >
                      <div className="mr-auto">
                        <p className="mr-2">{menu.title}</p>
                        <p className="text-xs">
                          Price: ${menu.price} x {menu.quantity}
                        </p>
                      </div>
                      <button onClick={() => deleteItem(menu)}>
                        <DeleteForeverIcon />
                      </button>
                    </div>
                  </div>
                )
              )}
              {sumPrice !== 0 && (
                <>
                  <p className="block pl-2">Total: ${sumPrice}</p>
                  <Button
                    variant="contained"
                    style={{ color: "#e0f2f1", backgroundColor: "#1a237e" }}
                    onClick={resetItem}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="contained"
                    style={{ color: "#e0f2f1", backgroundColor: "#004d40" }}
                  >
                    Checkout
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Header;
