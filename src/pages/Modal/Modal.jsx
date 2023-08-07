import React ,{useEffect, useState} from "react";
import './modal.css'
import Dia from '../../assets/dia.png'
const Modal=()=>{
    useEffect(()=>{
        const first=document.getElementById('second')
        first.focus()
    },[])
    const showModal=()=>{
        document.getElementById('playModal').classList.add('hidden')
    }
    return(
        <div className="modal fixed inset-0 overflow-y-auto">
            <div className="modal-content rounded-xl divide-y-2 divide-gray-950">
                <div className="flex w-full">
                    <label className="mt-5 ml-5 text-xl font-bold">BETLIST</label>
                    <div onClick={showModal} className="ml-auto mr-5 mt-5 "><svg  fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="20px" height="20px"><path d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"/></svg></div>
                </div>
                <div className="mt-5 text-center flex ">
                    <div className="flex mt-5 text-center">
                        <label className="w-56 h-12 ml-5 rounded-l-md pl-5 bg-[#1C2127] font-medium text-center items-center flex">My Betlist (5.00<img src={Dia} alt="logo" className="h-4 w-4 mt-4 mb-3 ml-1"></img>)</label><svg className="w-10 h-12 mr-1 bg-[#1C2127] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 14l-4-4h8z"/> </g> </svg>
                    </div>
                    <button className="bg-[#1C2127] w-24 h-12 mt-5 mr-1 font-medium">IMPORT</button>
                    <button className="bg-[#1C2127] rounded-r-md w-24 h-12 mt-5 font-medium">EXPORT</button>
                </div>
                <div className="mt-5 ">
                    <label className="w-[93%] text-center flex h-7 bg-[#1C2127] mt-5 rounded-md ml-auto mr-auto font-medium items-center pl-36" >TOTAL BET:<label className="text-yellow-500 mr-1">$ </label>100.00 &nbsp;&nbsp; <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px"><path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"/></svg></label>
                    <div className="mt-5 grid  grid-cols-3 text-center w-[93%] h-12 mr-auto ml-auto">
                        <label className="bg-[#1C2127] rounded-md text-center mr-1">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">10,000.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;10.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 30.00</label></label></label>
                        </label>
                        <label className="bg-[#1C2127] rounded-md text-center mr-1">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">10,000.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;10.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 30.00</label></label></label>
                        </label>
                        <label className="bg-[#1C2127] rounded-md text-center">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">10,000.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;10.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 30.00</label></label></label>
                        </label>
                    </div>
                    <div className="mt-2 grid  grid-cols-3 text-center w-[93%] h-12 mr-auto ml-auto">
                        <label className="bg-[#1C2127] rounded-md text-center mr-1">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">100.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;4.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 100.00</label></label></label>
                        </label>
                        <label className="bg-[#1C2127] rounded-md text-center mr-1">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">100.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;3.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 150.00</label></label></label>
                        </label>
                        <label className="bg-[#1C2127] rounded-md text-center">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">100.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;2.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 50.00</label></label></label>
                        </label>
                    </div>
                    <div className="mt-2  grid grid-cols-4 text-center w-[93%] h-12 mr-auto ml-auto">
                        <label className="bg-[#1C2127] rounded-md text-center mr-1">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">100.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;1.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 5.00</label></label></label>
                        </label>
                        <label className="bg-[#1C2127] rounded-md text-center mr-1">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">25.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;3.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 2.00</label></label></label>
                        </label>
                        <label className="bg-[#1C2127] rounded-md text-center mr-1">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">25.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;2.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 1.00</label></label></label>
                        </label>
                        <label className="bg-[#1C2127] rounded-md text-center">
                            <div className="text-yellow-500 font-bold -mb-1">$<label className="text-white">25.00</label></div>
                            <label className="text-yellow-500 font-bold">x<label className="font-bold text-white">&nbsp;1.00&nbsp;|&nbsp;<label className="text-yellow-500 font-bold">x 7.00</label></label></label>
                        </label>
                    </div>
                </div>
                <div className="mt-5 ">
                    <div className="font-bold mr-auto ml-auto mt-5 text-center">Add New Bet</div>
                    <div className="flex mt-5  ml-auto mr-auto">
                        <label className="font-bold bg-[#1C2127] w-[70%] h-12 rounded-l-md p-3 mr-1 ml-5">Bet<label className="text-yellow-500 ml-44">$</label> 0.10</label>
                        <label className="font-bold bg-[#1C2127] w-[10%] h-12 p-3 mr-1">1/2</label>
                        <label className="font-bold bg-[#1C2127] w-[10%] h-12 p-3 rounded-r-md">x2</label>
                    </div>
                    <div className="mt-3 grid grid-cols-4 items-center w-[90.5%] ml-auto mr-auto">
                        <div className="flex items-center">
                            <div className="bg-[#f8bf60] -ml-1 h-2 w-7 "></div>
                            <div className="bg-[#f8bf60] ml-1 h-1 w-20 "></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#f8bf60]  h-2 w-7 "></div>
                            <div className="bg-[#f8bf60] ml-1 h-1 w-4 "></div>
                            <div className="bg-[#f8bf60] h-4 w-8 rounded"></div>
                            <div className="bg-[#f8bf60] h-1 w-8 mr-1"></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#1C2127]  h-2 w-7 "></div>
                            <div className="bg-[#1C2127] ml-1 h-1 w-20 mr-2"></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#1C2127]  h-2 w-8 -ml-1 "></div>
                            <div className="bg-[#1C2127] ml-1 h-1 w-20 "></div>
                            <div className="bg-[#1C2127] ml-1 h-2 w-7 "></div>
                        </div>
                    </div>
                    <div className="flex mt-5  ml-auto mr-auto">
                        <label className="font-bold bg-[#1C2127] w-[70%] h-12 rounded-l-md p-3 mr-1 ml-5">Payout (<label className="text-yellow-500">Bonus</label>)<label className="text-yellow-500 ml-20">x 30.00</label></label>
                        <label className="font-bold bg-[#1C2127] w-[10%] h-12 p-3 mr-1">1/2</label>
                        <label className="font-bold bg-[#1C2127] w-[10%] h-12 p-3 rounded-r-md">x2</label>
                    </div>
                    <div className="mt-3 grid grid-cols-4 items-center w-[90.5%] ml-auto mr-auto">
                        <div className="flex items-center">
                            <div className="bg-[#f8bf60] -ml-1 h-2 w-7 "></div>
                            <div className="bg-[#f8bf60] ml-1 h-1 w-20 "></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#f8bf60]  h-2 w-7 "></div>
                            <div className="bg-[#f8bf60] ml-1 h-1 w-4 "></div>
                            <div className="bg-[#f8bf60] h-4 w-8 rounded"></div>
                            <div className="bg-[#f8bf60] h-1 w-8 mr-1"></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#1C2127]  h-2 w-7 "></div>
                            <div className="bg-[#1C2127] ml-1 h-1 w-20 mr-2"></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#1C2127]  h-2 w-8 -ml-1 "></div>
                            <div className="bg-[#1C2127] ml-1 h-1 w-20 "></div>
                            <div className="bg-[#1C2127] ml-1 h-2 w-7 "></div>
                        </div>
                    </div>
                    <div className="flex mt-5  ml-auto mr-auto">
                        <label className="font-bold bg-[#1C2127] w-[70%] h-12 rounded-l-md p-3 mr-1 ml-5">Payout (Base)<label className="text-yellow-500 ml-24">x</label> 1.50</label>
                        <label className="font-bold bg-[#1C2127] w-[10%] h-12 p-3 mr-1">1/2</label>
                        <label className="font-bold bg-[#1C2127] w-[10%] h-12 p-3 rounded-r-md">x2</label>
                    </div>
                    <div className="mt-3 grid grid-cols-4 items-center w-[90.5%] ml-auto mr-auto">
                        <div className="flex items-center">
                            <div className="bg-[#f8bf60] -ml-1 h-2 w-7 "></div>
                            <div className="bg-[#f8bf60] ml-1 h-1 w-20 "></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#f8bf60]  h-2 w-7 "></div>
                            <div className="bg-[#f8bf60] ml-1 h-1 w-4 "></div>
                            <div className="bg-[#f8bf60] h-4 w-8 rounded"></div>
                            <div className="bg-[#f8bf60] h-1 w-8 mr-1"></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#1C2127]  h-2 w-7 "></div>
                            <div className="bg-[#1C2127] ml-1 h-1 w-20 mr-2"></div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-[#1C2127]  h-2 w-8 -ml-1 "></div>
                            <div className="bg-[#1C2127] ml-1 h-1 w-20 "></div>
                            <div className="bg-[#1C2127] ml-1 h-2 w-7 "></div>
                        </div>
                    </div>
                    <div className="mt-3 w-[92%] text-center h-12 flex ml-auto mr-auto">
                    <button id='first' className="w-[50%] h-10 outline-none bg-[#1C2127]  border-r-2 border-[#2C3137] text-white ml-auto mr-0 rounded-l-md   font-bold focus:text-black focus:bg-[#F8BF60] " >Clear Betlist</button>
                    <button id="second" className="w-[50%] h-10  bg-[#1C2127]   text-white ml-0 mr-auto rounded-r-md outline-none  font-bold focus:text-black focus:bg-[#F8BF60] " >Add to Betlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal