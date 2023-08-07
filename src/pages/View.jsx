import React from "react";
import Gun from "../assets/gun.png"

const View = () => {
    return(
        <>
            <div className="h-screen w-screen grid grid-cols-2">
                <div className="h-screen bg-[#141117] items-center justify-center text-center space-y-2">
                    <div className="mt-4 mx-16 ">
                        <a href="/home"><button className="bg-black text-left px-4 w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">1. Main Page</button></a>
                    </div>
                    <div className="my-8 mx-16">
                        <a href="/autoplay"><button className="bg-black text-left px-4  w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">2. Autoplay Menu</button></a>
                    </div>
                    <div className="my-8 mx-16">
                        <a href="/start"><button className="bg-black text-left px-4  w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">3. Autoplay Setting</button></a>
                    </div>
                    <div className="my-8 mx-16">
                        <a href="/login_register"><button className="bg-black text-left px-4  w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">4. Sign Up/Sign In</button></a>
                    </div>
                    <div className="my-8 mx-16">
                        <a href="/betlist"><button className="bg-black text-left px-4  w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">5. Bet List</button></a>
                    </div>
                    <div className="my-8 mx-16">
                        <a href="/userstatus"><button className="bg-black text-left px-4  w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">6. User Status</button></a>
                    </div>
                    <div className="my-8 mx-16">
                        <a href="/account"><button className="bg-black text-left px-4  w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">7. Account Modal</button></a>
                    </div>
                    <div className="my-8 mx-16">
                        <a href="/gameinfo"><button className="bg-black text-left px-4  w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">8. Game Information</button></a>
                    </div>
                    <div className="my-8 mx-16">
                        <a href="/betinfo"><button className="bg-black text-left px-4  w-96 h-20 rounded-r-full text-white hover:text-black hover:bg-[#f8bf60] text-4xl font-bold">9. Bet Information</button></a>
                    </div>
                </div>
                <div className="h-screen"><img className="h-screen w-full" src={Gun} alt="gun"/></div>
            </div>
        </>
    )
}

export default View