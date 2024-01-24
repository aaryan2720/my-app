import './App.css';
import Navbar from './components/Navbar'; // Correct import path for Navbar
import TextForm from './components/txtform'; // Correct import path for TextForm
import About from './components/About'; // Correct import path for About
import { useState } from 'react';
import Alerts from './components/Alerts';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled");
    }
  };

  return (
    <Router>
      <div>
        <Navbar title="PulsePoint Integrations" abouttext="About PulsePoint" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Express Your Ideas" mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
