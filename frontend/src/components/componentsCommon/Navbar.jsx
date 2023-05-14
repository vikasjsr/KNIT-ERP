import React, { useEffect } from "react";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsChatLeft } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../admin/data/avatar.jpg";
import { useStateContext } from "../../context/contextProvider";
import AxiosInstance from "../../utils/axios";
import { toast } from "react-toastify";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative p-3 text-xl rounded-full hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex w-2 h-2 rounded-full right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const navigate = useNavigate();

  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  const handleLogout = async () => {
    const resp = await AxiosInstance.get("/api/v1/logout");
    navigate("/login");
    toast(`${resp.data.message}`);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="relative flex justify-between p-1 md:ml-6 md:mr-6">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />

        <div>
          <TooltipComponent content="Profile" position="BottomCenter">
            <div
              className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
              onClick={() => {
                console.log("profile section");
              }}
            >
              <img
                className="w-8 h-8 p-1 rounded-full ring-2 ring-#03C9D7 dark:ring-gray-500"
                src={avatar}
                alt="user-profile"
              />
              <p>
                <span className="text-gray-400 text-14">Hi,</span>{" "}
                <span className="ml-1 font-bold text-gray-400 text-14">
                  Vikas
                </span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </TooltipComponent>
        </div>

        <NavButton
          title="Logout"
          customFunc={handleLogout}
          color={currentColor}
          icon={<AiOutlineLogout />}
        />
      </div>
    </div>
  );
};

export default Navbar;
