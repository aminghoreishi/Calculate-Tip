import React, { memo } from "react";

const RightSec = memo(({ bill, tip, spilit }) => {
  const billNum = Number(bill) || 0;
  const splitNum = Number(spilit) || 1;
  const tipAmount = (billNum * tip) / 100;
  const total = billNum + tipAmount;
  const perPerson = splitNum > 0 ? total / splitNum : 0;

  return (
    <div className="bg-green-700 h-full rounded-lg p-2 flex flex-col justify-between">
      <div className="flex items-center justify-between text-white">
        <h1 className="text-sm">Base:</h1>
        <p className="text-lg">{billNum}</p>
      </div>

      <div className="flex items-center mt-3 justify-between text-white">
        <h1 className="text-sm">Tip:</h1>
        <p className="text-lg">{tipAmount.toFixed(2)}</p>
      </div>

      <div className="flex items-center mt-3 justify-between text-white">
        <h1 className="text-sm">Per Person:</h1>
        <p className="text-lg">{perPerson.toFixed(2)}</p>
      </div>

      <hr className="text-white" />

      <div className="flex items-center justify-between text-white">
        <p>Total:</p>
        <p>{total.toFixed(2)}</p>
      </div>

      <div>
        <button className="text-white bg-red-500 w-full px-2 py-1 rounded-full">
          reset
        </button>
      </div>
    </div>
  );
});

export default RightSec;
