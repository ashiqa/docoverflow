import TimeAgo from 'timeago-react';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

function PostContent(props) {
  return (
    <div>

        {/* The content of a post - author, title and content passed using props */}
      
      <h5 className="text-docflow_text-darker text-sm mb-1"> Posted by u/{props.author} <TimeAgo datetime={props.postedAt} /></h5>
      <h2 className="text-xl mb-3">{props.title}</h2>
      <div className="text-sm leading-6">
        <ReactMarkdown plugins={[gfm]} children={props.body} />
      </div>
    </div>
  );
}

export default PostContent;