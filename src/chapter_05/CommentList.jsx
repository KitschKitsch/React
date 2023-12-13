import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요~",
    },
    {
        name: "유재석",
        comment: "리액트 컴포넌트",
    },
    {
        name: "강민경",
        comment: "배열에 데이터 담기",
    },
]


function CommentList(props) { // Comment 라는 틀에 값 넣기
    return (
            <div>
                {comments.map((comment) => { // 화살표 함수로 쓰기!!! map함수-배열 차례대로 꺼내서 반복함
                    return <Comment name={comment.name} comment={comment.comment}/>
                })}
                {/*{comments.map( function (comment) {
                    return <Comment name={comment.name} comment={comment.comment}/>
                })}*/}
            </div>
    );
}

export default CommentList;