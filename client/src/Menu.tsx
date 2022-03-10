import { useState, useEffect, FC } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addCount } from "./redux/counterSlice";
import { addCart } from "./redux/changeCartSlice";
import { sumPrice } from "./redux/changePriceSlice";

const Menu: FC = () => {
  const [menus, setMenus] = useState([]);
  const dispatch = useDispatch();

  // .get("https://jsonblob.com/api/940706479976235008")

  useEffect(() => {
    axios
      .get("/burgers/")
      .then((res) => {
        setMenus(res.data);
      })
      .catch((err) => {
        console.error(new Error(err));
      });
  }, []);

  const addItem = (menu: any) => {
    if (window.confirm("Are you sure to add this item to cart?") === true) {
      dispatch(addCount(1));
      dispatch(sumPrice(menu.price));
      dispatch(addCart(menu));
    } else return null;
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="text-3xl font-bold ml-8 h-12">
          <h1>Our menu</h1>
        </div>
      </div>
      <div
        className="
      flex flex-col items-center
      md:grid gap-4 md:grid-cols-2 md:grid-rows-3
      lg:grid gap-4 lg:grid-cols-3 lg:grid-rows-2"
      >
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="m-8 hover:opacity-90 hover:cursor-pointer"
            onClick={() => addItem(menu)}
          >
            <div>
              <img src={menu.image} width="400" height="400" alt="menu" />
            </div>
            <div>
              <p className="text-2xl">{menu.title}</p>
              <p>Price: ${menu.price}</p>
              <p>{menu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
