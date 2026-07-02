import { useState } from "react";


function Bgchange() {
    const [color, setColor] = useState("olive")

    return(
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-conter bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justufy-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button onClick={()=>{setColor('#292F36')}} className="outLine-none px-4 py-1 rounded-full text-white shadow-sky-200" style={{backgroundColor: "#292F36"}}>Jet Black</button>
              <button onClick={()=>{setColor('#4ECDC4')}} className="outLine-none px-4 py-1 rounded-full text-white shadow-sky-200" style={{backgroundColor: "#4ECDC4"}}>Strong Cyan</button>
              <button onClick={()=>{setColor('#F7FFF7')}} className="outLine-none px-4 py-1 rounded-full text-black shadow-sky-200" style={{backgroundColor: "#F7FFF7"}}>Mint Cream</button>
              <button onClick={()=>{setColor('#FF6B6B')}} className="outLine-none px-4 py-1 rounded-full text-white shadow-sky-200" style={{backgroundColor: "#FF6B6B"}}>Grapefruit Pink</button>
              <button onClick={()=>{setColor('#FFE66D')}} className="outLine-none px-4 py-1 rounded-full text-white shadow-sky-200" style={{backgroundColor: "#FFE66D"}}>Royal Gold</button>
            
            </div>
        </div>
      </div>
    )
}
export default Bgchange