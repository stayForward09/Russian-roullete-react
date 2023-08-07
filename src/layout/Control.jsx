import React from "react";
import Dia from "../assets/dia.png";
import Modal from "../pages/Modal/Modal";
import "../pages/Modal/modal.css";

const Control = () => {
  const handleClick = () => {
    document.getElementById("playModal").classList.remove("hidden");
  };
  return (
    <>
      <div className="grid grid-cols-5 gap-1 text-center text-white mr-1">
        <div className="bg-[#2C3137] pt-1 font-semibold">
          <div>TYPE</div>
          <div className="flex mt-2">
            <button className=" ml-auto w-32 h-8 bg-[#f8bf60] items-center text-center mr-0.5 rounded-l-md hover:bg-[#fedf90] text-black shadow-md shadow-yellow-600">
              NORMAL
            </button>
            <button className=" mr-auto w-32 h-8 bg-[#0e0e0e] items-center text-center rounded-r-md hover:bg-slate-900 text-white shadow-md shadow-slate-600">
              BONUS-ONLY
            </button>
          </div>
        </div>

        <div className="bg-[#2C3137] pt-3 font-semibold">
          <div className="bg-[#0e0e0e] text-[#f8bf60] h-6 mr-1 ml-1 rounded-md -mt-2">
            $5,000.00 PROFIT ON WIN
          </div>
          <div className="flex mt-2">
            <button className="flex ml-1 w-40 h-8 bg-[#0e0e0e] items-center text-center mr-0.5 rounded-l-md hover:bg-slate-900 text-white shadow-md shadow-slate-600">
              <label className="font-md text-[11px] ml-2">Bet</label>
              <label className="ml-auto mr-1 text-white text-sm">
                777,777.77
              </label>
              <img
                src={Dia}
                alt="logo"
                className="h-4 text-left pt-1 grid-cols-4 ml-auto mr-2"
              ></img>
            </button>
            <button className=" w-20 h-8 bg-[#0e0e0e] items-center text-center hover:bg-slate-900 text-white shadow-md shadow-slate-600">
              1/2
            </button>
            <button className=" mr-1 w-20 h-8 bg-[#0e0e0e] items-center text-center rounded-r-md hover:bg-slate-900 text-white shadow-md shadow-slate-600">
              x2
            </button>
          </div>

          <div className="mt-1 grid grid-cols-4 items-center">
            <div className="flex items-center">
              <div className="bg-[#f8bf60] ml-1 h-3 w-4 rounded-sm shadow-sm shadow-yellow-600"></div>
              <div className="bg-[#f8bf60] ml-1 h-1.5 w-16 rounded-sm shadow-sm shadow-yellow-600"></div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#f8bf60] ml-1 h-3 w-4 rounded-sm shadow-sm shadow-yellow-600"></div>
              <div className="bg-[#f8bf60] ml-1 h-1.5 w-16 rounded-sm shadow-sm shadow-yellow-600"></div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#f8bf60] -ml-1 mr-0 h-5 w-10 rounded-sm shadow-sm shadow-yellow-600"></div>
              <div className="bg-[#0e0e0e] h-1.5 w-16 rounded-sm"></div>
            </div>
            <div className="flex items-center mr-1">
              <div className="bg-[#0e0e0e] ml-1 h-3 w-4 rounded-sm"></div>
              <div className="bg-[#0e0e0e] ml-1 h-1.5 w-12 rounded-sm"></div>
              <div className="bg-[#0e0e0e] ml-1 h-3 w-4 rounded-sm"></div>
            </div>
          </div>
        </div>

        <div className="bg-[#2C3137] items-center flex">
          <button
            onClick={handleClick}
            className="ml-auto mt-4 mb-4 mr-0.5 h-16 w-16 text-2xl bg-[#f8bf60] items-center text-center  rounded-l-md hover:bg-[#fedf90] text-black shadow-md shadow-yellow-700 justify-center"
          >
            <svg
              fill="#000000"
              className="w-10 h-10 ml-auto mr-auto"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
            >
              <path d="M2.5,8.9l9,5.2c0.2,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1l9-5.2c0.2-0.1,0.3-0.2,0.4-0.4C22.1,8,22,7.4,21.5,7.1l-9-5.2c-0.3-0.2-0.7-0.2-1,0l-9,5.2C2.3,7.2,2.2,7.3,2.1,7.5C1.9,8,2,8.6,2.5,8.9z M21.5,11.1L21.3,11l-8.8,5.1c-0.3,0.2-0.7,0.2-1,0L2.7,11l-0.2,0.1C2,11.4,1.9,12,2.1,12.5c0.1,0.2,0.2,0.3,0.4,0.4l9,5.2c0.3,0.2,0.7,0.2,1,0l9-5.2c0.5-0.3,0.6-0.9,0.4-1.4C21.8,11.3,21.7,11.2,21.5,11.1z M21.5,15.1L21.3,15l-8.8,5.1c-0.3,0.2-0.7,0.2-1,0L2.7,15l-0.2,0.1C2,15.4,1.9,16,2.1,16.5c0.1,0.2,0.2,0.3,0.4,0.4l9,5.2c0.3,0.2,0.7,0.2,1,0l9-5.2c0.5-0.3,0.6-0.9,0.4-1.4C21.8,15.3,21.7,15.2,21.5,15.1z" />
            </svg>
          </button>
          <a href="/autoplay">
            <button className="h-16 bg-[#f8bf60] hover:bg-[#fedf90] text-black text-4xl font-bold w-44 shadow-md shadow-yellow-600">
              PLAY
            </button>
          </a>
          <button className="mr-auto mt-4 mb-4 ml-0.5 h-16 w-16 bg-[#f8bf60] items-center text-center  rounded-r-md hover:bg-[#fedf90] text-black shadow-md shadow-yellow-600 justify-center">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              className=" mr-auto ml-auto w-9 h-9"
              viewBox="0 0 118.04 122.88"
            >
              <path d="M16.08,59.26A8,8,0,0,1,0,59.26a59,59,0,0,1,97.13-45V8a8,8,0,1,1,16.08,0V33.35a8,8,0,0,1-8,8L80.82,43.62a8,8,0,1,1-1.44-15.95l8-.73A43,43,0,0,0,16.08,59.26Zm22.77,19.6a8,8,0,0,1,1.44,16l-10.08.91A42.95,42.95,0,0,0,102,63.86a8,8,0,0,1,16.08,0A59,59,0,0,1,22.3,110v4.18a8,8,0,0,1-16.08,0V89.14h0a8,8,0,0,1,7.29-8l25.31-2.3Z" />
            </svg>
          </button>
        </div>
        <div
          id="playModal"
          className="modal hidden fixed inset-0 overflow-y-auto first:opacity-100 w-full h-full bg-black bg-opacity-80"
        >
          <div className=" opacity-100">
            <Modal />
          </div>
        </div>
        <div className="bg-[#2C3137] pt-3 font-semibold">
          <div className="flex -mt-2">
            <button className=" ml-auto w-32 h-6 bg-[#f8bf60] items-center text-center mr-0.5 rounded-l-md hover:bg-[#fedf90] text-black">
              BASE
            </button>
            <button className=" mr-auto w-32 h-6 bg-[#0e0e0e] items-center text-center rounded-r-md hover:bg-slate-900 text-white">
              BONUS
            </button>
          </div>
          <div className="flex mt-2">
            <button className="flex ml-1 w-40 h-8 bg-[#0e0e0e] items-center text-center mr-0.5 rounded-l-md hover:bg-slate-900 text-white shadow-md shadow-slate-600">
              <label className="font-sm text-[11px] ml-2">Payout</label>
              <label className="ml-auto mr-1 text-white text-sm">
                777,777.77
              </label>
              <img
                src={Dia}
                alt="logo"
                className="h-4 text-left pt-1 grid-cols-4 ml-auto mr-2"
              ></img>
            </button>
            <button className="w-20 h-8 bg-[#0e0e0e] items-center text-center hover:bg-slate-900 text-white shadow-md shadow-slate-600">
              1/2
            </button>
            <button className=" mr-1 w-20 h-8 bg-[#0e0e0e] items-center text-center rounded-r-md hover:bg-slate-900 text-white shadow-md shadow-slate-600">
              x2
            </button>
          </div>

          <div className="mt-1 grid grid-cols-7 items-center ml-1 mr-1">
            <div className="bg-[#f8bf60] h-1.5 w-full rounded-l-sm shadow-sm shadow-yellow-600"></div>
            <div className="bg-[#f8bf60] h-1.5 w-full shadow-sm shadow-yellow-600"></div>
            <div className="bg-[#f8bf60] h-1.5 w-full rounded-r-sm shadow-sm shadow-yellow-600"></div>
            <div className="bg-[#f8bf60] h-5 w-full rounded-sm shadow-sm shadow-yellow-600"></div>
            <div className="bg-[#0e0e0e] h-1.5 w-full rounded-l-sm"></div>
            <div className="bg-[#0e0e0e] h-1.5 w-full"></div>
            <div className="bg-[#0e0e0e] h-1.5 w-full rounded-r-sm"></div>
          </div>
        </div>

        <div className="bg-[#2C3137] pt-1 font-semibold">
          <div>MODE</div>
          <div className="flex mt-2">
            <button className=" ml-auto w-32 h-8 bg-[#f8bf60] items-center text-center mr-0.5 rounded-l-md hover:bg-[#fedf90] text-black shadow-md shadow-yellow-600">
              GROUP
            </button>
            <button className=" mr-auto w-32 h-8 bg-[#0e0e0e] items-center text-center rounded-r-md hover:bg-slate-900 text-white shadow-md shadow-slate-600">
              SOLO
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Control;
