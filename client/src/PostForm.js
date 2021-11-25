import Avatar from "./logo1.png";
import {useContext} from "react";
import PostFormModalContext from "./PostFormModalContext";

function PostForm() {
  const modalContext = useContext(PostFormModalContext);
  return (

    // Module to create a new post 
    <div className="bg-reddit_dark px-6 py-4 text-gray-400">

      <div className="border border-reddit_border p-2 rounded-md flex bg-reddit_dark-brighter">
        
        {/* Displays the profile picture of the current user */}
        <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
          <img src={Avatar} alt="" style={{filter:'invert(100%)'}} />
        </div>
        
        {/* When we try to create a new post, this makes sure the modal is visible and we are able to add the text */}
        <form action="" className="flex-grow bg-reddit_dark-brightest border border-reddit_border ml-4 mr-2 rounded-md">
          <input type="text"
                 onFocus={e => {
                   e.preventDefault();
                   modalContext.setShow(true);
                 }}
                 className="bg-reddit_dark-brightest p-2 px-3 text-sm block w-full rounded-md" placeholder="New post" />
        </form>
      </div>

    </div>
  );
}

export default PostForm;