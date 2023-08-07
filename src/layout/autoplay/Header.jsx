import React from "react";
import Logo from "../../assets/rulette_logo.png"
import User from "../../assets/user.png"
import Dia from "../../assets/dia.png"

const Header = () => {
    return(
        <>
            <div className=" bg-[#1c2127] h-12 items-center text-center shadow-md shadow-black grid grid-cols-3">
                <div><img src={Logo} alt="logo" className="h-10 w-26 text-left ml-2 py-1 "></img></div>
                <div className="mr-auto ml-auto flex">
                    <button className="text-center flex pt-1 bg-[#2c3137] w-36 hover:bg-[#0e0d0d] rounded-l-sm shadow-md shadow-black"><label className="ml-4 text-white">1,000,000.00</label><img src={Dia} alt="logo" className="h-5 text-left ml-2 pt-1 grid-cols-4"></img></button>
                    <button className="w-20 h-8 font-bold bg-[#f8bf60] items-center text-center rounded-r-sm hover:bg-[#ffd359] shadow-md shadow-[#867145]">WALLET</button>
                </div>
                <button  className="mr-2 ml-auto pt-2 hover:brightness-150"><img src={User} alt="logo" className="h-8"></img></button>
            </div>
        </>
    )
}

export default Header