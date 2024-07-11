import { styled } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar';
import ApplicantForm from './components/ApplicantForm';
import ApplicantDashboard from './components/ApplicantDashboard';

function App() {
  return (
    <Router>
      {/* <NavigationBar /> */}
      <RootContent>
        <Routes>
          <Route path="/" element={<ApplicantDashboard />} />
          <Route path="/add-applicant" element={<ApplicantForm />} />
        </Routes>
      </RootContent>
    </Router>
  );
}

const RootContent = styled('div')`
  display: flex;
`;

export default App;
