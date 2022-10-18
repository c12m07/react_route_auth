import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormContext from "./context/FormContext";
import Home from "./components/Home";
import Form from "./components/form";
import ProtectedRoute from "./components/ProtectedRoute";
import Registered from "./components/registered";
import ErrorPage from "./components/errorpage";

function App() {
  const [auth, setAuth] = useState(null);

  const authData = {
    logIn: [auth, setAuth],
  };

  return (
    <div className="App">
      <FormContext.Provider value={authData}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/registered" element={<Registered />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </FormContext.Provider>
    </div>
  );
}

export default App;
