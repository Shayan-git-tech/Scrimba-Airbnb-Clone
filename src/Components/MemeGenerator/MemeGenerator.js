import React, {useState, useEffect} from 'react';

export default function MemeGenerator() {
const [meme, setMeme] = useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg" 
})

const [allMeme, setAllMeme] = useState([])

useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  .then(data => setAllMeme(data.data.memes))
  .catch(error => console.error("Error fetching memes:", error));
}, [])



function getMemeImage() {
  if (allMeme.length === 0) return;

  const randomNumber = Math.floor(Math.random() * allMeme.length)
  const url = allMeme[randomNumber].url
  setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))
  
}

function handleChange(event){
  const {name, value} = event.target;
  setMeme(prevMeme => ({
     ...prevMeme,
      [name]: value
  }))
}
  return (
    <div className='meme-generator'>
    <div className="meme-form">
    <label htmlFor="topText">Top Text
    <input type="text" name="topText" placeholder="Shut up" id="topText" onChange={handleChange} value={meme.topText}  />
    </label>

    <label htmlFor="bottomText">Bottom Text
    <input type="text" name="bottomText" placeholder="And take my money" id="bottomText" onChange={handleChange} value={meme.bottomText} />
    </label>

    <button type="submit" onClick={getMemeImage}>Get a new Meme Image 🖼</button>
    </div>
    <div className='meme-box' >
        <img src={meme.randomImage} alt="Meme" className='meme-image'/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
    </div>
  )
}
