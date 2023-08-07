import React from "react";
import Logo from "../../assets/rulette_logo.png"


const Top = () => {
    return(
        <>
            <div className="grid grid-cols-5 gap-1 text-center text-white mr-1">
               <div className="bg-[#2C3137] pt-3 font-semibold">PLAYERS</div>
               <div className="col-span-3 flex bg-[#2C3137] items-center">
                    <div className="ml-2 mr-auto"><img src={Logo} alt="logo" className="h-8 ml-1 w-24 text-left"></img></div>
                    <div className="flex ">
                        <button className=" bg-[#8d52c6] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-3">x200.25</button>
                        <button className=" bg-[#4773ca] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-3">x25.55</button>
                        <button className=" bg-[#f8bf60] mt-1 mb-1 mr-1 rounded-sm text-center text-3xl font-bold text-slate-800 px-3"><div className="text-sm -mb-3 -mt-1">BONUS</div>x2.75</button>
                        <button className=" bg-[#cacbcd] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-3">x476.54</button>
                        <button className=" bg-[#217953] mt-1 mb-1 mr-1 rounded-sm text-3xl font-bold text-slate-800 px-3">x75.84</button>
                    </div>
                    <div className="ml-auto mr-2"><img src={Logo} alt="logo" className="h-8 ml-1 w-24 text-left"></img></div>
               </div>
               <div className="bg-[#2C3137] pt-3 font-semibold">TOP WINNERS(24 HR)</div>
            </div>
        </>
    )
}

export default Top