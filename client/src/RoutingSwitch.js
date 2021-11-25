import {Route, Switch, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import Board from "./Board";
import CommentPage from "./CommentPage";
import CommentModal from "./CommentModal";

function RoutingSwitch() {

  //if this is true, it shows a post open on the entire page instead of the feed page
  const [postOpen, setPostOpen] = useState(false);
  // const [commentId, setCommentId] = useState(null);

  //this shows the current route or url we are at during the entire time of browsing 
  let location = useLocation();
  let commentId = null;

  if (location.state && location.state.commentId) {
    location.pathname = '/';
    if (postOpen) {
        //if we are at the root page and we want to open a post, then redirect the user to the post it wants to see
      commentId = location.state.commentId;
    } else {
      location.state.commentId = null;
    }

  }

  //if the value of commentId has changed, then make the value of postOpen = true
  useEffect(() => {
    setPostOpen(true);
  }, [commentId]);

  //if the value of postOpen has changed, then make the commentId null
  useEffect(() => {
    commentId = null;
  }, [postOpen]);

  return (
    <div>
      {commentId && (
        <div>
          <CommentModal
            id={commentId}
            open={postOpen}
            onClickOut={() => setPostOpen(false)} />
        </div>
      )}
      <Switch location={location}>
          {/* Display the feed of the user */}
        <Route exact path="/" component={Board} />

        {/* Display the specific post and comment the user has clicked on */}
        <Route exact path="/comments/:id" component={CommentPage} />
      </Switch>
    </div>
  );
}

export default RoutingSwitch;