import { useState } from "react";
import styled,{ThemeProvider} from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
`;
const SwitchButton = styled.button`
  width:7%;
  height: 7%;
  background-color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => !props.theme.background};
  color: ${(props) => props.theme.textColor};
  border-radius:15px;
  cursor: pointer;
`;

 const lightTheme = {
  background: "#fff",
  textColor: "#000000",
};
 const darkTheme = {
  background: "#222222",
  textColor: "#fff",
};


function App() {
  const [colorTheme, setColorTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setColorTheme(colorTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={colorTheme}>
      <Wrapper >
        <SwitchButton onClick={toggleTheme} >Change Color</SwitchButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
