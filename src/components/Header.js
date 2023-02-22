export default function Header(){
  return (
    <div className="bg-purple text-white py-5 px-4 flex justify-between">
      <div className="flex gap-x-2 items-center">
        <img src="/Troll Face.png" className="w-8" />
        <p className="text-xl font-bold">Meme generator</p>
      </div>

      <p className=" text-sm">React course-Project 3</p>
    </div>
  );
}