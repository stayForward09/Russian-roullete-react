import React from "react";
import Top from "../layout/Top";
import Body from "../layout/Body";
import Header from "../layout/Header";
import Control from "../layout/Control";
import RightChat from "../layout/RightChat";
const MainPage = () => {
    return(
        <React.Fragment>
            <div className="bg-[#141117] h-screen grid grid-cols-6">
                <div className="col-span-5 max-h-screen space-y-1">
                    <div className="h-[5vh]"><Header /></div>
                    <div className="h-[5vh]"></div>
                    <div className="h-[5vh]"><Top /></div>
                    <div className="h-[73vh] overflow-y-auto"><Body /></div>
                    <div className="h-[10vh] overflow-hidden"><Control /></div>
                </div>
                <div>
                    <RightChat />
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainPage