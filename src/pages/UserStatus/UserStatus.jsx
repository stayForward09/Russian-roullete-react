import React from "react";
import "./userstatus.css"
import Dia from '../../assets/dia.png'
const UserStatus=()=>{
    return(
        <div className=" h-screen w-screen bg-[#141117]">
            <div>
                <div className="userstatus divide-y divide-black rounded-lg">
                    <div className="flex w-full">
                        <label className="mt-5 ml-5 text-md font-bold">USER STATS</label>
                        <div className="ml-auto mr-5 mt-5 "><svg  fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="20px" height="20px"><path d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"/></svg></div>
                    </div>
                    <div className="mt-5">
                        <div className="mt-3 ">
                            <div className="flex text-center ml-[40%]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#F8BF60'  width='24px' height='24px' viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/> </g> </svg>
                                <label className="text-[#F8BF60]">70&nbsp;</label>
                                <label className="text-white text-sm">Username12345</label>
                            </div>
                            <div className="text-white text-center text-sm mt-1">
                                <label>Joined on September 1, 2021 (2 Weeks Ago)</label>
                            </div>
                            <div className="flex text-[#F8BF60] ml-[15%] items-center mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#F8BF60'  width='24px' height='24px' viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/> </g> </svg>
                                <label className="font-bold">175</label>
                                <label className="bg-[#F8BF60] w-10 h-3 ml-2 -skew-x-12 gap-2"></label>
                                <label className="bg-[#F8BF60] w-10 h-3 ml-2 -skew-x-12 gap-2"></label>
                                <label className="bg-[#F8BF60] w-10 h-3 ml-2 -skew-x-12 gap-2"></label>
                                <label className="bg-[#F8BF60] w-10 h-3 ml-2 -skew-x-12 gap-2"></label>
                                <label className="bg-[#F8BF60] w-10 h-3 ml-2 -skew-x-12 gap-2"></label>
                                <label className="bg-[#F8BF60] w-10 h-3 ml-2 -skew-x-12 gap-2"></label>
                                <label className="bg-[#F8BF60] w-10 h-3 ml-2 -skew-x-12 gap-2"></label>
                                <label className="bg-[#1C2127] w-10 h-3 ml-2 -skew-x-12 gap-2 border border-[#F8BF60]"></label>
                                <label className="bg-[#1C2127] w-10 h-3 ml-2 -skew-x-12 gap-2 mr-2 border border-[#F8BF60]"></label>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#F8BF60'  width='24px' height='24px' viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/> </g> </svg>
                                <label className="font-bold ">176</label>
                            </div>
                            <hr className=" mt-3 w-[90%] mr-auto ml-auto border-black"></hr>
                            <div className="text-center items-center mt-3 flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#F8BF60' className=" mr-0 ml-[30%]"width="24px" height="20px" viewBox="0 0 512 512"><path d="M47.5,104H432V51.52a16,16,0,0,0-19.14-15.69l-368,60.48a16,16,0,0,0-12,10.47A39.69,39.69,0,0,1,47.5,104Z"/><path d="M463.5,128H47.5a16,16,0,0,0-16,16V432a16,16,0,0,0,16,16h416a16,16,0,0,0,16-16V144A16,16,0,0,0,463.5,128ZM368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z"/><path d="M31.33,259.5V116c0-12.33,5.72-18.48,15.42-20,35.2-5.53,108.58-8.5,108.58-8.5s-8.33,16-27.33,16V128c18.5,0,31.33,23.5,31.33,23.5L84.83,236Z"/></svg>
                                <label className="text-[#F8BF60] font-bold mr-[22%]">TIP</label>
                                <svg fill="#F8BF60" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="24px" height="24px"><path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 36.249446 48.517408 40.147389 46.054688 43.226562 L 20.773438 17.945312 C 23.852611 15.482592 27.750554 14 32 14 z M 17.945312 20.773438 L 43.226562 46.054688 C 40.147389 48.517408 36.249446 50 32 50 C 22.059 50 14 41.941 14 32 C 14 27.750554 15.482592 23.852611 17.945312 20.773438 z"/></svg>
                                <label className="text-[#F8BF60] font-bold mr-[30%]">BLOCK</label>
                            </div>
                            <hr className=" mt-3 w-[90%] mr-auto ml-auto border-black"></hr>
                            <div className="w-[90%] grid grid-cols-7 gap-1 mt-5 items-center  mr-auto ml-auto">
                                <label className="bg-[#F8BF60] text-black h-7 font-bold uppercase text-sm text-center pt-1 rounded-tl">games</label>
                                <label className="bg-[#F8BF60] text-black h-7 font-bold uppercase text-sm text-center pt-1">bets</label>
                                <label className="bg-[#F8BF60] text-black h-7 font-bold uppercase text-sm text-center pt-1">wacered</label>
                                <label className="bg-[#F8BF60] text-black h-7 font-bold uppercase text-sm text-center pt-1">profit</label>
                                <label className="bg-[#F8BF60] text-black h-7 font-bold uppercase text-sm text-center pt-1">profit ath</label>
                                <label className="bg-[#F8BF60] text-black h-7 font-bold uppercase text-sm text-center pt-1">balance</label>
                                <label className="bg-[#F8BF60] text-black h-7 font-bold uppercase text-sm text-center pt-1 rounded-tr">balance ath</label>
                            </div>
                            <div className="w-[90%] grid grid-cols-7 gap-1 mt-1 items-center  mr-auto ml-auto">
                                <label className="bg-[#1C2127] text-white h-7 font-bold  text-sm text-center pt-1">777,777</label>
                                <label className="bg-[#1C2127] text-white h-7 font-bold  text-sm text-center pl-2 pt-1">trayr3750</label>
                                <label className="bg-[#1C2127] text-white h-7 font-bold  text-sm text-center pt-1 flex items-center pl-1 gap-1"><img src={Dia} className="w-4 h-4"></img>777,777,77</label>
                                <label className="bg-[#1C2127] text-[#F8BF60] h-7 font-bold  text-sm text-center  pt-1 flex items-center pl-1 gap-1"><img src={Dia} className="w-4 h-4"></img>777,777,77</label>
                                <label className="bg-[#1C2127] text-[#F8BF60] h-7 font-bold  text-sm text-center  pt-1 flex items-center pl-1 gap-1"><img src={Dia} className="w-4 h-4"></img>777,777,77</label>
                                <label className="bg-[#1C2127] text-[#F8BF60] h-7 font-bold  text-sm text-center  pt-1 flex items-center pl-1 gap-1"><img src={Dia} className="w-4 h-4"></img>777,777,77</label>
                                <label className="bg-[#1C2127] text-[#F8BF60] h-7 font-bold  text-sm text-center  pt-1 flex items-center pl-1 gap-1"><img src={Dia} className="w-4 h-4"></img>777,777,77</label>
                            </div>
                            <div className="flex mt-5 text-center ml-[37%]">
                                <button className="w-28 h-10 ml-5 rounded-l-md pl-5 bg-[#1C2127] font-medium ">PROFIT</button><svg className="w-10 h-10 mr-1 bg-[#1C2127] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 14l-4-4h8z"/> </g> </svg>
                            </div>
                            <div className="w-[90%] rounded-md h-[300px] bg-[#1C2127] mt-5 ml-auto mr-auto">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserStatus