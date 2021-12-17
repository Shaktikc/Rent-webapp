import "./App.css";

import { Header } from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { House } from "./Pages/House";
import { Land } from "./Pages/Land";
import { Flat } from "./Pages/Flat";
import { Office } from "./Pages/Office";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Form";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route exact path="/house" element={<House />} />
          <Route path="/land" element={<Land />} />
          <Route path="/flat" element={<Flat />} />
          <Route path="/office" element={<Office />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <div className="login">
        <Login />
      </div>
    </div>
  );
}

export default App;
