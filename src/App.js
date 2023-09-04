
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Reset from "./Components/Reset/Reset";
import CreateNewPassword from "./Components/CreateNewPassword/CreateNewPassword";
import Login from "./Components/Login/Login";
import Recovered from "./Components/Recovered/Recovered";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/forgotPassword" element={< ForgotPassword />}></Route>
          <Route path="/login" element={< Login />}></Route>
          <Route path="/createNewPassword" element={< CreateNewPassword />}></Route>
          <Route path="/Recovered" element={< Recovered />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


