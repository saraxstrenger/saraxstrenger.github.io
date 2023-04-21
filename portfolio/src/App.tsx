import "./App.css";
import "./css/base.css";
import "./css/vendor.css";
import "./css/main.css";
import "./css/fonts.css";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
export default function App() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      
      <Home />
      <About />
      <Works/>
    </div>
  );
}
