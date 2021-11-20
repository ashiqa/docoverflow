import './style.css' ;
function BoardHeader (){
 return(
     <div>
         <div className="h-20 bg-cover" style={{backgroundImage:'url("https://c8.alamy.com/comp/2B0C8EP/purple-black-and-white-liquid-color-oil-paint-abstract-background-and-texture-illustration-banner-extreme-widescreen-2B0C8EP.jpg")'}}>
    </div>
    <div className="bg-reddit_dark-brighter">
        <div className="mx-6 relative flex">
          <div className="h-20 w-20 rounded-full overflow-hidden relative -top-3 border-4 border-white bg-white">
            <img src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_5ey8lzmwmxp21.png?width=256&s=5a85d5c682f40e3cf317c560b219585ac0afce78" alt=""/>
          </div>
          <div className="ml-3 pt-2 pl-4">
            <h1 className="text-gray-300 text-2xl">DocOverflow : All your medical queries answered</h1>
            <h5 className="text-gray-500">r/query</h5>
          </div>
        </div>
      </div>
     </div>
 );
}
export default BoardHeader ;