import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

import IPAddressList from './pages/IPAddressList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/ipaddresses" element={<IPAddressList />} />
          <Route path="*" element={<Navigate to="/ipaddresses" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;