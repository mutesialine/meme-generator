import React from "react"
export default function Meme(){
  const [meme ,setMeme]=React.useState({
    firstText:"",
    secondText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes,setAllMemes]=React.useState([])
React.useEffect(()=>{
fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllMemes(data.data.memes))
},[])

  function getAllMemes(){
    
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url =allMemes[randomNumber].url
    setMeme(prev=>({...prev ,randomImage:url}))
  }
  function handleChange(event){
    const{name, value}=event.target
    setMeme(prev =>({
      ...prev, [name]:value}))
  }
  // function handleSubmit(event){
  //  event.preventDefault()
  // }

 
  return (
    <main className="py-8 shadow-md">
      <div className="grid grid-col-2 justify-items-center place-content-center space-y-4  space-x-4">
        <input
          className="py-2 px-2 col-span-1 border border-gray-400 mt-4 rounded-md"
          type="text"
          placeholder="toptext"
          name="firstText"
          value={meme.firstText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="py-2 px-2 col-span-1 border border-gray-400 mt-4 rounded-md "
          placeholder="bottom text"
          name="secondText"
          value={meme.secondText}
          onChange={handleChange}
        />

        <button
          onClick={getAllMemes}
          className="px-2 py-2 w-full rounded-md col-span-2 bg-[#781e96] text-white"
        >
          Generate new meme Image
        </button>

      </div>
      <div className="relative text-white pt-4">
        <img
          src={meme.randomImage}
          alt="meme image"
          className="min-w-[400px] relative px-8"
        />
        <p className="text-4xl leading-10 text-center font-bold absolute z-50 top-10 left-24 px-12">{meme.firstText}</p>
        <p className="text-4xl leading-10  text-center font-bold absolute z-50 bottom-16 left-24 px-12">{meme.secondText}</p>
      </div>
    </main>
  );
}