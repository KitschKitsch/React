import {useContext} from "react";
import ThemeContext from "./ThemeContext";

const MainContent = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    console.log("theme from context : ", theme)
    console.log("toggleTheme from context : ", toggleTheme)

    return (
            <div style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}>
                <p>테마 바꾸기</p>
                <button onClick={toggleTheme}>테마 변경</button>
            </div>
    );
}

export default MainContent;