import React from 'react';
import ReactDOM from 'react-dom';

const card = {
  Title: 'Elon Musk',
  Description:
    'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX',
  Avatar: 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg',
  Cover:
    'https://media.vanityfair.com/photos/574f453fbdf148e4205f29df/16:9/w_1200,h_630,c_limit/hive-contributor-profile-elon-musk.jpg',
};

const element = (
  <div>
    {Object.keys(card).map((key) => (
      <div key={key}>
        <strong>{key}:</strong> {card[key]}
      </div>
    ))}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

function exercise4_4() {
  return <div id='root'>
    </div>;
}

export default exercise4_4;
