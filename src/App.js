import { React } from "react";
import { ThemeProvider } from "styled-components";
import Navigator from "./routes/Navigator";

const App = () => {
  return (
    <div className="App">
      <Navigator />
    </div>
  );
};

export default App;
