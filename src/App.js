import React from "react";
import "./scss/App.scss";

import Header from "./Header";
import Calculator from "./Calculator";
import InfoKgm from "./InfoKgm";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main-page">
                <Calculator />
                <InfoKgm />
            </main>
            <Footer />
        </div>
    );
}

export default App;
