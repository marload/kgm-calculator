import React from "react";
import "./scss/InfoKgm.scss";

function InfoKgm() {
    return (
        <div className="info-kgm">
            <img
                className="info-kgm__avatar"
                src="avatar.png"
                alt="구건모"
            ></img>
            <div className="info-kgm__about-kgm">
                <h1>구건모</h1>
            </div>
        </div>
    );
}

export default InfoKgm;
