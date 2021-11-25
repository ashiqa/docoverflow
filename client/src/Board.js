import BoardHeader from "./BoardHeader";
import PostForm from "./PostForm";
import PostsListing from "./PostsListing";

function Board() {
  return (

    //Feed Module

    <div>
        {/* The board header which is specific to a user */}
        <BoardHeader /> 

        {/* the module to create new posts */}
        <PostForm />

        {/* a list of posts that appear on the feed, from your followers or in general*/}
        <PostsListing />
        
    </div>);
}

export default Board;