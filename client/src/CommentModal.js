import PostContent from "./PostContent";
import {useEffect, useState} from "react";
import axios from "axios";
import ClickOutHandler from 'react-clickout-handler';
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import RootCommentContext from "./RootCommentContext";
import Comment from "./Comment";

function CommentModal(props) {

  //used for displaying specific comments
  const [comment,setComment] = useState({});

  //we can choose the extra information to be visible or hidden using this
  const visibleClass = props.open ? 'block' : 'hidden';

  //this is used to get the comments already made and store it into the comment list using State hook
  //we use useEffect because it can change at any time and the changes should be reflected dynamically 
  useEffect(() => {
    axios.get('http://localhost:4000/comments/'+props.id)
      .then(response => {
        setComment(response.data);
      });
  }, [props.id]);


  function close() {
    setComment({});
    props.onClickOut();
  }

  return (
    <div className={"w-screen h-screen fixed top-0 left-0 z-20 flex "+visibleClass} style={{backgroundColor:'rgba(0,0,0,.8)'}}>
      <ClickOutHandler onClickOut={() => close()}>
        <div className="border my-4 border-reddit_dark-brightest w-3/4 lg:w-1/2 bg-reddit_dark-brighter text-reddit_text self-center p-4 mx-auto rounded-md">
          <div className="block overflow-scroll" style={{maxHeight:"calc(100vh - 50px)"}}>
            {/* Use the comment component to display the comment */}
            <Comment comment={comment} id={props.id} />
          </div>
        </div>
      </ClickOutHandler>
    </div>
  );
}

export default CommentModal;