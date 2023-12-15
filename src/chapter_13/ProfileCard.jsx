import Card from "./Card";

export default function ProfileCard(props) {
    return (
            <Card title="Youngseob OH" backgroundColor="green"> {/*Specialization 부분*/}
                <p>안녕하세요.</p> {/* Children 부분*/}
                <p>리액트 공부중!</p>
            </Card>
    );
}
