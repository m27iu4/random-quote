import React, { useState } from 'react'
import './randomQuote.css'
import twitter_icon from '../Assets/twitter-logo.png'
import reload_icon from '../Assets/reload.png'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch('https://type.fit/api/quotes');
        quotes = await response.json();
    }

    const [quote, setQuote] = useState({
        text: 'Random Quote Generator',
        author: 'M24iu7'
    })

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }

    const twitter = () => {
        window.open(`https://twiter.com/intent/tweet?text=${quote} - ${quote.author.split(',')[0]}`)
    }
   

    loadQuotes();

    return(
        <div className='container'>
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <img src={twitter_icon} onClick={twitter} alt="" />
                        <img src={reload_icon} onClick={random} alt="" />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default RandomQuote;