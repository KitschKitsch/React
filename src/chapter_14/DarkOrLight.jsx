import {useState, useCallback} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
            <ThemeContext.Provider value={{theme, toggleTheme}}> {/* 하위 컴포넌트가 사용할 수 있도록 Context에 값 넣기 */}
                <MainContent/>
            </ThemeContext.Provider>
    );
}

export default DarkOrLight;