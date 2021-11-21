function Button(props){
let classNames="border border-blue-800 bg-blue-800 rounded-full px-3 text-sm font-bold h-8";
if (props.outline) {
    classNames += "text-blue-800 ";
  } else {
    classNames += "bg-blue-800 text-reddit_dark ";
  }
  return (
    <button {...props} className={classNames + props.className} />
  );
}
export default Button;