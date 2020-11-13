import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
      avatar = "https://randomuser.me/api/portraits/women/62.jpg"
      name = "Terri Morris"
      online = {false}
      />
        <Contact
      avatar = "https://randomuser.me/api/portraits/women/72.jpg"
      name = "Melissa Davidson"
      online = {true}
      />
        <Contact
      avatar = "https://randomuser.me/api/portraits/women/50.jpg"
      name = "Wilma Henry"
      online = {false}
      />
    </div>
  );
}

export default App;
