import React, { useEffect } from 'react';
import './hw3.css';

function Hw3() {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    const links = document.querySelectorAll(".nav > ul > li");
    const cards = document.querySelectorAll(".card");

    const activeLink = (element) => {
      list.forEach((item) => item.classList.remove("active"));
      element.classList.add("active");
    };

    const onclick = (link, currentindex) => {
      const selectedItem = link.getAttribute("name");
      cards.forEach((card) => {
        card.classList.remove("active");
      });

      const currentCard = document.querySelector(`.card.${selectedItem}`);
      if (currentCard) {
        currentCard.classList.add("active");
        highlight(currentindex);
      }
    };

    const highlight = (currentindex) => {
      links.forEach((link) => {
        link.classList.remove("selectedLink");
      });
      links[currentindex].classList.add("selectedLink");
    };

    list.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeLink(item);
        onclick(item, index);
      });
    });

    links.forEach((link, index) => {
      link.addEventListener("click", () => onclick(link, index), false);
    });
  }, []);

  return (
    <div className="container">
      <aside>
        <div className="nav">
          <div className="toggle"></div>
          <ul>
            <li className="list active selectedLink" name="home">
              <a href="#" style={{ "--clr": "#f44336" }}>
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="text">Home</span>
              </a>
            </li>
            <li className="list" name="project">
              <a href="#" style={{ "--clr": "#ffa117" }}>
                <span className="icon">
                  <ion-icon name="document-outline"></ion-icon>
                </span>
                <span className="text">Project</span>
              </a>
            </li>
            <li className="list" name="experiences">
              <a href="#" style={{ "--clr": "#0fc70f" }} className="moresize">
                <span className="icon">
                  <ion-icon name="information-circle-outline"></ion-icon>
                </span>
                <span className="text">Experiences</span>
              </a>
            </li>
            <li className="list" name="photos">
              <a href="#" style={{ "--clr": "#2196f3" }}>
                <span className="icon">
                  <ion-icon name="image-outline"></ion-icon>
                </span>
                <span className="text">Photos</span>
              </a>
            </li>
            <li className="list" name="setting">
              <a href="#" style={{ "--clr": "#b145e9" }}>
                <span className="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className="text">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main>
        <div className="card active home">
          <div className="title">
            <h1>Homepage</h1>
          </div>
          <div className="content">Welcome to our homepage</div>
        </div>
        <div className="card project">
          <div className="title"><h1>Project</h1></div>
          <div className="content">Content goes here</div>
        </div>
        <div className="card experiences">
          <div className="title"><h1>Experiences</h1></div>
          <div className="content">Content goes here</div>
        </div>
        <div className="card photos">
          <div className="title"><h1>Photos</h1></div>
          <div className="content">Content goes here</div>
        </div>
        <div className="card setting">
          <div className="title"><h1>Setting</h1></div>
          <div className="content">Content goes here</div>
        </div>
      </main>
    </div>
  );
}

export default Hw3;
