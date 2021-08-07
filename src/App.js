import "./styles.css";
import { useState } from "react";

const movies = {
  thriller: [
    {
      name: "Call",
      image: "./images/call.jpg"
    },
    {
      name: "Saw",
      image: "./images/saw.jpg"
    },
    {
      name: "Forgotten",
      image: "./images/forgotten.jpg"
    }
  ],
  love: [
    {
      name: "Me before you",
      image: "./images/mebefore.jpg"
    },
    {
      name: "To all the boys",
      image: "./images/toall.jpg"
    },
    {
      name: "The Kissing Booth",
      image: "./images/kissing.jpg"
    }
  ],
  horror: [
    {
      name: "Veronica",
      image: "./images/veronics.jpg"
    },
    {
      name: "Conjuring",
      image: "./images/conj.jpg"
    },
    {
      name: "Ring",
      image: "./images/Ring.jpg"
    },
    {
      name: "Grudge",
      image: "./images/Grudge.jpg"
    },

    {
      name: "Insidious",
      image: "./images/insi.jpg"
    }
  ]
};

export default function App() {
  var [curr, setCurr] = useState([]);

  function clickHandler(name) {
    if (name === "thriller") {
      // console.log(movies[name]);

      setCurr(movies[name]);
    } else if (name === "love") {
      // console.log(movies[name]);
      setCurr(movies[name]);
    } else {
      // console.log(movies[name]);
      setCurr(movies[name]);
    }
  }

  return (
    <div className="App">
      <h1>Movie Recommendation 🍕🍿</h1>
      <div className="wrapper">
        <div className="container">
          <button className="box" onClick={() => clickHandler("thriller")}>
            Thriller 😨
          </button>
          <button className="box" onClick={() => clickHandler("love")}>
            Love️ ❤️
          </button>
          <button className="box" onClick={() => clickHandler("horror")}>
            Horror 👻
          </button>
        </div>
        <div>
          <hr />
          <div className="listC">
            {curr.map((items) => {
              return (
                <div
                  className="li"
                  style={{
                    display: "flex"
                  }}
                >
                  <div
                    style={{
                      flex: "1"
                    }}
                  >
                    <img src={`${items.image}`} />
                  </div>
                  <div
                    style={{
                      flex: "1",
                      marginTop: "40px",
                      fontSize: "25px",
                      fontWeight: "bold"
                    }}
                  >
                    {items.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
