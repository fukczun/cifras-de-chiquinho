import React from "react";

function ButtonReturn(props) {
    return (
        <button className="absolute top-3 right-5 text-lg text-orange-900 hover:text-white font-black px-3 text-center" onClick={props.onclick}>
            ↶
        </button>
    )
}

export default ButtonReturn