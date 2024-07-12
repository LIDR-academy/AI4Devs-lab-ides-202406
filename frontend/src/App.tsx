import React from 'react';
import AddCandidateForm from './components/AddCandidateForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: 'center' }}>LTI</h1>
      </header>
      <main>
        <AddCandidateForm />
      </main>
    </div>
  );
}

export default App;