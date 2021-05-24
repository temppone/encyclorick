import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <div className="content">
            <Route path="/">
              <Home />
            </Route>
          </div>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
