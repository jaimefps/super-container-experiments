import React from 'react';

// wrapper for access to redux store
import SuperContainer from '../containers/SuperContainerv2';


/*************************************************************
 *                @    /components/Bool.js
 ************************************************************/

// imports SuperContainer

const Bool = ({ boolean, switchBoolean, children }) => (
  <div>
    <button onClick={switchBoolean}> ! </button>
    { String(boolean) }
    <br/>
    { children }
  </div>
);

export const SuperBool = () => (
  <SuperContainer accessTo={['boolean']}>
    <Bool/>
  </SuperContainer> 
);

// accessTo={['boolean']}
// log="SuperBool"

/*************************************************************
 *                @    /components/Num.js
 ************************************************************/

// imports SuperContainer

const Num = ({switchNumber, number }) => (
  <div>
    <button onClick={switchNumber}> ! </button>
    {String(number) }
  </div>
);

export const SuperNum = () => (
  <SuperContainer accessTo={['number', 'boolean']}>
    <Num />
  </SuperContainer>
);

// accessTo={['number']}
// log="SuperNum"

/*************************************************************
 *                @    /components/App.js
 ************************************************************/

// imports SuperBool & SuperNum

// no props in App!
const App = () => (
  <div style={{ marginTop: '25%', marginLeft: '50%' }}>

    <SuperBool />

    <SuperNum />

  </div>
);

export default App;
