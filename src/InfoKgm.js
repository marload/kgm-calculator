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
                <div className="about-kgm__birth">Birth: 2000Y</div>
                <div className="about-kgm__height">Height: 172</div>
                <div className="about-kgm__weight">Weight: 47</div>
                <div className="about-kgm__gender">Gender: Male</div>
                <p className="about-kgm__explain">구건모는 구건모다</p>
            </div>
        </div>
    );
}

export default InfoKgm;
