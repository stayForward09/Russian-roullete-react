import React from "react";
import { useState } from "react";
import Dia from "../assets/dia.png"

const GameInfo = () => {

    const showModal=()=>{
        document.getElementById('playModal').classList.add('hidden')
    }

    const [isExpanded, setExpanded] = useState(true);

    const handleExpanded = () => {
        setExpanded(!isExpanded);
    }
   
    return(
    <div className=" h-screen w-screen bg-[#141117]">
        <div className=" z-10 fixed inset-0 sm:w-full md:w-4/5 lg:w-3/5 xl:w-2/5  ml-auto mr-auto">
        
            <div className={`bg-[#2C3137] ${isExpanded?'h-[90%]':'h-[47%]'} rounded-xl text-center items-center py-4`}>
                <div className="flex w-full">
                    <label className="mb-5 ml-5 text-xl font-bold text-white text-left">GAME INFORMATION</label>
                    <div onClick={showModal} className="ml-auto mr-5 mt-5 "></div>
                </div>
                <hr className="border-1 border-slate-950"></hr>
                <div className="mb-4">
                    <div className="text-center font-semibold text-base text-[#f8bf60] py-4">
                    <div className="flex justify-center">
                        Russian Rulette Group | #5,939,096
                        <svg className="w-4 mt-1 ml-1 fill-[#f8bf60] h-4" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"/></svg>
                    </div>
                    <div>Satureday 24 November 2025 at 17:02:52 GMT</div>
                    <div className="text-white text-base -mt-2">18 Hours Ago</div>
                    </div>
                    <div className=" rounded-lg bg-black w-2/3 py-4 ml-auto mr-auto">
                        <div className="text-lg text-white font-bold">Result</div>
                        <div className="text-xl text-[#f8bf60] font-bold">750.00x</div>
                        <div className="hidden lg:block text-xl text-[#f8bf60] font-bold">20 Bonus Rounds</div>
                    </div>
                    <button className="hover:bg-black w-2/3 text-lg mt-4 rounded-lg py-2 text-black bg-[#f8bf60] font-bold hover:text-white">PLAY RUSSIAN ROULETTE</button>
                </div>
                <hr className="border-1 border-slate-950"></hr>
                <div className="text-center items-center py-2">
                    {!isExpanded?
                        (<button className="rounded-lg ml-auto mr-auto items-center text-white font-semibold flex text-sm px-2 " onClick={handleExpanded}><div className="mr-1">More Details</div> <svg xmlns="http:;//www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 bi bi-chevron-down stroke-white mt-1" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></button>):
                        (<button className="rounded-lg ml-auto mr-auto items-center text-white font-semibold flex text-sm px-2 " onClick={handleExpanded}><div className="mr-1">Less Details</div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-up stroke-white h-4 w-4  mt-1" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg></button>)
                    }
                </div>

                {isExpanded&&
                <div>
                    <hr className="border-1 border-slate-950 px-4"></hr>
                    <div className="flex py-2 px-4 font-semibold text-sm text-white">
                        <button className="w-1/2 mr-2 bg-black  rounded-sm">Previous Game</button>
                        <button className="w-1/2 bg-black  rounded-sm">Next Game</button>
                    </div>
                    <hr className="border-1 border-slate-950 mx-4 mb-4"></hr>
                </div>
                }

                {isExpanded&&
                <div className="mb-4 px-4 text-white space-y-1 overflow-y-auto h-[38%] lg:h-[35%]">
                    <div className="flex  text-sm text-black font-semibold space-x-0.5"><span className="hidden md:block bg-[#f8bf60] w-[15%] px-2 rounded-tl-md">ROUNDED</span><span className="bg-[#f8bf60] rounded-tl-md md:rounded-none w-[20%] md:w-[15%] px-2">PLAYER</span><span className="bg-[#f8bf60] w-[25%]  md:w-[20%] px-2">BET</span><span className="hidden md:block bg-[#f8bf60]  w-[10%] px-2">RESULT</span><span className="bg-[#f8bf60]  md:w-[10%] w-[15%] px-2">PAYOUT</span><span className="bg-[#f8bf60] w-[20%] md:w-[15%] px-2">WIN</span><span className="bg-[#f8bf60] rounded-tr-md w-[25%] md:w-[20%] px-2"><svg className="w-4 h-4 justify-center ml-auto mr-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5442 10.4558C11.8385 8.75022 9.07316 8.75022 7.36753 10.4558L4.27922 13.5442C2.57359 15.2498 2.57359 18.0152 4.27922 19.7208C5.98485 21.4264 8.75021 21.4264 10.4558 19.7208L12 18.1766" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.4558 13.5442C12.1614 15.2498 14.9268 15.2498 16.6324 13.5442L19.7207 10.4558C21.4264 8.75021 21.4264 5.98485 19.7207 4.27922C18.0151 2.57359 15.2497 2.57359 13.5441 4.27922L12 5.82338" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></div>
                    
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">50.00x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2 text-[#f8bf60]">7.50x</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>375,000</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">87.50x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2">-</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex">-</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">50.00x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2 text-[#f8bf60]">7.50x</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>375,000</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">87.50x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2">-</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex">-</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">50.00x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2 text-[#f8bf60]">7.50x</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>375,000</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">87.50x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2">-</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex">-</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>

                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">50.00x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2 text-[#f8bf60]">7.50x</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>375,000</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">87.50x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2">-</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex">-</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>

                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">50.00x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2 text-[#f8bf60]">7.50x</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>375,000</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">87.50x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2">-</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex">-</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>

                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">50.00x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2 text-[#f8bf60]">7.50x</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>375,000</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">87.50x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2">-</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex">-</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>

                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">50.00x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2 text-[#f8bf60]">7.50x</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>375,000</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">87.50x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2">-</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex">-</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">50.00x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2 text-[#f8bf60]">7.50x</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>375,000</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>
                    <div className="flex  text-sm text-white font-semibold space-x-0.5"><span className="hidden md:block bg-[#141117] w-[15%] px-2">7777</span><span className="bg-[#141117] md:rounded-none w-[20%] md:w-[15%] px-2">troyr3750</span><span className="bg-[#141117] w-[25%]  md:w-[20%] px-2 flex justify-center"><img src={Dia} className="w-3 h-3 mt-1 mr-1" alt='dia'/>777,777.77</span><span className="hidden md:block bg-[#141117] text-[#f8bf60]  w-[10%] px-2">87.50x</span><span className="bg-[#141117]  md:w-[10%] w-[15%] px-2">-</span><span className="bg-[#141117] w-[20%] md:w-[15%] px-2 justify-center flex">-</span><span className="bg-[#141117] w-[25%] md:w-[20%] px-2 text-[#f8bf60]">BET #75,405</span></div>


                </div>
                }

                {isExpanded&&
                <div>
                    <hr className="border-1 border-slate-950 mx-4 py-1"></hr>
                    <div className="font-semibold text-sm text-white  break-normal px-2">GAME HASH:<span>0x91d6dfcfa17788827c1527654d9331b70dfc32a3a7f90d5f2ead7712e19895a4</span></div>
                </div>
                }
            </div>
        </div>
    </div>
    )
}

export default GameInfo