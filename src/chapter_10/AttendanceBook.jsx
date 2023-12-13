import React from "react";

const students = [
    {id: 1, name: "Inje"},
    {id: 2, name: "Steve"},
    {id: 3, name: "Bill"},
    {id: 4, name: "Jeff"},
];

const AttendanceBook = () => {
    return (
            <ul>
                {students.map(
                        (student, index) => { // map의 index를 key로 활용할 수 있고!
                            return <li key={student.id}>{student.name}</li>; // 배열의 id를 key로 사용할 수 있고!
                        })
                }
            </ul>
    );
}

export default AttendanceBook;