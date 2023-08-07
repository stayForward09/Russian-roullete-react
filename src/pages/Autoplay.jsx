import React from "react";
import Top from "../layout/autoplay/Top";
import Body from "../layout/autoplay/Body";
import Header from "../layout/autoplay/Header";
import Control from "../layout/autoplay/Controls";
import RightChat from "../layout/RightChat";
import Bar from "../layout/autoplay/Bar";
const Autoplay = () => {
    return(
        <>
            <div className="bg-[#141117] h-screen grid grid-cols-6">
                <div className="col-span-5 max-h-screen space-y-1">
                    <div className="h-[5vh]"><Header /></div>
                    <div className="h-[5vh]"><Bar /></div>
                    <div className="h-[5vh]"><Top /></div>
                    <div className="h-[73vh] overflow-y-auto"><Body /></div>
                    <div className="h-[10vh] overflow-hidden"><Control /></div>
                </div>
                <div>
                    <RightChat />
                </div>
            </div>
        </>
    )
}

export default Autoplay