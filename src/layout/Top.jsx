import React from "react";
import Logo from "../assets/rulette_logo.png"


const Top = () => {
    return(
        <>
            <div className="grid grid-cols-5 gap-1 text-center text-white mr-1">
               <div className="bg-[#2C3137] pt-3 font-semibold">BETS</div>
               <div className="col-span-3 flex bg-[#2C3137] items-center">
                    <div className="absolute"><img src={Logo} alt="logo" className="h-8 ml-1 w-24 text-left"></img></div>
                    <div className="flex ml-24">
                        <button className=" bg-[#2b7c9c] mt-1 mb-1 mr-1 ml-2 rounded-sm text-3xl font-bold text-slate-800 px-1">55</button>
                        <button className=" bg-[#f8bf60] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-2">x2.75</button>
                        <button className=" bg-[#cacbcd] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-2">x7.25</button>
                        <button className=" bg-[#f8bf60] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-2">x7,777.77</button>
                        <button className=" bg-[#8d52c6] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-2">x476.54</button>
                        <button className=" bg-[#f8bf60] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-2">x7,777.77</button>
                    </div>
                    <div className="flex ml-auto mr-auto">
                        <button className="bg-[#f8bf60] w-3 h-8 mt-1 mb-1 ml-auto mr-1 rounded-tl-md rounded-tr-md"></button>
                        <button className="bg-[#f8bf60] w-3 h-8 mt-1 mb-1 mr-1 rounded-tl-md rounded-tr-md"></button>
                        <button className="bg-[#141117] hover:bg-[#f8bf60] w-3 h-8 mt-1 mb-1 mr-1 rounded-tl-md rounded-tr-md"></button>
                        <button className="bg-[#141117] hover:bg-[#f8bf60] w-3 h-8 mt-1 mb-1 mr-1 rounded-tl-md rounded-tr-md"></button>
                        <button className="bg-[#141117] hover:bg-[#f8bf60] w-3 h-8 mt-1 mb-1 mr-1 rounded-tl-md rounded-tr-md"></button>
                        <button className="bg-[#141117] hover:bg-[#f8bf60] w-3 h-8 mt-1 mb-1 mr-auto rounded-tl-md rounded-tr-md"></button>
                    </div>
               </div>
               <div className="bg-[#2C3137] pt-3 font-semibold">TOP WINNERS(24 HR)</div>
            </div>
        </>
    )
}

export default Top