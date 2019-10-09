import React from "react";
import "./scss/KgmView.scss";

function KgmView({ kgm }) {
    return (
        <div className="view">
            <div className="view__number">{kgm.toFixed(2)}</div>
            <div className="view__text">KGM</div>
        </div>
    );
}

export default KgmView;
