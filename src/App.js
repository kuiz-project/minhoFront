import { React } from "react";
import Navigator from "./routes/Navigator";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RecoilRoot>
          <Navigator />
        </RecoilRoot>
      </div>
    </ThemeProvider>
  );
};

export default App;
