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
      <div className="flex justify-center">
        {menus.map((menu) => (
          <div key={menu.id} className="text-3xl font-bold underline ml-8 mt-4">
            <img
              // className="h-55"
              src={menu.image}
              alt="menu"
            />
          </div>
        ))}
        {/* <div className="text-3xl font-bold underline ml-8 mt-4">
          <img
            className="h-50"
            src="https://www.vmcdn.ca/f/files/via/images/pourhouse_burger_2_photochrisgiannakos.jpg;w=960"
            alt="menu"
          />
        </div>
        <div className="text-3xl font-bold underline ml-8 mt-4">
          <img
            className="h-55"
            src="https://www.vmcdn.ca/f/files/via/images/mimis-burgers.jpg;w=960"
            alt="menu"
          />
        </div>
        <div className="text-3xl font-bold underline ml-8 mt-4">
          <img
            className="h-50"
            src="https://www.vmcdn.ca/f/files/via/images/not-in-kansas-downlow-burgers-vancouver.jpg;w=960"
            alt="menu"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-3xl font-bold underline ml-8 mt-4">
          <img
            src="https://www.vmcdn.ca/f/files/via/images/pourhouse_burger_2_photochrisgiannakos.jpg;w=960"
            alt="menu"
          />
        </div>
        <div className="text-3xl font-bold underline ml-8 mt-4">
          <img
            src="https://www.vmcdn.ca/f/files/via/images/pourhouse_burger_2_photochrisgiannakos.jpg;w=960"
            alt="menu"
          />
        </div>
        <div className="text-3xl font-bold underline ml-8 mt-4">
          <img
            src="https://www.vmcdn.ca/f/files/via/images/pourhouse_burger_2_photochrisgiannakos.jpg;w=960"
            alt="menu"
          />
        </div> */}
      </div>
    </>
  );
};

export default Menu;
