import React from "react";
import { useState,useEffect } from "react";
export default function Meme (){

  const [memeText, setMemeText] = useState({
    firstText: "",
    secondText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event){
    const {name,value}= event.target
    setMemeText(prev => ({...prev, [name]:value}))
  }

  const[allMeme, setAllMeme]=useState([])
  function getAllMemes(){
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url=allMeme[randomNumber].url
    setMemeText(prev =>({...prev ,randomImage:url}))
  }
useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes")
   .then(res=>res.json())
   .then(data=>{
    setAllMeme(data.data.memes)
  })
},[memeText.randomImage])
console.log(getAllMemes)
  return (
    <main className="shadow-md ">
      <div className="grid grid-col-2  place-content-center space-y-4  space-x-4 py-8">
        <input
          className="py-2 px-2 col-span-1 border border-gray-400 mt-4 rounded-md outline-none"
          type="text"
          placeholder="first meme text"
          name="firstText"
          value={memeText.firstText}
          onChange={handleChange}
        />
        <input
          className="py-2 px-2 col-span-1 border border-gray-400 mt-4 rounded-md outline-none"
          type="text"
          placeholder="second meme text"
          name="secondText"
          value={memeText.secondText}
          onChange={handleChange}
        />
        <button
          onClick={getAllMemes}
          className="col-span-2 bg-purple text-white w-full py-2 rounded-md "
        >
          Get new Meme image
        </button>
      </div>
      <div className="text-4xl leading-10 text-center relative text-white font-normal">
        <p className="absolute top-6  left-16 text-center z-50 pt-4">
          {memeText.firstText}
        </p>
        <p className="absolute bottom-16 left-16 z-50">{memeText.secondText}</p>
        <img
          className="min-w-[450px] px-8 pb-8 relative"
          src={memeText.randomImage}
          alt="meme"
        />
      </div>
    </main>
  );
}
