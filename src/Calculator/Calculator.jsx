import React, {useState} from 'react'
import "./Calculator.css"

function arithmeticProgression(endIndex) {
    
}

const Calculator = () => {
    const [currentFunction, setCurrentFunction] = useState("arithmetic")
    const [firstTerm, setFirstTerm] = useState(1)
    const [nTerm, setNTerm] = useState(5)
    const [startIndex, setStartIndex] = useState(1)
    const [constant, setConstant] = useState(1)

    function generateFunction(n) {
        switch(currentFunction) {
            case "arithmetic":
                return `${firstTerm} + (${n} - 1) * ${constant}`;
            case "geometric":
                return `${firstTerm} * Math.pow(${constant}, (${n} - 1))`;
            case "harmonic":
                return `1 / ${firstTerm} + (${n} - 1) * ${constant}`;
            case "quadratic":
                return `${n} * ${n}`;
            default: 
                return "n"
        }
    }

    function renderFunction() {
        switch(currentFunction) {
            case "arithmetic":
                return `${firstTerm} + (n - 1) * ${constant}`;
            case "geometric":
                return `${firstTerm} * ${constant}^(n-1)`;
            case "harmonic":
                return `1/${firstTerm} + (n - 1) * ${constant}`;
            case "quadratic":
                return "n^2";
            default: 
                return "n"
        }
    }

    function renderAnswer() {
        const result = []
        for(let i = startIndex; i < eval(`${nTerm}+1`); i++) {
            result.push(eval(generateFunction(i)))
        }

        return result.join(", ")
    }

    return (
        <div className="container">
            <div className="equation-display">
                <div className="end-index">{nTerm}</div>
                <div className="summation">
                    <span className="summation-symbol">∑</span>
                    <span className="summation-function">
                        {renderFunction()}
                    </span>
                </div>
                <div className="start-index">n = {startIndex}</div>
            </div>
            <form className="form">
                {(currentFunction !== "quadratic") && 
                <div>
                    <label>First Term</label>                    
                    <input type="number" value={firstTerm} onChange={e => setFirstTerm(e.target.value || 0)} />
                </div>}
                {(currentFunction !== "quadratic") && 
                <div>
                    <label>Constant</label>                    
                    <input type="number" value={constant} onChange={e => setConstant(e.target.value || 0)} />
                </div>}
                <div>
                    <label>N of Terms</label>                    
                    <input type="number" min={startIndex} value={nTerm} onChange={e => setNTerm(e.target.value || 1)} />
                </div>
                <div>
                    <label>Start Index</label>                    
                    <input type="number" min={1} max={nTerm} value={startIndex} onChange={e => setStartIndex(e.target.value || 1)} />
                </div>
                <select value={currentFunction} onChange={e => {
                    setCurrentFunction(e.target.value)
                }}>
                    <option value="arithmetic">Arithmetic Progression</option>
                    <option value="geometric">Geometric Progression</option>
                    <option value="harmonic">Harmonic Progression</option>
                    <option value="quadratic">Quadratic Progression</option>
                </select>
            </form>
            <div className=""></div>
            <div className="sequence-display">{renderAnswer()}</div>
        </div>
    )
}

export default Calculator