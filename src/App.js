import { Route, Routes } from "react-router-dom";
import Calc from "./Components/Calc";
import Navbar from "./Components/Navbar";
import SimpleInterest from "./Components/SimpleInterest";
import "./styles.css";

export default function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className={<Calc /> || <SimpleInterest /> ? "container" : null}>
        <Routes>
          <Route path="/Calc" element={<Calc />} />
          <Route path="/Simple" element={<SimpleInterest />} />
        </Routes>
      </div>
    </div>
  );
}
