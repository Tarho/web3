// homwork_1.js

import React from 'react';
import './homwork_1.css';

// Import your audio files
import tom1Sound from '../homwork_1/sounds/tom-1.mp3';
import tom2Sound from '../homwork_1/sounds/tom-2.mp3';
import snareSound from '../homwork_1/sounds/snare.mp3';
import tom4Sound from '../homwork_1/sounds/tom-4.mp3';
import crashSound from '../homwork_1/sounds/crash.mp3';
import tom3Sound from '../homwork_1/sounds/tom-3.mp3';
import kickBassSound from '../homwork_1/sounds/kick-bass.mp3';

function handleClick(key) {
  console.log(key);
  makeSound(key);
  buttonAnimation(key);
}

function handleKeyboardEvent(event) {
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {
  switch (key) {
    case 'w': {
      let tom1 = new Audio(tom1Sound);
      tom1.play();
      break;
    }
    case 'a': {
      let tom2 = new Audio(tom2Sound);
      tom2.play();
      break;
    }
    case 's': {
      let snare = new Audio(snareSound);
      snare.play();
      break;
    }
    case 'd': {
      let tom4 = new Audio(tom4Sound);
      tom4.play();
      break;
    }
    case 'j': {
      let crash = new Audio(crashSound);
      crash.play();
      break;
    }
    case 'k': {
      let tom3 = new Audio(tom3Sound);
      tom3.play();
      break;
    }
    case 'l': {
      let kick = new Audio(kickBassSound);
      kick.play();
      break;
    }
    default: {
      break;
    }
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector('.' + key);
  if (activeButton) {
    activeButton.classList.add('pressed');
    document.body.classList.add('modify-body');
    setTimeout(() => {
      activeButton.classList.remove('pressed');
      document.body.classList.remove('modify-body');
    }, 200);
  }
}

function Homwork1() {
  return (
    <div>
      <h1 id="title">Drum Kit</h1>
      <div className="set">
        <button className="w drum" onClick={() => handleClick('w')}>
          w
        </button>
        <button className="a drum" onClick={() => handleClick('a')}>
          a
        </button>
        <button className="s drum" onClick={() => handleClick('s')}>
          s
        </button>
        <button className="d drum" onClick={() => handleClick('d')}>
          d
        </button>
        <button className="j drum" onClick={() => handleClick('j')}>
          j
        </button>
        <button className="k drum" onClick={() => handleClick('k')}>
          k
        </button>
        <button className="l drum" onClick={() => handleClick('l')}>
          l
        </button>
      </div>
    </div>
  );
}

export default Homwork1;
