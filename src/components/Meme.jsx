import React from "react"
import memesData from "../assets/memesData"

export default function Meme() {
    let [allMemeImages, setAllMemeImages] = React.useState(memesData)
    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        imgUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(e) {
        let {name, value} = e.target
        setMeme(prev => {
            return {
                ...prev, 
                [name]: value
            }
        })
    }
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prev => {
            return {
                ...prev, 
                imgUrl: memesArray[randomNumber].url
            }
        })
    }

    return (
        <div className="meme-component">
            <div className="wrapper wrapper-meme">
                <div className="form-box">
                    <input  type="text" 
                            name="topText" 
                            id="top-text-field" 
                            value={meme.topText} 
                            onChange={handleChange}
                    />
                    <input  type="text" 
                            name="bottomText" 
                            id="bottom-text-field" 
                            value={meme.bottomText} 
                            onChange={handleChange}
                    />
                    <input type="submit" onClick={getMemeImage} value="Get a new meme image  🖼" />
                </div>
                <div className="img-box">
                    <img srcSet={meme.imgUrl} alt="" />
                    <h1 className="meme-text__top">{meme.topText}</h1>
                    <h1 className="meme-text__bottom">{meme.bottomText}</h1>
                </div>
            </div>
        </div>
    )
}