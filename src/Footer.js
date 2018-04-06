import React from 'react';
import './App.css';

function Footer(props){
    return (
        <h4><a href={props.url}>{props.destination}</a></h4>
    )
}

export default Footer
