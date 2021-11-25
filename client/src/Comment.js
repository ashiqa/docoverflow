import Post from "./Post";
import CommentForm from "./CommentForm";
import RootCommentContext from "./RootCommentContext";
import Comments from "./Comments";
import {useEffect, useState} from "react";
import axios from "axios";

function Comment(props) {

  //props contains the id of the comment that has to be displayed to the user

  const [comment,setComment] = useState({});
  const [comments,setComments] = useState([]);
  const [commentsTotals, setCommentsTotals] = useState(null);
  const [userVotes, setUserVotes] = useState(null);

  //this continuously gets information from the backend regarding any updates on the post comments
  function refreshComments() {
    axios.get('http://localhost:4000/comments/root/'+props.id)
      .then(response => {
        setComments(response.data);
      });
  }

  //this continuously gets information from the backend regarding any updates on the votes for particular comments
  function refreshVotes() {
    const commentsIds = [comment._id, ...comments.map(c => c._id) ];
    axios.post('http://localhost:4000/votes', {commentsIds}, {withCredentials:true})
      .then(response => {
        setCommentsTotals(response.data.commentsTotals);
        setUserVotes(response.data.userVotes);
      })
  }

  //the new updates are then stores into props.comment as this is called whenever we make a new comment
  useEffect(() => {
    
    //
    if (props.comment) {
      setComment(props.comment);
    } else {
      //
      axios.get('http://localhost:4000/comments/'+props.id)
        .then(response => {
          setComment(response.data);
        });
    }
    refreshComments();
  }, [props.id, props.comment]);

  //if we get a new comment, refresh the count of votes for the post to add the new one
  useEffect(() => {
    refreshVotes();
  }, [comments.length]);

  return (
    <>
    {/* if we have already commented, we use the Post component to display the entire post with all the comments on the web page */}
      {comment && (
        <Post {...comment} open={true} />
      )}

      {/* In case we havent commented yet, this gives us an option to do so */}
      {!!comment && !!comment._id && (
        <>
          <hr className="border-docflow_border my-4"/>

          {/* CommentForm compoennt is used to post new comments on a post */}
          <CommentForm onSubmit={() => refreshComments()}
                       rootId={comment._id} parentId={comment._id} showAuthor={true} />
          <hr className="border-reddiit_border my-4"/>
          
          {/* This provides the necessary information on the original post we were looking at */}
          <RootCommentContext.Provider value={{refreshComments,refreshVotes,commentsTotals,userVotes}}>
            
            {/* The info on the post received before is used to display the post here using Comments component */}
            <Comments
              parentId={comment._id}
              rootId={comment._id}
              comments={comments} />
          </RootCommentContext.Provider>
        </>
      )}
    </>
  );
}

export default Comment;