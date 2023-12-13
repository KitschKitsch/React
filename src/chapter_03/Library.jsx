import React from "react";
import Book from "./Book"; // 빈 껍데기 가져옴

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}/> {/*빈 껍데기에 내용 넣어줌*/}
            <Book name="처음 만난 AWS" numOfPage={400}/>
            <Book name="처음 만난 리액트" numOfPage={500}/>
        </div>
    );
}

export default Library;