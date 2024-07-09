import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AddCandidateForm from "./domain/candidate/AddCandidateForm/AddCandidateForm";
import { Candidate } from "./domain/candidate/AddCandidateForm/Candidate";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFormSubmit = (candidate: Candidate) => {
    console.log(candidate);
    // Here you can handle the logic to send the form data, like sending it to an API.
    // After successful submission:
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="navbar">
          <div>LTI</div>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/add-candidate">Añadir Candidato</Link>
          </nav>
        </header>
        <div className="App-header">
          <Routes>
            <Route
              path="/add-candidate"
              element={
                !isSubmitted ? (
                  <AddCandidateForm onSubmit={handleFormSubmit} />
                ) : (
                  <div>
                    <div>Formulario enviado correctamente</div>
                    <br />
                    <div>
                      <button onClick={handleResetForm}>
                        Enviar otro formulario
                      </button>
                    </div>
                  </div>
                )
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
