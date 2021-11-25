//Template for all the text that is displayed on the platform

function Textarea (props) {
  return (
    <textarea {...props} className={"bg-reddit_dark-brighter text-reddit_text p-2 border border-reddit_dark-brightest rounded-md block "+props.className} />
  );
}

export default Textarea;