//Template code for input fields used in designing the website

function Input (props) {
  return (
    <input {...props} className={"bg-docflow_dark-brighter text-docflow_text p-2 border border-docflow_dark-brightest rounded-md block "+props.className} />
  );
}

export default Input;