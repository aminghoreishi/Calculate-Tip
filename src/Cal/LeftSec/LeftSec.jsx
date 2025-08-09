import React from "react";

function LeftSec({
  setBill,
  setTip,
  tip,
  bill,
  setSpilit,
  spilit,
  checkBillRegex,
  checkSpilitRegex,
}) {
  return (
    <div>
      <div className="flex flex-col justify-between  h-full">
        <h1 className="font-semibold text-lg">Calculate Tip</h1>
        <div className=" w-full">
          <label className=" font-semibold  text-xs fontCus " htmlFor="">
            Bill Totoal
          </label>
          <input
            className="outline-0 fontCus w-full px-2 mt-1 py-1 border-2 rounded-lg border-gray-200"
            type="text"
            name=""
            id=""
            maxLength={7}
            onChange={(e) => setBill(e.target.value)}
          />
          {bill !== "" && checkBillRegex && (
            <p className="text-xs mt-1 text-red-700 font-semibold fontCus">
              Please Enter Numbers
            </p>
          )}
        </div>
        <div className="">
          <h1 className="text-xs font-semibold fontCus">Choose a tip</h1>
          <ul className="flex items-center gap-x-2 mt-2 *:cursor-pointer ">
            <li
              onClick={() => setTip(10)}
              className={`border-2 border-gray-200 ${
                tip === 10 ? "btnClick" : ""
              } text-xs py-1 px-2 rounded-xl fontCus`}
            >
              10%
            </li>
            <li
              onClick={() => setTip(15)}
              className={`border-2 border-gray-200 ${
                tip === 15 ? "btnClick" : ""
              } text-xs py-1 px-2 rounded-xl fontCus`}
            >
              15%
            </li>
            <li
              onClick={() => setTip(20)}
              className={`border-2 border-gray-200 ${
                tip === 20 ? "btnClick" : ""
              } text-xs py-1 px-2 rounded-xl fontCus`}
            >
              20%
            </li>
            <li
              onClick={() => setTip(25)}
              className={`border-2 border-gray-200 ${
                tip === 25 ? "btnClick" : ""
              } text-xs py-1 px-2 rounded-xl fontCus`}
            >
              25%
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-xs font-semibold fontCus">Spilit by</h1>
          <input
            type="text"
            onChange={(e) => setSpilit(e.target.value)}
            value={spilit}
            className="outline-0 fontCus w-full px-2 mt-2 py-1 border-2 rounded-lg border-gray-200"
          />
          {spilit !== 1 && checkSpilitRegex && (
            <p className="text-xs mt-1 text-red-700 font-semibold fontCus">
              Please Enter Numbers
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSec;
