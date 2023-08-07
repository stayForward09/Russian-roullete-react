import React from "react";

const Bar = () => {
    return(
        <>
            <div className="h-[100%]">
                <div className="h-1/2 py-1 grid grid-cols-12 items-center">
                    <div className="flex ml-auto mr-3">
                            <div className=" text-red-600 font-bold text-sm">LEVEL 74</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 ml-1 mt-1 bi bi-star-fill fill-red-600" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                    </div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] bg-[#f8bf60] -skew-x-[30deg] shadow-sm shadow-[#d89f80]"></div>
                    <div className="w-[90%] h-[100%] border-[#f8bf60] border -skew-x-[30deg]"></div>
                    <div className="flex ml-0 mr-auto ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill fill-[#f8bf60]" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                        <div className=" text-[#f8bf60] ml-1 font-bold text-sm">LEVEL 75</div>
                    </div>
                </div>

                <div className=" h-1/2 items-center flex">
                    <div className="w-1/2 grid grid-cols-11 items-center">
                        <div className="ml-auto mr-3 text-center">
                                <div className=" text-white font-bold text-m">200%</div>
                                <div className="text-[9px] -mt-2 text-white">CURRENT XP</div>
                        </div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] -skew-x-[30deg]"></div>
                    </div>
                    <div className="w-1/2 grid grid-cols-7 items-center">
                        <div className="ml-auto mr-auto text-center">
                                <div className=" text-white font-bold text-md">250%</div>
                                <div className="text-[9px] -mt-2 text-white">BONUS XP</div>
                        </div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] rounded-md"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] rounded-md"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] rounded-md"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] rounded-md"></div>
                        <div className="w-[90%] h-[40%] bg-[#f8bf60] rounded-md"></div>
                        <div className="ml-0 mr-auto text-center">
                                <div className=" text-white font-bold text-md">5</div>
                                <div className="text-[9px] -mt-2 text-white">STREAK</div>
                        </div>
                    </div>
                </div>
                
            </div>
          
        </>
    )
}

export default Bar