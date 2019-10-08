import React from "react";

function CalcInput({ onCreate }) {
    const handleChange = e => {
        console.log(e.target.value);
        onCreate(e.target.value);
    };
    return (
        <div className="input-container">
            <input
                className="input-container__text"
                onChange={handleChange}
                type="number"
            ></input>
        </div>
    );
}

export default CalcInput;
