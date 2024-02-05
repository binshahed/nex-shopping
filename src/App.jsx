import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
