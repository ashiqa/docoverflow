import Avatar from "./pic1.jpg";
function BoardHeader() {
  return (
    <>
      <div className="h-32 bg-cover" style={{backgroundImage:'url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11459839.jpg")'}}>
      </div>
      <div className="bg-reddit_dark-brighter">
        <div className="mx-6 relative flex">
          <div className="h-20 w-20 rounded-full bg-gray-600 overflow-hidden relative -top-3 border-4">
            <img src={Avatar} alt=""  style={{filter:'invert(100%)'}}/>
          </div>
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