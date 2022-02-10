import { useState, useEffect, FC } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCount } from "./redux/counterSlice";
import { addCart } from "./redux/changeCartSlice";
import { sumPrice } from "./redux/sumPriceSlice";

const Menu: FC = () => {
  const [menus, setMenus] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://jsonblob.com/api/940706479976235008").then((res) => {
      setMenus(res.data);
    });
  }, []);

  const addItem = (menu: any) => {
    window.confirm("Are you sure to add this item to cart?");
    dispatch(addCount(1));
    dispatch(addCart(menu));
    dispatch(sumPrice(menu.price));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="text-3xl font-bold ml-8 h-12">
          <h1>Our menu</h1>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="ml-8 mr-8 mt-8 hover:opacity-90 hover:cursor-pointer"
            onClick={() => addItem(menu)}
          >
            <img src={menu.image} alt="menu" />
            <p className="text-2xl">{menu.title}</p>
            <p>Price: ${menu.price}</p>
            <p>{menu.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
