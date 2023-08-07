import React, { useEffect ,useState} from "react";
import Logo from "../../assets/rulette_logo.png"
import Login from "./Login"
import Register from "./Register";
import '../Modal/modal.css'
const Wrapper=()=>{
    const [isSignIn,setIsSignIn]=useState(true)
    useEffect(()=>{
        const first=document.getElementById('first')
        first.focus()
    },[])
    const handleClick=(e)=>{
        
        if(e.target.id==="first"){
            setIsSignIn(true)
        }else if(e.target.id==="second"){
            setIsSignIn(false)
        }
    }
    const showModal=()=>{
        document.getElementById('myModal').classList.add('hidden')
    }
    return(

            <div className=" w-[500px] h-[550px]  bg-[#2C3137] mt-12 mr-auto ml-auto rounded-xl divide-y-2 divide-gray-950" >
                <div className="flex w-full">
                    <div><img src={Logo} alt="logo" className="h-10 w-26 mt-5 text-left ml-5 pt-1 "></img></div>
                    <div className="ml-72 mt-5 hover:cursor-pointer" onClick={showModal}><svg  fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 21.734375 19.640625 L 19.636719 21.734375 C 19.253906 22.121094 18.628906 22.121094 18.242188 21.734375 L 13 16.496094 L 7.761719 21.734375 C 7.375 22.121094 6.746094 22.121094 6.363281 21.734375 L 4.265625 19.640625 C 3.878906 19.253906 3.878906 18.628906 4.265625 18.242188 L 9.503906 13 L 4.265625 7.761719 C 3.882813 7.371094 3.882813 6.742188 4.265625 6.363281 L 6.363281 4.265625 C 6.746094 3.878906 7.375 3.878906 7.761719 4.265625 L 13 9.507813 L 18.242188 4.265625 C 18.628906 3.878906 19.257813 3.878906 19.636719 4.265625 L 21.734375 6.359375 C 22.121094 6.746094 22.121094 7.375 21.738281 7.761719 L 16.496094 13 L 21.734375 18.242188 C 22.121094 18.628906 22.121094 19.253906 21.734375 19.640625 Z"/></svg></div>
                </div>
                <div className="mt-5 text-center">
                    <button id='first' className="w-52 h-10 outline-none bg-[#1C2127] mt-5 border-r-2 border-[#2C3137] text-white ml-auto mr-0 rounded-l-md  uppercase font-bold focus:text-black focus:bg-[#F8BF60] " onClick={handleClick}>SIGN in</button>
                    <button id="second" className="w-52 h-10  bg-[#1C2127] mt-5  text-white ml-0 mr-auto rounded-r-md  uppercase font-bold focus:text-black focus:bg-[#F8BF60] " onClick={handleClick}>create an account</button>
                    <hr className="mt-5 h-0.5 bg-gray-950 border-none w-[83%] mr-auto ml-auto"></hr>
                    <div className="mt-5 ">
                        {isSignIn?<Login />:<Register />}
                    </div>
                    <div className="mt-3 flex  items-center">
                        <hr className="h-0.5 mr-2 bg-gray-950 ml-auto border-none w-[38%]"></hr>
                        <label className="text-white font-medium mr-2 ">OR</label>
                        <hr className="h-0.5 bg-gray-950  mr-auto border-none w-[37%]"></hr>
                    </div>
                    <div className="mt-5 flex  text-center">
                        <button className="w-[26%] bg-white h-10 ml-auto mr-3 rounded-md "><svg className="w-[30px] pb-5 ml-auto mr-auto" fill="#1A1A1A" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 32.521484 6 C 18.158484 6 6.515625 17.642 6.515625 32 C 6.515625 46.358 18.158484 58 32.521484 58 C 54.209484 58 59.098453 37.865969 57.064453 27.667969 L 51.181641 27.667969 L 49.269531 27.667969 L 32.515625 27.667969 L 32.515625 36.333984 L 49.279297 36.333984 C 47.351759 43.804816 40.588119 49.332031 32.515625 49.332031 C 22.943625 49.332031 15.181641 41.572 15.181641 32 C 15.181641 22.428 22.943625 14.667969 32.515625 14.667969 C 36.868625 14.667969 40.834906 16.283594 43.878906 18.933594 L 50.033203 12.779297 C 45.410203 8.5672969 39.266484 6 32.521484 6 z"/></svg></button>
                        <button className="w-[26%] bg-white h-10  mr-3 rounded-md  flex text-center items-center"><svg xmlns="http://www.w3.org/2000/svg" className=" mr-0" width="24px" height="15px" viewBox="0 0 512 512"><path d="M47.5,104H432V51.52a16,16,0,0,0-19.14-15.69l-368,60.48a16,16,0,0,0-12,10.47A39.69,39.69,0,0,1,47.5,104Z"/><path d="M463.5,128H47.5a16,16,0,0,0-16,16V432a16,16,0,0,0,16,16h416a16,16,0,0,0,16-16V144A16,16,0,0,0,463.5,128ZM368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z"/><path d="M31.33,259.5V116c0-12.33,5.72-18.48,15.42-20,35.2-5.53,108.58-8.5,108.58-8.5s-8.33,16-27.33,16V128c18.5,0,31.33,23.5,31.33,23.5L84.83,236Z"/></svg><label className="font-bold text-[11px]  mr-0">CONNECT WALLET</label></button>
                        <button className="w-[26%] bg-white h-10 mr-auto rounded-md"><svg className="ml-auto mr-auto" xmlns="http://www.w3.org/2000/svg" width="64px" height="24px" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></button>
                    </div>
                </div>
                {isSignIn?
                    <div className="mt-10 flex items-center text-center divide-x-2 divide-gray-950">
                        <button className="bg-[#2C3137] w-[50%] h-[48px] rounded-bl-xl text-[#F1BA5F] text-lg font-bold ">Forgot Password?</button>
                        <button className="bg-[#2C3137] w-[50%] h-[48px] rounded-br-xl text-[#F1BA5F] text-lg font-bold">Create an Account?</button>
                    </div>:
                    <div className="mt-5 flex items-center text-center divide-x-2 divide-gray-950">
                        <button className="bg-[#2C3137] w-[50%] h-[48px] rounded-bl-xl text-[#F1BA5F] text-lg font-bold ">Forgot Password?</button>
                        <button className="bg-[#2C3137] w-[50%] h-[48px] rounded-br-xl text-[#F1BA5F] text-lg font-bold">Create an Account?</button>
                    </div>
                }
            </div>

    )
}
export default Wrapper