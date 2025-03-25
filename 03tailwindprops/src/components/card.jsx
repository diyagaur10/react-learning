import React from "react";

function Card({username, btntext = "visit me" }){ //default value for btntext will be visit me
  console.log(username)
    return(
      <>
        <div className="w-60 h-60 rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl mb-19"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10 mb-4 ">
          <h1 className="font-bold  font-mono  text-xl">{username}</h1>
        </div>
      
      </div>
      <button className="relative block group ">
      <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
      <div className="transition bg-black relative border-2 rounded-lg -translate-x-2 -translate-y-2">
        <div className="p-2 ">
          <p className="text-xl font-outerSans font-medium">{btntext}</p>
        </div>
      </div>
    </button>
    </>
    )
}

export default Card