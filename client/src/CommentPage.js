import Comment from "./Comment";

function CommentPage(props) {

  const commentId = props.match.params.id;
  //stores the commentId specified by the props that we are considering 

  return (
    <div className="py-4 px-6 bg-reddit_dark">
      <div className="bg-reddit_dark-brighter p-3 rounded-md">
          {/* displays the comment we want using the Comment component */}
        <Comment id={commentId} />
      </div>
    </div>
  );
}
export default CommentPage;