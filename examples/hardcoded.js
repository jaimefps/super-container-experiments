import React from 'react';

// sample child
const Child = (name) => (
  <div> { name } </div>
);

/************************************************
 *         CASE 1 - you can hardcode
 ***********************************************/

// expression
const Parent = ({ name }) => (
  <div>
    <Child name={name} />
  </div>
);

// invocation 
const instace = <Parent name="Pedro" />


/************************************************
 *         CASE 2 - you cannot hardcode
 ***********************************************/

 // expression
const Parent = ({ name, children }) => (
  <div>
    {/*   How would you pass the "name" prop to that child?   */}
    { children }
  </div>
);

// invocation
const instance = (
  <Parent name="Pedro">
    <Child name="???" />
  </Parent>
);

