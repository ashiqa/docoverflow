import {Link} from "react-router-dom";
import PostContent from "./PostContent";

function Post(props) {

  let postClasses = "block border rounded-md " + (props.open ? "" : "hover:border-docflow_text cursor-pointer");
  
  //formatting used if posts are being shown
  if (props.isListing) {
    postClasses += " bg-docflow_dark-brighter p-3 mx-6 border-2 border-docflow_border";
  } 
  
  else {
      //incase no posts are shown, use this formatting
    postClasses += " border-none";
  }

  return (
    <div className="text-docflow_text pb-4">
      {/* Incase we have a specific post open, use PostContent component to display it */}
      {props.open && (
        <div className={postClasses}>
          <PostContent {...props} />
        </div>
      )}

      {/* If no post is open, show the list of posts, it will get redirected to the post content if you click on it */}
      {!props.open && (
        <Link to={{pathname:'/comments/'+props._id,state:{commentId:props._id}}} className={postClasses}>
          <PostContent {...props} />
        </Link>
      )}


    </div>
  );
}

export default Post;