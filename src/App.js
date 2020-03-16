import React from 'react';
import NavBar from './components/navbar'
import NavTab from './components/navtab'

function App() {
  return (
    <div className="App">
      <NavBar>
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(i => 
          <NavTab 
            title={i}
          />
          )}
      </NavBar>
    </div>
  );
}

export default App;
