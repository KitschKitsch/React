import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
    {
        id: 1,
        message: "안녕하세요",
    },
    {
        id: 2,
        message: "리액트 컴포넌트",
    },
    {
        id: 3,
        message: "배열에 데이터 담기",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) { // 생성자에서 state 초기화
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() { // Mount함수로 1초에 한번씩 실행
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reserveNotifications.length) {
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({ // state 업데이트
                    notifications: notifications,
                });
                console.log(notifications)
            } else {
               /* this.setState({ // Unmount 해버리기~
                    notifications: [],
                });*/
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
                <div>
                    {this.state.notifications.map((notification) => {
                        return <Notification key={notification.id} id={notification.id} message={notification.message}/>; //map에서는 key={notification.id} 필수!!
                    })}
                </div>
        );
    }
}

export default NotificationList;