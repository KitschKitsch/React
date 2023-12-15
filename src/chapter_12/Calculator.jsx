import React, { useState } from "react";
import TemperatureInput from "./TemeratureInput";
import BoilngVerdict from "./BoilngVerdict";

/*const BoilngVerdict = (props) => { // BoilngVerdict 컴포넌트 : 물이 끓는지, 안끓는지
    if (props.celcius >= 100) {
        return <p>물이 끓습니다.</p>;
    } return <p>물이 끓지 않습니다.</p>;
}*/

const toCelsius = (fahrenheit) => { // 화씨->섭씨
    return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => { // 섭씨->화씨
    return (celsius *9 / 5 + 32);
}

const tryConvert = (temperature, convert) => { // 온도값과 변환함수를 받음
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) { // input 값이 올바르지 않다면
        return ""; // 빈문자열 리턴
    }
    const output = convert(input); // 함수 toCelsius or toFahrenheit 에 온도 넣기
    const rounded = Math.round(output * 1000) / 1000; // 소수점 3째 자리 반올림
    return rounded.toString();
}

const Calculator = () => { // Calculator 컴포넌트. 공유할 useState를 가지고 있음!!!
    const [ temperature, setTemperature ] = useState("");
    const [ scale, setScale ] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
            scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
            scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
            <>
             <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
             />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilngVerdict celcius={parseFloat(celsius)}/>
            </>
    );
}

export default Calculator;