
import "./App.css";
import SiteRoute from "./SiteRoute";
import MyFooter from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="col ">
        <div className="row ">
          {" "}
          <Navbar />
        </div>
        <div className="row">
          <SiteRoute />
        </div>
        <div className="row">
          <MyFooter />
        </div>
      </div>
    </>
  );
}

export default App;
