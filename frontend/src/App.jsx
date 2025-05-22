import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx'
import Header from './components/Header.jsx';
import { UserProvider } from './context/UserContext.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
      </UserProvider>
    </BrowserRouter>
  );
};

export default App