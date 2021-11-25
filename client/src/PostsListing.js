import Post from "./Post";
import {useState,useEffect} from "react";
import axios from "axios";

function PostsListing() {

  {/* This stores all the posts data + comments that arrives from backend*/}
  const [comments,setComments] = useState([]);


  //the posts data is taken from backend using axios to access APIs
  //this data is being stored in comments using the State Hook
  useEffect(() => {
    axios.get('http://localhost:4000/comments', {withCredentials:true})
      .then(response => setComments(response.data));

  }, []);

  //Feed with the list of posts module

  return (
    <div className="bg-docflow_dark">
      
      {/* A loop over the posts that need to be displayed */}
      {comments.map(comment => (
        <Post {...comment} isListing={true} />
      ))}
    </div>
  );
}

export default PostsListing;