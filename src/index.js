import React from 'react';
// import ReactDOM from 'react-dom/client'; // ReactDOM 은 React18 최신 가져오기에서 지원안함!!!
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Book from "./chapter_03/Book"; // 빈 껍데기일 뿐!
import Library from "./chapter_03/Library"; // 실제 내용을 import 해와야함!
import Clock from "./chapter_04/Clock";
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
import Accommodate from "./chapter_07/Accommodate";
import Example from "./chapter_07/Example";
import ConfirmButton from "./chapter_08/ConfirmButton";
import LandingPage from "./chapter_09/LandingPage";
import AttendanceBook from "./chapter_10/AttendanceBook";

const root = createRoot(document.getElementById('root'));

root.render(
        <React.StrictMode> {/*18 이후로는 개발모드에서 컴포넌트 unmount->remount 시킴(버그찾으려고)*/}
            <AttendanceBook />
        </React.StrictMode>,
);




reportWebVitals();
