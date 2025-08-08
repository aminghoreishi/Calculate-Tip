import React from "react";

function LeftSec({ setBill, setTip, tip, setSpilit, spilit }) {
  return (
    <div>
      <div className="flex flex-col justify-between  h-full">
        <h1 className="font-semibold">Calculate Tip</h1>
        <div className=" w-full">
          <label className=" font-semibold text-gray-400 text-sm " htmlFor="">
            Bill Totoal
          </label>
          <input
            className="outline-0 w-full px-2 mt-1 py-1 border-2 rounded-lg border-gray-200"
            type="text"
            name=""
            id=""
            maxLength={7}
            onChange={(e) => {
              if (
                e.target.value === "" ||
                /^(?!0+$)\d+$/.test(e.target.value)
              ) {
                setBill(e.target.value);
              }
            }}
          />
        </div>
        <div className="">
          <h1 className="text-sm">Choose a tip</h1>
          <ul className="flex items-center gap-x-2 mt-1 *:cursor-pointer ">
            <li
              onClick={() => setTip(10)}
              className={`border-2 border-gray-200 ${
                tip === 10 ? "btnClick" : ""
              } text-xs py-1 px-2 rounded-xl`}
            >
              10%
            </li>
            <li
              onClick={() => setTip(15)}
              className={`border-2 border-gray-200 ${
                tip === 15 ? "btnClick" : ""
              } text-xs py-1 px-2 rounded-xl`}
            >
              15%
            </li>
            <li
              onClick={() => setTip(20)}
              className={`border-2 border-gray-200 ${
                tip === 20 ? "btnClick" : ""
              } text-xs py-1 px-2 rounded-xl`}
            >
              20%
            </li>
            <li
              onClick={() => setTip(25)}
              className={`border-2 border-gray-200 ${
                tip === 25 ? "btnClick" : ""
              } text-xs py-1 px-2 rounded-xl`}
            >
              25%
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-sm">Spilit by</h1>
          <input
            type="text"
            onChange={(e) => setSpilit(e.target.value)}
            value={spilit}
            className="outline-0 w-full px-2 mt-1 py-1 border-2 rounded-lg border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}

export default LeftSec;
