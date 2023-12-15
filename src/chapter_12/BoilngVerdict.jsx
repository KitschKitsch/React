const BoilngVerdict = (props) => { // BoilngVerdict 컴포넌트 : 물이 끓는지, 안끓는지
    const startBoiling = () => {
        alert(`${props.celcius}℃ 🌡️🔥`)
    }

    if (props.celcius >= 100) {
        return (<>
                    <p>물이 끓습니다.</p>
                    <button onClick={startBoiling}>끓이기</button>
                </>);
    } return <p>물이 끓지 않습니다.</p>;
}

export default BoilngVerdict;