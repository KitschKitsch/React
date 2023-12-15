const scaleNames = {
    c : "℃ 섭씨",
    f : "℉ 화씨",
};

const TemperatureInput = (props) => { // 부모로부터 받은 props
    // const [ temperature, setTemperature ] = useState(''); // 원래 본인 state 있었지만, 부모 state만 사용!

    const handleChange = (e) => {
        /* 변경 전 : setTemperature(e.target.value) */
        props.onTemperatureChange(e.target.value); // 부모 컴포넌트 함수로 props 값을 다시 전달함
    }

    return (
            <fieldset>
                <legend>
                    온도를 입력해주세요(단위 : {scaleNames[props.scale]});
                </legend>
                {/* 변경 전 : value={temperature} */}
                <input value={props.temperature} onChange={handleChange}/>
            </fieldset>
    )

}

export default TemperatureInput;