import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

/*class Notification extends React.Component { // 클래스 컴포넌트
    constructor(props) { // 생성자에서 state 정의함
        super(props);

        this.state = {};
    }

    // Component Lifecycle 확인하기  (Mounting → Updating → Unmounting)
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`)
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called.`)
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`)
    }

    render() {
        return (
                <div style={styles.wrapper}>
                    <span style={styles.messageText}>{this.props.message}</span>
                </div>
        );
    }
}*/

const Notification = (props) => { // 클래스 컴포넌트
        return (
                <div style={styles.wrapper}>
                    <span style={styles.messageText}>{props.message}</span>
                </div>
        );
}

export default Notification;