import React from "react";

export default function Numbers(props) {

    const elements = props.numbers.map((num, index) => (
        <button
            key = {index}
            className="num--tile"
            style = {{background:props.tile[index]===true ? "#59E391": "white"}}
            onClick={(event)=>props.toggleNum(event, index)}
        >
            {num}
        </button>
    ))

    
    return (
    <div className="numbers">
        {elements}
    </div>
    )
}