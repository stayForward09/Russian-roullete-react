import React, {useState} from "react";

const Test = () => {

    const [rounds, setRounds] = useState('9999');

    const handleOptionChange = (event) => {
      setRounds(event.target.value);
    };

    const [lossLimit, setlossLimit] = useState('');

    const handleOptionChange1 = (event) => {
      setlossLimit(event.target.value);
    };

    const [profitLimit, setprofitLimit] = useState('');

    const handleOptionChange2 = (event) => {
        setprofitLimit(event.target.value);
      };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    };

    const[betOnWin, setBetOnWin] = useState(75);

    const handleReset = () => {
        setBetOnWin(0);
    }

    const handlePlus = () => {
        setBetOnWin(betOnWin+1);
    }

     const[betOnLoss, setBetOnLoss] = useState(100);

    const handleReset1 = () => {
        setBetOnLoss(0);
    }

    const handlePlus1 = () => {
        setBetOnLoss(betOnLoss+1);
    }

    const [isExpanded, setExpanded] = useState(true);

    const handleExpanded = () => {
        setExpanded(!isExpanded);
    }

    return(
        <div className=" h-screen w-screen bg-[#141117]">
            <div className="h-screen items-center grid grid-cols-5 ">
                <div></div>
                <div></div>
                
                <div className="bg-[#2C3137] rounded-xl">
                    <div className="bg-[#f8bf60] w-full h-2/3  overflow-hidden rounded-t-lg px-4 py-4">

                        <div className="flex mb-2">
                            <div className="font-bold text-lg">AUTOPLAY</div>
                            {isExpanded?
                            (<button className=" py-1 ml-auto mr-0 rounded-lg  items-center text-white font-semibold flex text-sm bg-black px-2 hover:bg-slate-800" onClick={handleExpanded}><div className="mr-1">ADVANCED</div> <svg xmlns="http:;//www.w3.org/2000/svg" fill="currentColor" className="h-4 w-4 bi bi-chevron-down stroke-white mt-1" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></button>):
                            (<button className=" py-1 ml-auto mr-0 rounded-lg  items-center text-black font-bold flex text-sm bg-white px-2 hover:bg-slate-200" onClick={handleExpanded}><div className="mr-1">ADVANCED</div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-up h-4 w-4 stroke-black mt-1" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/> </svg></button>)}
                        </div>
                         
                            <div className="font-bold text-sm">NUMBER OF ROUNDS</div>
                            <div className="grid grid-cols-4 grid-rows-2 gap-2 px-0 py-2 text-center items-center">
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${rounds === '10' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="10"
                                    checked={rounds === '10'}
                                    onChange={handleOptionChange}
                                    className="hidden"
                                    />
                                    10
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${rounds === '25' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="25"
                                    checked={rounds === '25'}
                                    onChange={handleOptionChange}
                                    className="hidden"
                                    />
                                    25
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${rounds === '50' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="50"
                                    checked={rounds === '50'}
                                    onChange={handleOptionChange}
                                    className="hidden"
                                    />
                                    50
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${rounds === '75' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="75"
                                    checked={rounds === '75'}
                                    onChange={handleOptionChange}
                                    className="hidden"
                                    />
                                    75
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${rounds === '100' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="100"
                                    checked={rounds === '100'}
                                    onChange={handleOptionChange}
                                    className="hidden"
                                    />
                                    100
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${rounds === '500' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="500"
                                    checked={rounds === '500'}
                                    onChange={handleOptionChange}
                                    className="hidden"
                                    />
                                    500
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-bold cursor-pointer ${rounds === '9999' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="9999"
                                    checked={rounds === '9999'}
                                    onChange={handleOptionChange}
                                    className="hidden"
                                    />
                                    &infin;
                                </label>
                                <label className={` text-sm p-0.5 group flex items-center justify-center rounded-md font-bold cursor-pointer ${rounds === 'custom' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="custom"
                                    checked={rounds === 'custom'}
                                    onChange={handleOptionChange}
                                    className="hidden"
                                    />
                                    CUSTOM
                                </label>

                        
                            </div>
                        {isExpanded&&
                        (
                        <div>  
                            <div className="font-bold text-sm">TOTAL LOSS LIMIT</div>
                            <div className="grid grid-cols-3 grid-rows-2 gap-2 px-0 py-2 text-center items-center">
                                <label className={`group flex items-center justify-center rounded-md font-bold cursor-pointer ${lossLimit === '9999' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="9999"
                                    checked={lossLimit === '9999'}
                                    onChange={handleOptionChange1}
                                    className="hidden"
                                    />
                                    &infin;
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${lossLimit === '5bet' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="5bet"
                                    checked={lossLimit === '5bet'}
                                    onChange={handleOptionChange1}
                                    className="hidden"
                                    />
                                    X5 BET
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${lossLimit === '20bet' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="20bet"
                                    checked={lossLimit === '20bet'}
                                    onChange={handleOptionChange1}
                                    className="hidden"
                                    />
                                    X20 BET
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${lossLimit === '50bet' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="50bet"
                                    checked={lossLimit === '50bet'}
                                    onChange={handleOptionChange1}
                                    className="hidden"
                                    />
                                    X50 BET
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${lossLimit === '100bet' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="100bet"
                                    checked={lossLimit === '100bet'}
                                    onChange={handleOptionChange1}
                                    className="hidden"
                                    />
                                    X100 BET
                                </label>
                                <label className={`group flex p-0.5 items-center justify-center text-sm rounded-md font-bold cursor-pointer ${lossLimit === 'custom' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="custom"
                                    checked={lossLimit === 'custom'}
                                    onChange={handleOptionChange1}
                                    className="hidden"
                                    />
                                    CUSTOM
                                </label>
                        
                            </div>

                            <div className="font-bold text-sm">TOTAL PROFIT LIMIT</div>
                            <div className="grid grid-cols-3 grid-rows-2 gap-2 px-0 py-2 text-center items-center">
                                <label className={`group flex items-center justify-center rounded-md font-bold cursor-pointer ${profitLimit === '9999' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="9999"
                                    checked={profitLimit === '9999'}
                                    onChange={handleOptionChange2}
                                    className="hidden"
                                    />
                                    &infin;
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${profitLimit === '5bet' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="5bet"
                                    checked={profitLimit === '5bet'}
                                    onChange={handleOptionChange2}
                                    className="hidden"
                                    />
                                    X5 BET
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${profitLimit === '20bet' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="20bet"
                                    checked={profitLimit === '20bet'}
                                    onChange={handleOptionChange2}
                                    className="hidden"
                                    />
                                    X20 BET
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${profitLimit === '50bet' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="50bet"
                                    checked={profitLimit === '50bet'}
                                    onChange={handleOptionChange2}
                                    className="hidden"
                                    />
                                    X50 BET
                                </label>
                                <label className={`group flex items-center justify-center rounded-md font-semibold cursor-pointer ${profitLimit === '100bet' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="100bet"
                                    checked={profitLimit === '100bet'}
                                    onChange={handleOptionChange2}
                                    className="hidden"
                                    />
                                    X100 BET
                                </label>
                                <label className={`group flex p-0.5 items-center justify-center text-sm rounded-md font-bold cursor-pointer ${profitLimit === 'custom' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    <input
                                    type="radio"
                                    value="custom"
                                    checked={profitLimit === 'custom'}
                                    onChange={handleOptionChange2}
                                    className="hidden"
                                    />
                                    CUSTOM
                                </label>
                        
                            </div>

                            <div className="font-bold text-sm">STOP WHEN BONUS WON</div>
                            <div className="flex items-center py-2">
                                <div className={`font-bold text-sm ${!isChecked ? 'text-white' : ''}`}>OFF</div>
                                <label class="relative inline-flex items-center cursor-pointer ml-auto mr-auto">
                                    <input type="checkbox"  checked={isChecked} onChange={handleCheckboxChange} value="" class="sr-only peer" />
                                    <div class=" w-[13vw] h-3 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-[10vw] peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-[3vw] after:duration-500 after:transition-all dark:border-gray-600"></div>
                                </label>
                                <div className={`font-bold ml-auto mr-0 text-sm ${!isChecked? '' : 'text-white'}`}>ON</div>
                            </div>

                            <div className="font-bold text-sm">ADJUST BET ON WIN</div>   
                            <div className="flex py-2 text-center items-center">
                                <button className="font-semibold border-black border-2 p-1 text-sm rounded-l-md hover:bg-black hover:text-white" onClick={handleReset}>RESET</button>
                                <button className="font-semibold border-black border-r-2 p-1 text-sm border-y-2 hover:bg-black hover:text-white" onClick={handlePlus}>INCREASE</button>
                                <div className="font-bold  p-1 border-[#fcdfb0] border-2 text-sm rounded-r-md bg-[#fcdfb0] w-full flex"><div className="ml-auto mr-auto">{betOnWin}</div><div className='mr-0'>%</div></div>
                            </div>

                            <div className="font-bold text-sm">ADJUST BET ON LOSS</div>   
                            <div className="flex py-2 text-center items-center">
                                <button className="font-semibold border-black border-2 p-1 text-sm rounded-l-md hover:bg-black hover:text-white" onClick={handleReset1}>RESET</button>
                                <button className="font-semibold border-black border-r-2 p-1 text-sm border-y-2 hover:bg-black hover:text-white" onClick={handlePlus1}>INCREASE</button>
                                <div className="font-bold  p-1 border-[#fcdfb0] border-2 text-sm rounded-r-md bg-white w-full flex"><div className="ml-auto mr-auto">{betOnLoss}</div><div className='mr-0'>%</div></div>
                            </div>
                        </div>
                        )
                        }
                    </div>
                    <div className="items-center flex w-full mt-1">
                        <button className="ml-auto mr-0.5 h-16 w-[20vw] text-lg font-bold bg-[#f8bf60] items-center text-center  rounded-l-md hover:bg-[#fedf90] text-black shadow-md shadow-yellow-700 justify-center"><div className="-mb-2">MAX</div>BET</button>
                        <a href='/start'><button className="h-16 bg-[#f8bf60] hover:bg-[#fedf90] text-black text-4xl font-bold w-44 shadow-md shadow-yellow-600">START</button></a>
                        <button className="mr-auto ml-0.5 h-16 w-[20vw] bg-[#f8bf60] items-center text-center font-bold text-4xl rounded-r-md hover:bg-[#fedf90] text-black shadow-md shadow-yellow-600 justify-center">X</button>
                    </div>
                </div>

                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Test