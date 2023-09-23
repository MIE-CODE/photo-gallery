import SignIn from "./SignIn";
import Signup from "./Signup";
import Homepage from "./Homepage";
import AuthDetails from "./AuthDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/signin" element={<SignIn/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
