import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
