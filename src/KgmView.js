import React from "react";

function KgmView({ kgm }) {
    return (
        <div className="view-container">
            <div className="view-container__kgm-number">{kgm}</div>
            <div className="view-container__kgm-text">KGM</div>
        </div>
    );
}

export default KgmView;
