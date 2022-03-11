import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/counterSlice";
import { addCart } from "../redux/changeCartSlice";
import { sumPrice } from "../redux/changePriceSlice";
import { getBurgers } from "../redux/handleBurgerSlice";
import * as api from "../api/index";

const Menu: FC = () => {
  const dispatch = useDispatch();
  const burgers = useSelector((state: any) => state.handleBurger.burgers);

  const fetchBurger = async () => {
    try {
      const { data } = await api.fetchBurgers();
      dispatch(getBurgers(data));
    } catch (error) {
      console.log(error);
    }
  };

  fetchBurger();

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
        {burgers.map((menu) => (
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
