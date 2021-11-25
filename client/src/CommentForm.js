import {useContext, useState} from "react";
import UserContext from "./UserContext";
import Textarea from "./Textarea";
import Button from "./Button";
import axios from "axios";

function CommentForm (props) {

  //The user that is trying to comment has his info saved in userInfo using the context
  const userInfo = useContext(UserContext);

  //The comment that is written is stored in commentBody using the State Hook
  const [commentBody,setCommentBody] = useState('');
  
  // This is used to post the comment of the user to the database via the backend
  function postComment(e) {
    e.preventDefault();
    const data = {body:commentBody, parentId:props.parentId,rootId:props.rootId,};
    axios.post('http://localhost:4000/comments', data, {withCredentials:true})
      .then(response => {
        setCommentBody('');
        if (props.onSubmit) {
          props.onSubmit();
        }
      });
  }

  return (
    <div className={'text-docflow_text'}>

      {/* Shows you which account you are logged into */}
      {userInfo.username && props.showAuthor && (
        <div className="mb-2">
          Comment as {userInfo.username}
        </div>
      )}

      {/* Input field to get the comment text from the user */}
      <form onSubmit={e => postComment(e)}>
        <Textarea className="w-full mb-3 border border-docflow_border"
                  onChange={e => setCommentBody(e.target.value)}
                  value={commentBody}
                  placeholder={'Your comment. You can use markdown here'} />
        <div className="text-right">
          {!!props.onCancel && (
            <Button outline
                    className="p-2 mr-2"
                    onClick={e => props.onCancel()}>Cancel</Button>
          )}
          <Button className="p-2">Comment</Button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;