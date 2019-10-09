import React from "react";
import "./scss/Calculator.scss";

import CalcInput from "./CalcInput";
import KgmView from "./KgmView";

const ONE_KGM = 47;

class Calculator extends React.Component {
    state = {
        kgm: 0
    };

    handleCreate = data => {
        this.setState({ kgm: data / ONE_KGM });
    };

    render() {
        return (
            <section className="calculator">
                <CalcInput onCreate={this.handleCreate} />
                <KgmView kgm={this.state.kgm} />
            </section>
        );
    }
}

export default Calculator;
