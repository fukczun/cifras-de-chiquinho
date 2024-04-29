import React from "react";
import { scroolClick } from "../assets/scrool";

function ButtonRoll() {
    return (
        <button className="inline text-xs h-11 text-orange-800 hover:text-white border border-orange-800 hover:bg-orange-800 font-medium rounded-lg text-sm px-3 text-center me-2 mb-2" onClick={scroolClick}>
            Auto Rolagem
        </button>
    )
}

export default ButtonRoll