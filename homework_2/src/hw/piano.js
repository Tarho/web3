import React, { useEffect } from "react";
import "./piano.css";
import tunes from "./tunes";

function Piano() {
  useEffect(() => {
    const pianoKeys = document.querySelectorAll(".piano-keys .key");
    const volumeSlider = document.querySelector(".volume-slider input");
    const keysCheckbox = document.querySelector(".keys-checkbox input");

    let allKeys = [];

    const playTune = (key) => {
      console.log(`Playing tune for key: ${key}`);
      const audio = new Audio(tunes[key]);
      audio.play();
      const clickedKey = document.querySelector(`[data-key="${key}"]`);
      clickedKey.classList.add("active");
      setTimeout(() => {
        clickedKey.classList.remove("active");
      }, 150);
    };

    pianoKeys.forEach((key) => {
      allKeys.push(key.dataset.key);
      key.addEventListener("click", () => playTune(key.dataset.key));
    });

    const handleVolume = (e) => {
      const audio = new Audio();
      audio.volume = e.target.value;
      audio.play();
    };

    const showHideKeys = () => {
      pianoKeys.forEach((key) => key.classList.toggle("hide"));
    };

    const pressedKey = (e) => {
      if (allKeys.includes(e.key)) playTune(e.key);
    };

    keysCheckbox.addEventListener("click", showHideKeys);
    volumeSlider.addEventListener("input", handleVolume);
    document.addEventListener("keydown", pressedKey);

    return () => {
      keysCheckbox.removeEventListener("click", showHideKeys);
      volumeSlider.removeEventListener("input", handleVolume);
      document.removeEventListener("keydown", pressedKey);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className="wrapper">
      <header>
        <h2>Playable PIANO</h2>
        <div className="column volume-slider">
          <span>Volume</span>
          <input type="range" min="0" max="1" defaultValue="0.5" step="any" />
        </div>
        <div className="column keys-checkbox">
          <span>Show Keys</span>
          <input type="checkbox" defaultChecked />
        </div>
      </header>
      <ul className="piano-keys">
        <li className="key white" data-key="a">
          <span>a</span>
        </li>
        <li className="key black" data-key="w">
          <span>w</span>
        </li>
        <li className="key white" data-key="s">
          <span>s</span>
        </li>
        <li className="key black" data-key="e">
          <span>e</span>
        </li>
        <li className="key white" data-key="d">
          <span>d</span>
        </li>
        <li className="key white" data-key="f">
          <span>f</span>
        </li>
        <li className="key black" data-key="t">
          <span>t</span>
        </li>
        <li className="key white" data-key="g">
          <span>g</span>
        </li>
        <li className="key black" data-key="y">
          <span>y</span>
        </li>
        <li className="key white" data-key="h">
          <span>h</span>
        </li>
        <li className="key black" data-key="u">
          <span>u</span>
        </li>
        <li className="key white" data-key="j">
          <span>j</span>
        </li>
        <li className="key white" data-key="k">
          <span>k</span>
        </li>
        <li className="key black" data-key="o">
          <span>o</span>
        </li>
        <li className="key white" data-key="l">
          <span>l</span>
        </li>
        <li className="key black" data-key="p">
          <span>p</span>
        </li>
        <li className="key white" data-key="semicolon">
          <span>;</span>
        </li>
        {/* Add more keys as needed */}
      </ul>
    </div>
  );
}

export default Piano;
