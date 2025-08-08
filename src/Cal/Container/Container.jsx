import React, { useState } from "react";
import LeftSec from "../LeftSec/LeftSec";
import RightSec from "../RightSec/RightSec";

function Container() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);
  const [spilit, setSpilit] = useState(1)
  return (
    <div className="bg-white w-[600px] h-auto sm:h-[300px] rounded-lg p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
        <LeftSec spilit={spilit} tip={tip} setBill={setBill} setTip={setTip} setSpilit={setSpilit} />
        <RightSec bill={bill} tip={tip} spilit={spilit} />
      </div>
    </div>
  );
}

export default Container;
