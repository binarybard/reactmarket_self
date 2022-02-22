import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <h1>집에서 변경하기</h1>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent />;
        </Route>
        <Route exact={true} path="/product">
          {/* {} 생략 가능 */}
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
