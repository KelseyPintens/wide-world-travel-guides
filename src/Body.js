import React from 'react';
import prettyPic from './images/andrew-charney-580161-unsplash.jpg'
import './App.css';

function Body(){
    return (
        <img src={prettyPic} className="App-pic" alt="pic" />
    )
}

export default Body;