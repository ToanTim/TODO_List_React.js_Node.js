import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar/Navigation";
import Feedback from "./pages/FeedBack.page";
import AboutUs from "./pages/About-us.page";
import Signup from "./pages/Signup.page";
import Login from "./pages/Login.page";
import Home from "./pages/Home.page";
import Assignment from "./pages/Assignment";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />

        <Route path="/" exact component={Home} />
        <Route path="/feed-back" exact component={Feedback} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/sign-up" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/assignment" exact component={Assignment} />
      </div>
    </Router>
  );
}

export default App;
