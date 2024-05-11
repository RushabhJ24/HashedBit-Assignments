import React, {useState} from 'react';
import "./style.css";

const Calculator = () => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [result, setResult] = useState("");

    const handleChange1 = (e) => {
        setNumber1(e.target.value);
    }

    const handleChange2 = (e) => {
        setNumber2(e.target.value);
    }
    const handleoperator = (operator) => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);
        
        if(isNaN(num1) || isNaN(num2)){
            setResult("Enter a valid Number");
        }
        switch (operator){
            case "+" : setResult(`Result : ${num1+num2}`);
                       break;
            case "-" : setResult(`Result : ${num1-num2}`);
                       break;
            case "*" : setResult(`Result : ${num1*num2}`);
                       break;
            case "/" : if(num2===0){
                            setResult("Result : Invalid, Can't divide by 0");
                            break;
                       } 
                       setResult(`Result : ${num1/num2}`);
                       break;
            default :  setResult("Result : Invalid Operator")
        }
    }
    return (
        <>
            <div className='conatiner'>
                <div className='inputfield'>
                    <h1>CALCULATOR</h1>
                    <div className='field1'>
                        <label>Enter first number : </label> &nbsp;
                        <input type='number' value={number1} onChange={handleChange1} placeholder='Enter a Number'></input><br/>
                    </div>
                    <div className="field2">
                        <label>Enter second number : </label> &nbsp;&nbsp;
                        <input type='number' value={number2} onChange={handleChange2} placeholder='Enter a Number'></input>
                    </div>
                </div>
                <div className='operator'>
                    <button onClick={() => handleoperator("+")}>+</button>
                    <button onClick={() => handleoperator("-")}>-</button>
                    <button onClick={() => handleoperator("*")}>*</button>
                    <button onClick={() => handleoperator("/")}>/</button>
                </div>
                <div className='result'>
                    {result}
                </div>
            </div>
        </>
    )
}

export default Calculator;