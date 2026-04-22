import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSelector = () => {
  const { currentTheme, setCurrentTheme, themes } = useContext(ThemeContext);

  return (
    <div className="theme-selector">
      {Object.keys(themes).map((key) => (
        <button
          key={key}
          onClick={() => setCurrentTheme(key)}
          style={{
            background: themes[key].primary,
            border:
              currentTheme === key ? "2px solid white" : "2px solid transparent",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            margin: "5px",
            cursor: "pointer"
          }}
        />
      ))}
    </div>
  );
};

export default ThemeSelector; 