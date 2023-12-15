import React, { useState, useEffect } from "react";
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

/*var timer;

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
               /!* this.setState({ // Unmount 해버리기~
                    notifications: [],
                });*!/
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
}*/

const NotificationList = () => {
    const [notifications, setNotifications] = useState([]); // 빈배열로 시작

    useEffect(() => {
        const timer = setInterval(() => {
            if (notifications.length < reserveNotifications.length) { // 0,1,2 < 3
                const index = notifications.length; // index = 0, 1, 2
                setNotifications((prevNotifications) => [ // 현재 상태 배열
                    ...prevNotifications, // 현재 상태 배열 풀어서(전개)
                    reserveNotifications[index], // 새로운 배열 포함해서 상태 변경
                ]);
                console.log(notifications);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        // 정리작업
        return () => {
            console.log("정리")
            clearInterval(timer);
        };
    }, [notifications]); // 처음 마운트 + notifications가 변할 때만 렌더링

    return (
            <>
                {notifications.map((notification) => (
                        <Notification
                                key={notification.id}
                                id={notification.id}
                                message={notification.message}
                        />
                ))}
            </>
    );
};

export default NotificationList;