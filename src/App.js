import { React } from "react";
import Navigator from "./routes/Navigator";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <Navigator />
      </RecoilRoot>
    </div>
  );
};

export default App;
