import React from "react";
import Logo from "../assets/rulette_logo.png"
import User from "../assets/user.png"
import Dia from "../assets/dia.png"
import Wrapper from "../pages/Register-Login/Wrapper";
import '../pages/Modal/modal.css'
const Header = () => {
    const handleClick=()=>{
        document.getElementById('myModal').classList.remove('hidden')
    }
    return(
        <>
            <div className=" bg-[#1c2127] h-12 items-center text-center shadow-md shadow-black grid grid-cols-3">
                <div><img src={Logo} alt="logo" className="h-10 w-26 text-left ml-2 py-1 "></img></div>
                <div className="mr-auto ml-auto flex">
                    <button className="w-8 h-8 bg-[#f8bf60] items-center text-center rounded-l-sm hover:bg-[#fedf90] hover:drop-shadow-xl"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-auto mr-auto" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M21 9.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5zm-18 5c0 2.485 4.03 4.5 9 4.5s9-2.015 9-4.5v3c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-3zm9-2.5c-4.97 0-9-2.015-9-4.5S7.03 3 12 3s9 2.015 9 4.5-4.03 4.5-9 4.5z"/> </g> </svg></button>
                    <button className="text-center flex pt-1 bg-[#2c3137] w-24 hover:bg-[#4c4147]"><label className="ml-4 text-white">72.63</label><img src={Dia} alt="logo" className="h-5 text-left ml-2 pt-1 grid-cols-4"></img></button>
                    <button className="w-8 h-8 bg-[#f8bf60] items-center text-center rounded-r-sm hover:bg-[#fedf90]"><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="w-6 h-6 ml-auto mr-auto bi bi-wallet-fill" viewBox="0 0 16 16"> <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/> </svg></button>
                </div>
                <button onClick={handleClick} className="mr-2 ml-auto pt-2 hover:brightness-150"><img src={User} alt="logo" className="h-8"></img></button>
            </div>
            <div id="myModal" className="modal hidden fixed inset-0 overflow-y-auto first:opacity-100 w-full h-full bg-black bg-opacity-80">
                <div className=" opacity-100"><Wrapper /></div>
            </div>
        </>
    )
}

export default Header