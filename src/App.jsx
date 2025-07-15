import React, { useEffect } from 'react';
import './App.css';
import GeolocationCard from './components/GeolocationCard.jsx';
import NetworkInfo from './components/NetworkInfo.jsx';
import DisasterCanvas from './components/DisasterCanvas.jsx';
import ScrollAlert from './components/ScrollAlert.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app">
      <h1>DisasterAware - Smart Location & Safety Dashboard</h1>
      <GeolocationCard />
      <NetworkInfo />
      <DisasterCanvas />
      <ScrollAlert />
    </div>
  );
}

export default App;
