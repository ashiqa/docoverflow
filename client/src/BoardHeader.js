import Avatar from "./pic1.jpg";
function BoardHeader() {
  return (
    <>
    {/* board header of a specific user */}
    
      <div className="h-32 bg-cover" style={{backgroundImage:'url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11459839.jpg")'}}>
      </div>
      <div className="bg-docflow_dark-brighter">
        <div className="mx-6 relative flex">
            {/* profile picture of  */}

          <div className="h-20 w-20 rounded-full bg-gray-600 overflow-hidden relative -top-3 border-4">
            <img src={Avatar} alt=""  style={{filter:'invert(100%)'}}/>
          </div>

          {/* Profile name and user name */}
          <div className="pt-2 pl-4">
            <h1 className="text-gray-300 text-3xl">Docoverflow</h1>
            <h5 className="text-gray-500">r/docoverflow</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export  default BoardHeader;