import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormContext from "./context/FormContext";
import Home from "./components/Home";
import Form from "./components/form";
import Registered from "./components/registered";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [form, setForm] = useState(null);

  const validationForm = {
    validForm: [form, setForm],
  };

  return (
    <div className="App">
      <FormContext.Provider value={validationForm}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/registered" element={<Registered />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FormContext.Provider>
    </div>
  );
}

export default App;
