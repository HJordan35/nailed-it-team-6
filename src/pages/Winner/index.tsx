import React from "react";
import PleaseWait from "../../assets/PleaseWaitBanner.svg";
import WinnerBanner from "../../assets/WinnerBanner.svg";

import "./winner.css";

function WinnerPage() {

  return (
    <div className="winner-page">
        <img className="winnerBanner" src={WinnerBanner} alt="" />
        <img className="pleaseWaitText" src={PleaseWait} alt="" />
    </div>
  );
}

export default WinnerPage;
