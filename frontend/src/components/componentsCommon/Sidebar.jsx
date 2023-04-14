import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import {FaTools} from 'react-icons/fa'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../../context/contextProvider';

const Sidebar = ( {links} ) => {

  const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


  return (
    <div className="h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (<>
        
        <div className="flex items-center justify-between">
            <Link to="/" onClick={handleCloseSideBar} className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <FaTools /> <span>ERP</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
                className="block p-3 mt-4 text-xl rounded-full hover:bg-light-gray md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className='mt-10'>
            {
                links.map((items) => (
                  <div key={items.title}>
                    <p className="m-3 mt-4 text-gray-400 uppercase dark:text-gray-400">
                      {items.title}
                    </p>
                    {items.links.map((Link) => (
                      <NavLink
                      to={`./${Link.path}`}
                      key={Link.name}
                      onClick={handleCloseSideBar}
                      style={( {isActive} )=> ({
                        backgroundColor : isActive ?
                         currentColor : ''
                      })}
                      //isActive ==> A function to add extra logic for determining whether the link is active. This should be used if you want to do more than verify that the link’s pathname matches the current URL’s pathname.
                      className={({isActive }) => isActive = false ? activeLink : normalLink}
                      >
                        {Link.icon}
                        <span className='capitalize'>
                        {Link.name}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                ))
            }
          </div>

      </>)}
    </div>
  )
}

export default Sidebar
