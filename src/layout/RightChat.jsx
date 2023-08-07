import React from "react";
import Dia from "../assets/dia.png"

const RightChat = () => {
    return(
        <>
            <div className="bg-[#20252b] h-screen">
                <div className="h-[5vh] items-center text-center shadow-md shadow-black grid grid-cols-6">
                    <button ><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-white bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg></button>
                    <label className="col-span-4 ml-auto mr-auto font-semibold text-white text-md">English Chat Room</label>
                    <button  className="mr-2 ml-auto hover:text-slate-300"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 text-white bi bi-arrow-up-right-square" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/> </svg></button>
                </div>
                
                <div className="h-[84vh] py-2 px-2 space-y-0.5 overflow-y-auto">
                    <p className="font-semibold">
                        <span className="inline-flex text-black bg-[#9c30a0] h-5 rounded-md px-2 ml-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>54</span>
                        </span>
                        <span className=" text-[#9c30a0] ml-2 text-wh">Kusti</span><span className="text-white">: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas.</span>
                    </p>
                    <p className="font-semibold">
                        <span className="inline-flex text-black bg-[#1a6652] h-5 rounded-md px-2 ml-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>24</span>
                        </span>
                        <span className="text-white">
                            <span className=" text-[#1a6652] ml-2">Kusti</span>:  sem integer vitae justo eget. Vulputate odio ut enim blandit volutpat maecenas
                        </span>
                    </p>
                    <p className="font-semibold">
                        <span className="inline-flex text-black bg-[#f8bf60] h-5 rounded-md px-2 ml-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>439</span>
                        </span>
                        <span className="text-white">
                            <span className=" text-[#f8bf60] ml-2">Kusti</span>:  lobortis scelerisque fermentum dui faucibus in ornare. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Purus in mollis nunc sed id.
                        </span>
                    </p>
                    <p className="font-semibold">
                        <span className="inline-flex text-black bg-[#992222] h-5 rounded-md px-2 ml-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>117</span>
                        </span>
                        <span className="text-white">
                            <span className=" text-[#992222] ml-2">Kusti</span>:   urna molestie at elementum eu facilisis. Nec nam aliquam sem et tortor consequat
                        </span>
                    </p>

                    <div className="bg-[#383c41] h-16 flex">
                        <div className="h-16 w-2 ml-0 mr-auto bg-[#f8bf60]"></div>
                        <div className="items-center justify-center mt-auto mb-auto">
                            <div className="text-[#f8bf60]">RUSSIAN RULETTE(SOLO|NORMAL)</div>
                            <div className="font-semibold flex">
                                <span className="flex text-black bg-[#f8bf60] h-5 rounded-md px-2 ml-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                                    <span>439</span>
                                </span>
                                <span className="text-white flex">
                                    <span className=" text-[#f8bf60] ml-1">Kusti</span>: Just Won<span className="text-[#f8bf60] ml-1">5297.36</span>
                                     <img src={Dia} alt="logo" className="h-4 text-left mt-1 grid-cols-4 ml-1"></img>
                                </span>
                            </div>
                        </div>
                        <div className="h-16 w-2 mr-0 ml-auto bg-[#f8bf60]"></div>
                    </div>

                    <p className="font-semibold mt-1">
                        <span className="inline-flex bg-[#0a0909] h-5 rounded-md px-2 ml-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-3 h-3 fill-white"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
                            <span className="text-white">ADMIN</span>
                        </span>
                        <span className="inline-flex text-black bg-[#992222] h-5 rounded-md px-2 ml-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>117</span>
                        </span>
                        <span className="text-white">
                            <span className=" text-[#992222] ml-2">Kusti</span>
                            :ut lectus arcu at varius. Id venenatis a condimentum vitae sapien pellentesque W ADMIN bibendum
                        </span>
                    </p>

                    <p className="font-semibold">
                        <span className="inline-flex bg-[#f6f5f5] h-5 rounded-md px-2 ml-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
                            <span className="text-black">MODERATOR</span>
                        </span>
                        <span className="inline-flex text-black bg-[#f8bf60] h-5 rounded-md px-2 ml-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>974</span>
                        </span>
                        <span className="text-white">
                            <span className=" text-[#f8bf60] ml-2">Kusti</span>
                            :isi porta lorem mollis aliquam ut porttitor leo
                        </span>
                    </p>

                    <p className="font-semibold">
                        <span className="inline-flex text-black bg-[#1a6652] h-5 rounded-md px-2 ml-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>188</span>
                        </span>
                        <span className="text-white">
                            <span className=" text-[#1a6652] ml-2">Kusti</span>:  urna molestie at elementum eu facilisis. Nec nam aliquam sem et tortor consequat
                        </span>
                    </p>

                    <p className="font-semibold">
                        <span className="inline-flex text-black bg-[#f8bf60] h-5 rounded-md px-2 ml-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-3 h-3 mt-1 bi bi-star-fill" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                            <span>1250</span>
                        </span>
                        <span className="text-white">
                            <span className=" text-[#f8bf60] ml-2">Kusti</span>:  et malesuada fames ac turpis egestas maecenas.
                        </span>
                    </p>
                </div>

                <div className="h-[11vh] overflow-hidden text-center">
                    <div className="h-12 ml-1 mr-1 py-2 text-left  bg-[#141117] text-white font-semibold rounded-md"><label className="ml-2">Send a message</label></div>
                    <div className="flex space-x-3 mx-2 mt-2 truncate">
                        <button className="text-[#f8bf60] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16"> <circle cx="8" cy="8" r="8"/> </svg>5250</button>
                        <button className="text-[#f8bf60] items-center"><div className="bg-[#141117] px-2 py-2 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg></div></button>
                        <button className="text-[#f8bf60] items-center"><div className="bg-[#141117] px-2 py-2 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/></svg></div></button>
                        <button className="text-[#f8bf60] items-center"><div className="bg-[#141117] px-2 py-2 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg></div></button>
                        <button className="text-[#f8bf60] items-center"><div className="bg-[#141117] px-2 py-2 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></div></button>
                        <button className="bg-[#f8bf60] w-12 h-6 font-semibold text-lg rounded-md mt-1">Chat</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RightChat