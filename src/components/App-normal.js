import React from 'react';

/*************************************************************
 *                @    /components/Bool.js
 ************************************************************/

export const Bool = ({ switchBoolean, boolean }) => (
  <div>
    <button onClick={switchBoolean}> ! </button>
    { String(boolean) }
  </div>
);

/*************************************************************
 *                @    /components/Num.js
 ************************************************************/

export const Num = ({switchNumber, number}) => (
  <div>
    <button onClick={switchNumber}> ! </button>
    { String(number) }
  </div>
);

/*************************************************************
 *                @    /components/App.js
 ************************************************************/

// imports Bool & Num

const App = ({ number, boolean, switchNumber, switchBoolean }) => (
  <div style={{ marginTop: '25%', marginLeft: '50%' }}>
      
    <Bool 
      boolean={boolean} 
      switchBoolean={switchBoolean} 
    />

    <Num 
      number={number} 
      switchNumber={switchNumber} 
    />

  </div>
);

export default App;
