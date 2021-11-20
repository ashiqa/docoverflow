import './style.css' ;
import Logo from './logo.jpeg';
import Avatar from './avatar.png';
import {SearchIcon ,BellIcon , PlusIcon, QrcodeIcon, OfficeBuildingIcon} from '@heroicons/react/outline' ;
function Header(){
    return(
    <header className="flex w-full bg-reddit_dark p-2">
      <div className="mx-4 flex relative">
      <img src={Logo} alt="logo" className="w-10 h-10 mx-4 mr-10"></img>
      </div>
      <form action="" className="bg-blue-800 px-3 flex rounded-md border border-reddit_border mx-4 p-2 flex-grow">
        <SearchIcon className="text-white h-7 w-7" />
        <input type="text" className="flex bg-white-100 rounded-md text-sm p-1 pl-2 pr-0 block focus:outline-none flex-grow"  placeholder="Search"/>
      </form>
      <button className="px-2 py-1">
      <BellIcon className="text-white w-6 h-6 mx-2 ml-10" />
      </button>
      <button className="px-2 py-1">
      <QrcodeIcon className="text-white w-6 h-6 mx-2" />
      </button>
      <button className="px-2 py-1">
      <OfficeBuildingIcon className="text-white w-6 h-6 mx-2" />
      </button>
      <button className="px-2 py-1">
      <PlusIcon className="text-white w-6 h-6 mx-2" />
      </button>
      
      <button className="bg-blue-600 rounded-md flex">
        <img src={Avatar} alt="avatar" className="block w-10 h-10 mx-4"></img>
       
      </button>

    </header>
    );
    }
export default Header ;