import React from "react";
import ReactDOM from "react-dom";

const smartPeople = [
    { name: 'Johann Goethe',age: 82, IQ: 210 },
    { name: 'Albert Einstein', age: 76, IQ: 205 },
    { name: 'Leonardo da Vinci',age: 67, IQ: 180},
    { name: 'Isaac Newton', age: 84, IQ: 190 },
    { name: 'James Maxwell', age: 48, IQ: 190 },
    { name: 'Rudolf Clausius',age: 66, IQ: 190 },
    { name: 'Nicolaus Copernicus',age: 70, IQ: 160},
    { name: 'Gottfried Leibniz',age: 70, IQ: 182 },
    { name: 'William Sidis',age: 46, IQ: 200 }
]
   
const element = (
    <ul>
      {smartPeople.map((person) => (
        <li key={person}>{`${person.name} - ${person.age} - ${person.IQ}`}</li>
      ))}
    </ul>
  );
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

function exercise4_3() {
  return (
    <div id="root">
    </div>
  )
}

export default exercise4_3
