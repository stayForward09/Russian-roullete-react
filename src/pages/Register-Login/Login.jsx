import React from "react";

const Register=()=>{
    return(
        <div className="text-center pb-5">
            <div><input  className="bg-[#1C2127] appearance-none h-10 pl-5 mb-5 rounded-sm w-[83%]  focus:border-gray-600 text-white  font-bold" type='text' placeholder="USERNAME"></input></div>
            <div><input  className="bg-[#1C2127] appearance-none h-10 pl-5 mb-5 rounded-sm w-[83%] focus:border-gray-500 text-white  font-bold" type="password" placeholder="PASSWORD"></input></div>
            <button className="bg-[#A3A09B] h-10 text-center font-bold w-[83%] rounded-sm">PLAY NOW</button>
        </div>
    )
}
export default Register