import Popup from "./responsive";
import '../index.css';
import { useState } from "react";

export default function Card(prop) {
  var [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(prop.mode)

  const handleClick = (x) =>{
    setIsModelOpen(true);
    setSelectedItem(x);
  };
  const closeModal = (x) => {
    setIsModelOpen(false); // Close the modal
    setSelectedItem(null); // Clear selected item
    // console.log("Data passed",x);
  };
    return (
      <>
       <a
          href="#!"
          onClick={()=>{handleClick(prop)}}
        >
        <div id='mycard' className="w-11/12 mb-6 rounded-lg overflow-hidden"
        style={{
          background: isDarkMode? "#2b3945" : "#ffffff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          color: isDarkMode? "#ffffff": "#202c37"
        }}
        >
            <div className="flex justify-center items-center flex-col width-full">
              <div className="w-full h-48">
                <img className="w-full h-full object-cover" src={prop.flags} alt="Flags of the world" />
              </div>
              <div className="p-5 w-full bg-oxford-blue flex justify-center items-start flex-col">
                <div id='mycard' className="uppercase text-slate-100 font-bold"
                style={{
                  background: "transparent",
                  color: isDarkMode? "#ffffff": "#202c37"
                }}>{prop.name}</div>
                <p id='mycard' className="mt-2 text-slate-500"
                style={{
                  background: "transparent",
                  color: isDarkMode? "#ffffff": "#202c37"
                }}><span className="font-bold">Population:</span> {prop.population}</p>
                <p id='mycard' className="mt-2 text-slate-500"
                style={{
                  background: "transparent",
                  color: isDarkMode? "#ffffff": "#202c37"
                }}><span className="font-bold">Region:</span> {prop.region}</p>
                <p id='mycard' className="mt-2 text-slate-500"
                style={{
                  background: "transparent",
                  color: isDarkMode? "#ffffff": "#202c37"
                }}><span className="font-bold">Capital:</span> {prop.capital}</p>
              </div>
            </div>
          </div>
          <Popup 
             isOpen={isModelOpen}
             itemContent={selectedItem}
             onClose={closeModal} 
             mode = {isDarkMode}
          />
          </a>
          </>
    )
  }
  