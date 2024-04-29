import React from "react";

function Seta(props) {
    return (
        <button className="inline text-base text-orange-800 hover:text-white border border-orange-800 hover:bg-orange-800 font-medium rounded-lg px-3 py-2.5 text-center me-2 mb-2" onClick={props.onclick}>
            {props.content}
        </button>
    )
}

export default Seta