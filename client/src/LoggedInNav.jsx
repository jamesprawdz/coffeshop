import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoggedInNav = ({
  setIsAuthenticated,
  cart,
  searchTerm,
  handleChange,
  currentUser,
}) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setIsAuthenticated(false);
        navigate("/");
      }
    });
  };

  const cartItemCount = Array.isArray(cart)
    ? cart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0)
    : 0;

  return (
    <section className="bg-blueGray-100">
      <div className="px-6 md:px-12 py-6 bg-white rounded-b-lg">
        <nav className="flex justify-between">
          <div className="flex w-full items-center">
            <a href="#">
              <img
                onClick={() => navigate("/")}
                className="h-12"
                src="https://static.shuffle.dev/uploads/files/38/386a61c1d26eee345791659a05e5a92b90cec72e/Screenshot-2023-03-17-at-4-52-59-PM.png"
                alt=""
              />
            </a>
            <ul className="hidden xl:flex px-4 ml-20 2xl:ml-40 mr-auto">
              <li className="mr-16">
                <a className="font-medium hover:text-darkBlueGray-400" href="#">
                  Stories
                </a>
              </li>
              <li className="relative mr-16">
                <a
                  className="flex items-center font-medium hover:text-darkBlueGray-400"
                  href="#"
                >
                  <span className="mr-4" onClick={() => navigate("/shop")}>
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="font-medium hover:text-darkBlueGray-400"
                  href="#"
                  onClick={() => navigate("/")}
                >
                  About Us
                </a>
              </li>
            </ul>
            <div className="relative hidden xl:block">
              <input
                className="rounded-4xl py-3 pl-5 pr-5 text-gray-300 font-heading font-medium text-base bg-blue-50 border-2 border-blueGray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none"
                style={{ width: "180px" }}
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search for products..."
              />
            </div>
            <div className="hidden md:block flex-shrink-0 w-px h-12 bg-gray-100 ml-12 mr-12"></div>
            <div className="hidden xl:flex items-center">
              <a
                className="relative inline-block text-gray-400 hover:text-gray-500"
                href="#"
              >
                <div className="absolute bottom-0 right-0 flex items-center justify-center -mb-4 -mr-4 w-6 h-6 text-sm text-white bg-blue-500 rounded-full">
                  {cartItemCount > 0 && <span>({cartItemCount})</span>}
                </div>
                <svg
                  onClick={() => navigate("/cart")}
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1159 8.72414H2.50427C1.99709 8.72414 1.58594 9.12657 1.58594 9.62299V21.308C1.58594 21.8045 1.99709 22.2069 2.50427 22.2069H18.1159C18.6231 22.2069 19.0342 21.8045 19.0342 21.308V9.62299C19.0342 9.12657 18.6231 8.72414 18.1159 8.72414Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.34473 6.34483V4.9569C6.34473 3.85259 6.76252 2.79352 7.5062 2.01265C8.24988 1.23179 9.25852 0.793106 10.3102 0.793106C11.362 0.793106 12.3706 1.23179 13.1143 2.01265C13.858 2.79352 14.2758 3.85259 14.2758 4.9569V6.34483"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <div className="flex-shrink-0 w-px h-12 bg-gray-100 ml-9 mr-10"></div>
              <a
                className="flex items-center text-darkBlueGray-400 hover:text-darkBlueGray-500"
                href="#"
              >
                <span
                  className="font-medium"
                  onClick={() => navigate("/account")}
                >
                  {currentUser.username}
                </span>

                <svg
                  onClick={handleLogOut}
                  className="ml-4"
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default LoggedInNav;
