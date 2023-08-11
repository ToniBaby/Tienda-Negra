import Navi from "./components/Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

import Brands from "./components/Brands";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App ">
      <Navi />
      <Banner />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
