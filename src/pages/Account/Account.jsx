import React ,{useState} from "react";
import "./account.css"
import Dia from '../../assets/dia.png'
const Account=()=>{
    const [clicked,setClicked]=useState([true,false,false])
    const [bet,setBet]=useState(true)
    const showModal=()=>{
        document.getElementById('playModal').classList.add('hidden')
    }
    const handleClick=(e)=>{
        if(e.target.id==='security'){
            setClicked([true,false,false])
        }
        if(e.target.id==='transaction'){
            setClicked([false,true,false])
        }
        if(e.target.id==='stats'){
            setClicked([false,false,true])
        }
        if(e.target.id==='bet'){
            setBet(true)
        }
        if(e.target.id==='transactions'){
            setBet(false)
        }
    }
    return(
        <div className=" h-screen w-screen bg-[#141117]">
            <div className="account rounded-xl">
                <div className=" flex">
                    <label className="mt-10  text-2xl font-bold ml-[43%]">ACCOUNT</label>
                    {/* <div onClick={showModal} className="mt-5 ml-auto mr-5"><svg  fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="24px" height="24px"><path d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"/></svg></div> */}
                    <div className="mt-5 ml-auto mr-5"><svg  fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="24px" height="24px"><path d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"/></svg></div>

                </div>
                <div className="mt-8 text-center ">
                    <button id='security' onClick={handleClick} className={clicked[0]?"text-md border-b-4 text-center ml-auto font-bold border-[#F8BF60] w-16 h-8 bg-inherit text-[#F8BF60] mr-8":"text-md text-center ml-auto mr-8 font-bold w-16 h-8 bg-inherit text-[#A3A09B]"}>Security</button>
                    <button id='transaction' onClick={handleClick} className={clicked[1]?"text-md border-b-4 text-center font-bold border-[#F8BF60] w-24 h-8 bg-inherit text-[#F8BF60] mr-8":"text-md text-center mr-8 font-bold w-24 h-8 bg-inherit text-[#A3A09B]"}>Transactions</button>
                    <button id='stats' onClick={handleClick} className={clicked[2]?"text-md border-b-4 text-center font-bold border-[#F8BF60] w-10 h-8 bg-inherit text-[#F8BF60] mr-auto":"text-md text-center mr-auto font-bold w-10 h-8 bg-inherit text-[#A3A09B]"}>Stats</button>
                </div>
                <hr className="border-[#3C3F42] border-y-2 w-[85%] ml-auto mr-auto -mt-1"></hr>
                {clicked[0]?
                    <div className="w-[85%] mt-5 ml-auto mr-auto">
                        <div className="flex">
                            <button className="font-bold text-md">Password</button>
                            <button className="font-bold text-md ml-auto text-[#F8BF60]">EDIT</button>
                        </div>
                        <input type="password" className="mt-5 rounded-md bg-inherit placeholder:text-[#3C3F42] placeholder:font-bold border border-[#3C3F42] w-full h-14 p-2 focus:border-[#090b0e]" placeholder="Enter Current Password"></input>
                        <div className="flex gap-2">
                            <input type="password" className="mt-5 placeholder:text-[#3C3F42] placeholder:font-bold rounded-md bg-inherit border border-[#3C3F42] w-full h-14 p-2 focus:border-[#090b0e]" placeholder="Enter New Password"></input>
                            <input type="password" className="mt-5 placeholder:text-[#3C3F42] placeholder:font-bold rounded-md bg-inherit border border-[#3C3F42] w-full h-14 p-2 focus:border-[#090b0e]" placeholder="Re-enter New Password"></input>
                        </div>
                        <button className="mt-5 bg-[#3C3F43] font-bold text-xl text-[#13161B] w-full h-16 border-b-8 rounded-md border-[#2C3136]">SET NEW PASSWORD</button>
                        <hr className="border-[#3C3F42] border-y-2 w-full ml-auto mr-auto mt-5"></hr>
                        <div className="flex mt-5">
                            <button className="font-bold text-md">Email</button>
                            <button className="font-bold text-md ml-auto text-[#F8BF60]">EDIT</button>
                        </div>
                        <input type="password" className="mt-5 placeholder:text-[#3C3F42] placeholder:font-bold rounded-md bg-inherit border border-[#3C3F42] w-full h-14 p-2 focus:border-[#090b0e]" placeholder="Enter Current Email (**********23@*****|.com)"></input>
                        <div className="flex gap-2">
                            <input type="password" className="mt-5 placeholder:text-[#3C3F42] placeholder:font-bold rounded-md bg-inherit border border-[#3C3F42] w-full h-14 p-2 focus:border-[#090b0e]" placeholder="Enter New Email"></input>
                            <input type="password" className="mt-5 placeholder:text-[#3C3F42] placeholder:font-bold rounded-md bg-inherit border border-[#3C3F42] w-full h-14 p-2 focus:border-[#090b0e]" placeholder="Re-enter New Email"></input>
                        </div>
                        <button className="mt-5 bg-[#3C3F43] font-bold text-xl text-[#13161B] w-full h-16 border-b-8 rounded-md border-[#2C3136]">SET NEW EMAIL</button>
                    </div>
                    :clicked[1]?
                    <div className="w-[100%] h-[90%] bg-inherit">
                        <div className="w-[90%] mt-5 ml-auto mr-auto">
                            <div className="w-full flex">
                                <label className="font-bold">Bets</label>
                                <label className="font-bold ml-auto">25,000</label>
                            </div>
                            <div className="w-full flex mt-3">
                                <label className="font-bold">Total Wagered</label>
                                <label className="font-bold ml-auto flex items-center">25,000<img src={Dia} alt="logo" className="h-4 w-4 mt-4 mb-3 ml-1"></img></label>
                            </div>
                            <div className="w-full flex -mt-1">
                                <label className="font-bold">Net Profit</label>
                                <label className="font-bold ml-auto flex items-center text-[#F8BF60]">25,000<img src={Dia} alt="logo" className="h-4 w-4 mt-4 mb-3 ml-1"></img></label>
                            </div>
                            <div className="w-full flex -mt-1">
                                <label className="font-bold">Profit (All-Time High)</label>
                                <label className="font-bold ml-auto flex items-center text-[#F8BF60]">25,000<img src={Dia} alt="logo" className="h-4 w-4 mt-4 mb-3 ml-1"></img></label>
                            </div>
                            <hr className="border-[#3C3F42] border-y-2 w-[105%] -ml-4 mt-1"></hr>
                            <div className="w-full flex mt-5 items-center">
                                <label className="font-bold">Hide stats from public</label>
                                <input   type="checkbox"  className="w-4 h-4 bg-[#F8BF60] focus:bg-[#F8BF60] rounded-md ml-auto" />
                            </div>
                            <hr className="border-[#3C3F42] border-y-2 w-[105%] -ml-4 mt-5"></hr>
                            <div className="mt-5 flex text-center gap-16">
                                <button id='bet' onClick={handleClick} className={bet?"text-[#F8BF60] font-bold bg-inherit border-none w-6 h-4 text-center ml-auto":"text-white font-bold bg-inherit border-none w-6 h-4 text-center ml-auto"}>Bets</button>
                                <button id='transactions' onClick={handleClick} className={bet ? "text-white font-bold bg-inherit border-none w-6 h-4 text-center mr-auto" : "text-[#F8BF60] font-bold bg-inherit border-none w-6 h-4 text-center mr-auto"}>Transactions</button>
                            </div>
                            <table className="table-fixed w-[105%] -ml-4 mt-8 divide-y-8 divide-[#191E24]">
                                <thead className="bg-[#24292F] h-10 rounded-lg">
                                    <tr>
                                        <th>Date</th>
                                        <th>GameID</th>
                                        <th>Bet ID</th>
                                        <th>Bet</th>
                                        <th>x</th>
                                        <th>Win</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-[#24292F] h-[350px] text-sm text-center">
                                    <tr className=" rounded-md h-[50px] ">
                                        <td>Mon, 09 Nav 2020 23:40:04 GMT (2 minutes ago)</td>
                                        <td className="text-[#F8BF60] p-2">GAME # 10292357</td>
                                        <td className="text-[#F8BF60] p-3">BET #&nbsp; 10292357</td>
                                        <td className="">1000&nbsp;<img src={Dia} alt="diamond" className=" w-4 h-4 text-center"></img></td>
                                        <td className="text-[#F8BF60]">15x</td>
                                        <td className="text-[#F8BF60]">15,000 </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :<div></div>
                }
            </div>
        </div>
    )
}
export default Account