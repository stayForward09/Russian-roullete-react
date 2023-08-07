import React from "react";

const Register=()=>{
    return(
        <div className="text-center pb-5">
            <div><input  className="bg-[#1C2127] appearance-none h-10 pl-5 mb-5 rounded-sm w-[83%]  focus:border-gray-600 border-spacing-1 text-white  font-bold" type='text' placeholder="USERNAME"></input></div>
            <div><input  className="bg-[#1C2127] appearance-none h-10 pl-5 mb-5 rounded-sm w-[83%] focus:border-gray-500 border-spacing-1 text-white border-none font-bold" type="text" placeholder="EMAIIL"></input></div>
            <div className="flex " >
                <input  className="bg-[#1C2127] appearance-none h-10 pl-5 mb-5 ml-auto mr-1 rounded-sm border-spacing-1 w-[41%] focus:border-gray-500 text-white  font-bold" type="password" placeholder="PASSWORD"></input>
                <input  className="bg-[#1C2127] appearance-none h-10 pl-5 mb-5 ml-0 mr-auto rounded-sm border-spacing-1 w-[41%] focus:border-gray-500 text-white  font-bold" type="password" placeholder="RE-ENTER PASSWORD"></input>
            </div>
            <button className="bg-[#A3A09B] h-10 text-center font-bold w-[83%] rounded-sm">PLAY NOW</button>
        </div>
    )
}
export default Register