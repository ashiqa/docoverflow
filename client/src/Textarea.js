//Template for all the text that is displayed on the platform

function Textarea (props) {
  return (
    <textarea {...props} className={"bg-docflow_dark-brighter text-docflow_text p-2 border border-docflow_dark-brightest rounded-md block "+props.className} />
  );
}

export default Textarea;