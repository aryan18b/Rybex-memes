import React, { useEffect } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

export default function Form(prop) {
  let [meme, update_meme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setallMemes(data));
  }, []);

  let [allMemes, setallMemes] = React.useState({});
  function getMemeImage() {
    let meme_array = allMemes.data["memes"];
    let random_meme = meme_array[Math.floor(Math.random() * meme_array.length)];
    let url = random_meme["url"];

    update_meme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    update_meme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  const memeRef = React.createRef();


  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />

        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />

        <button onClick={getMemeImage} className="form--button">
          Get a new meme template 
        </button>

        <div
          onClick={() => exportComponentAsJPEG(memeRef)}
          className="download"
        >
          <div className="icon-container">
            <img src="./download.png" />
            <span>Download Meme</span>
          </div>
        </div>
      </div>

      <div className="meme-container">
        <div ref={memeRef} className="meme">
          <div className="main-meme-template">
            <img src={meme.randomImage} className="meme--image" />
          </div>
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
