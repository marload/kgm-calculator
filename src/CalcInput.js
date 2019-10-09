import React from "react";
import "./scss/CalcInput.scss";

function CalcInput({ onCreate }) {
    const handleChange = e => {
        if (e.target.value > 99999) {
            e.target.value = 99999;
            onCreate(99999);
        } else {
            onCreate(e.target.value);
        }
    };
    return (
        <div className="input">
            <input
                className="input__text"
                onChange={handleChange}
                type="number"
            ></input>
        </div>
    );
}

export default CalcInput;
