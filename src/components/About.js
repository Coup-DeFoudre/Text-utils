import React from "react";

export default function About() {
// let checkmode = ()=>{
//   if(document.title = 'NotesHub - Dark Mode'){
//      checkmode = 'white'
// } 
// if(document.title = 'NotesHub - Light Mode'){
//   checkmode = 'black';
// }

// }

  return (
    <>
      <div className="container">
        <h1 className="font-bold mt-10 ml-5 text-5xl">About Us</h1>
        <div className="cards mt-10  flex justify-between items-center px-5 space-x-4  w-[90vw]">
          <div className={`card-1 w-[30%] border border-black rounded-lg`}>
            <img
              src="https://via.placeholder.com/300x200.png?text=Image+1"
              alt=""
              className="rounded-t-lg"
            />
            <h3 className="font-bold text-2xl p-3">Card 1</h3>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="card-2 w-[30%] border border-black rounded-lg">
            <img
              src="https://via.placeholder.com/300x200.png?text=Image+2"
              alt=""
              className="rounded-t-lg"
            />
            <h3 className="font-bold text-2xl p-3">Card 2</h3>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
          <div className="card-3 w-[30%] border border-black rounded-lg">
            <img
              src="https://via.placeholder.com/300x200.png?text=Image+3"
              alt=""
              className="rounded-t-lg"
            />
            <h3 className="font-bold text-2xl p-3">Card 3</h3>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
}
