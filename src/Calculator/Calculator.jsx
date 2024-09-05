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
                return `${firstTerm || 0} + (${n || 0} - 1) * ${constant || 0}`;
            case "geometric":
                return `${firstTerm || 0} * Math.pow(${constant || 0}, (${n || 0} - 1))`;
            case "harmonic":
                return `1 / ${firstTerm || 0} + (${n || 1} - 1) * ${constant || 0}`;
            case "quadratic":
                return `${n || 1} * ${n || 1}`;
            default: 
                return "n"
        }
    }

    function renderFunction() {
        switch(currentFunction) {
            case "arithmetic":
                return `${firstTerm || 0} + (n - 1) * ${constant || 0}`;
            case "geometric":
                return `${firstTerm || 0} * ${constant || 0}^(n-1)`;
            case "harmonic":
                return `1/${firstTerm || 0} + (n - 1) * ${constant || 0}`;
            case "quadratic":
                return "n^2";
            default: 
                return "n"
        }
    }

    function renderAnswer() {
        const result = []
        for(let i = (startIndex || 1); i < eval(`${nTerm || 1}+1`); i++) {
            result.push(eval(generateFunction(i)))
        }

        return result.join(", ")
    }

    function getSum() {
        const result = []
        for(let i = (startIndex || 1); i < eval(`${nTerm || 1}+1`); i++) {
            result.push(eval(generateFunction(i)))
        }

        if(result.length >= 0) {
            return result.reduce((acc, term) => {
                return acc + term
            }) 
        } 
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
                    <input type="number" value={firstTerm} onChange={e => setFirstTerm(e.target.value)} />
                </div>}
                {(currentFunction !== "quadratic") && 
                <div>
                    <label>Constant</label>                    
                    <input type="number" value={constant} onChange={e => setConstant(e.target.value)} />
                </div>}
                <div>
                    <label>N of Terms</label>                    
                    <input type="number" min={startIndex} value={nTerm} onChange={e => setNTerm(e.target.value)} />
                </div>
                <div>
                    <label>Start Index</label>                    
                    <input type="number" min={1} max={nTerm} value={startIndex} onChange={e => setStartIndex(e.target.value)} />
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
            <div className="sum-display">Summation: {getSum()}</div>
            <div className="sequence-display">{renderAnswer()}</div>
        </div>
    )
}

export default Calculator