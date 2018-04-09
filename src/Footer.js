import React from 'react';
import './App.css';

function Footer(props){
    return (
        <div>
            <h4><a href={props.url}>{props.destination}</a></h4>
        </div>
    )
}

export default Footer
