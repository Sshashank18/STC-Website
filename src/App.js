import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Queries from "./Queries";
import Reviews from "./Reviews";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/anyqueries" component={Queries} />
        <Route exact path="/reviews" component={Reviews} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
