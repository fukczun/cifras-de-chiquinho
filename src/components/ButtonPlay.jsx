import React from "react";
import { pauseClick } from "../assets/scrool";

function ButtonRoll() {
    return (
        <button className="play inline h-11 text-orange-900 hover:text-white font-black rounded-lg text-sm px-3 text-center" onClick={pauseClick}>
            ❚❚
        </button>
    )
}

export default ButtonRoll