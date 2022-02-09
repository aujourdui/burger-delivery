import { useState, useEffect, FC } from "react";
import axios from "axios";

// http://jsonblob.com/api/940706479976235008

const Menu: FC = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios.get("http://jsonblob.com/api/940706479976235008").then((res) => {
      setMenus(res.data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="text-3xl font-bold underline ml-8 h-12">
          <h1>Our menu</h1>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 ">
        {menus.map((menu) => (
          <div key={menu.id} className="text-3xl font-bold underline ml-8 mt-4">
            <img src={menu.image} alt="menu" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
