import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    firstName :'Elon',
    lastName : 'Musk',
    age : 49
  };

const element = (
  <div>
       <h1>first name : {user.firstName}</h1>
       <h1>last name : {user.lastName}</h1>
       <h1>age : {user.age}</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

function exercise4_5() {
  return (
    <div id='root'>
    </div>
  )
}

export default exercise4_5

