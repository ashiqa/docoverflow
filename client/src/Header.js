import Logo from "./logo1.png";
import {
  BadgeCheckIcon,
  BellIcon,
  ChartSquareBarIcon,
  ChevronDownIcon,
  LoginIcon,
  LogoutIcon,
  PlusIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline";
import Avatar from "./avatar.png";
import ClickOutHandler from 'react-clickout-handler';
import Button from "./Button";
import {useState,useContext} from 'react';
import AuthModalContext from "./AuthModalContext";
import UserContext from "./UserContext";
import {Link} from "react-router-dom";

function Header() {
  const [userDropdownVisibilityClass,setUserDropdownVisibilityClass] = useState('hidden');
  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === 'hidden') {
      setUserDropdownVisibilityClass('block');
    } else {
      setUserDropdownVisibilityClass('hidden');
    }
  }
  function handleClick(){
    window.open("http://127.0.0.1:5000/", "_blank")
    
  }
  function verify(){
    window.open("https://forms.gle/argKrjHPCMmMeNme8", "_blank")
  }
  const authModal = useContext(AuthModalContext);
  const user = useContext(UserContext);
  return (
    <header className="w-full bg-docflow_dark p-2">
      <div className="mx-4 flex relative">

        {/* Clicking on the logo redirects to the home page */}
        <Link to="/">
          <img src={Logo} alt="" className="w-8 h-8 m-4" style={{filter:'invert(100%)'}}/>
        </Link>

        {/* Search field */}
        <form action="" className="bg-docflow_dark-brighter px-3 flex rounded-md border border-docflow_border m-3 flex-grow">
          <SearchIcon className="text-gray-300 h-6 w-6 mt-1" />
          <input type="text" className="bg-docflow_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search" />
        </form>

        {/* In case a user is logged in, these 3 icons also can be seen on the NavBar */}
        {user.username && (
          <>
            <button className="rounded-md bg-docflow_blue px-1 py-1" onClick={verify}>
              <BadgeCheckIcon className="text-black w-6 h-6 mr-2 ml-8 " />
              Doc verified?
            </button>
            <button className="px-2 py-1" onClick={handleClick}>
              <ChartSquareBarIcon className="text-gray-400 w-6 h-6 mx-2" />
            </button>
            <button className="px-2 py-1">
              <BellIcon className="text-gray-400 w-6 h-6 mx-2" />
            </button>
            <button className="px-2 py-1">
              <PlusIcon className="text-gray-400 w-6 h-6 mx-2" />
            </button>
          </>
        )}

        {/* If user is not logged in, show the login and register buttons */}
        {!user.username && (
          <div className="mx-2 hidden sm:block">
            <Button outline={1} className="m-1 mt-3 h-8" onClick={() => authModal.setShow('login')}>Log In</Button>
            <Button className="h-8 mt-3" onClick={() => authModal.setShow('register')}>Sign Up</Button>
          </div>
        )}

        <ClickOutHandler onClickOut={() => setUserDropdownVisibilityClass('hidden')}>
          <button className="rounded-md flex m-4 border border-gray-700" onClick={() => toggleUserDropdown()}>
            {/* User Icons shown for user when logged out and logged in */}
            {!user.username && (
              <UserIcon className="w-6 h-6 text-gray-400 m-1" />
            )}
            {user.username && (
              <div className="bg-gray-600 rounded-md w-8 h-8">
                <img src={Avatar} alt="" style={{filter:'invert(100%)'}} className="block" />
              </div>
            )}

            <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 m-1" />
          </button>

          {/* Dropdown menu options depending on user logged in or logged out */}
          <div className={"absolute right-0 top-8 bg-docflow_dark border border-gray-700 z-10 rounded-md text-docflow_text overflow-hidden "+userDropdownVisibilityClass}>
            
            {/*If user logged in, welcome and give option to log out */}
            {user.username && (
              <span className="block w-50 py-2 px-3 text-sm">
                Hello, {user.username}!
              </span>
            )}
            
            {user.username && (
              <button
                onClick={() => user.logout()}
                className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
                <LogoutIcon className="w-5 h-5 mr-2" />
                Logout
              </button>
            )}
            
            {/* If user is logged out, give option to log in / sign up */}
            {!user.username && (
              <button
                onClick={() => authModal.setShow('login')}
                className="block flex w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm">
                <LoginIcon className="w-5 h-5 mr-2" />
                Log In / Sign Up
              </button>
            )}
            
          </div>
        </ClickOutHandler>
      </div>
    </header>
  );
}

export default Header;