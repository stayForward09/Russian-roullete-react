import React from "react";
import { useState } from "react";
const Test1 = () => {

    const showModal=()=>{
        document.getElementById('playModal').classList.add('hidden')
    }

    const [isExpanded, setExpanded] = useState(false);

    const handleExpanded = () => {
        setExpanded(!isExpanded);
    }
   
    return(
    <div className=" z-10 fixed inset-0 w-1/3 ml-auto mr-auto">
        <div className="bg-[#2C3137] rounded-xl text-center items-center py-4">
            <div className="flex w-full">
                <label className="mb-5 ml-5 text-xl font-bold text-white">GAME INFORMATION</label>
                <div onClick={showModal} className="ml-auto mr-5 mt-5 "></div>
            </div>
            <hr className="border-1 border-slate-950"></hr>
            <div className="mb-4">
                <div className="text-center font-semibold text-lg text-[#f8bf60] py-4">
                <div>Russian Rulette Group | #5,939,096</div>
                <div>Satureday 24 November 2025 at 17:02:52 GMT</div>
                <div className="text-white text-base -mt-2">18 Hours Ago</div>
                </div>
                <div className=" rounded-lg bg-black w-2/3 py-4 ml-auto mr-auto">
                    <div className="text-lg text-white font-bold">Result</div>
                    <div className="text-xl text-[#f8bf60] font-bold">750.00x</div>
                </div>
                <button className="bg-black w-2/3 text-lg mt-4 rounded-lg py-2 hover:text-black hover:bg-[#f8bf60] font-bold text-white">PLAY RUSSIAN ROULETTE</button>
            </div>
            <hr className="border-1 border-slate-950"></hr>
            {isExpanded?
                (<button className=" py-1 ml-auto mr-0 rounded-lg  items-center text-white font-semibold flex text-sm bg-black px-2 hover:bg-slate-800" onClick={handleExpanded}><div className="mr-1">ADVANCED</div> <svg xmlns="http:;//www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 bi bi-chevron-down stroke-white mt-1" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></button>):
                (<button className=" py-1 ml-auto mr-0 rounded-lg  items-center text-black font-bold flex text-sm bg-white px-2 hover:bg-slate-200" onClick={handleExpanded}><div className="mr-1">ADVANCED</div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-up h-4 w-4 stroke-black mt-1" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg></button>)
            }
            
        </div>
    </div>
    )
}

export default Test1