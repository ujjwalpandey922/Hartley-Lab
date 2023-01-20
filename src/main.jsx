import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Reducer from "./store/Reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Reducer}>
    <App />
  </Provider>
);
