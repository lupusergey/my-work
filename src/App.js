import './App.css';
import QRCodeScanner from './components/Scan/QRCodeScanner';
import QRCodeGenerator from './components/Generate/QRCodeGenerator';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import GenerateHistory from './components/GenerateHistory/GenerateHistory';
import ScanHistory from './components/ScanHistory/ScanHistory';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/generate' element={<QRCodeGenerator />} />
        <Route path='/scan' element={<QRCodeScanner />} />
        <Route path='/scanHistory' element={<ScanHistory />} />
        <Route path='/generateHistory' element={<GenerateHistory />} />
      </Routes>
    </div>
  );
}

export default App;
