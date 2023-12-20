import React from 'react';
// import ReactDOM from 'react-dom/client'; // ReactDOM 은 React18 최신 가져오기에서 지원안함!!!
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import ProfileCard from "./chapter_13/ProfileCard";

const root = createRoot(document.getElementById('root'));

root.render(
        /*<React.StrictMode> {/!*18 이후로는 개발모드에서 컴포넌트 unmount->remount 시킴(버그찾으려고)*!/}*/
            < ProfileCard />
        /*</React.StrictMode>,*/
);

reportWebVitals();
