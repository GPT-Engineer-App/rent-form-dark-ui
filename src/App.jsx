import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavBar from './components/NavBar';
import PriorApplications from './pages/PriorApplications';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/applications" element={<PriorApplications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
