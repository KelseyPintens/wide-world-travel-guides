import React, { Component } from 'react';



class Weather extends Component {

    constructor(){
        super();

        this.state = {
            weatherLoaded: false,
            ObjResult: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getWeather();
    }

    getWeather(){
        console.log('getWeather');
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.value},us&appid=6b19bec2b5b47af4fb4a80fdc0a1ef6c`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log("get weather result: ", result);
                this.setState({
                weatherLoaded: true,
                temperature: result.main.temp,
                city: result.name,
            }); console.log(result.name);
            },
        )

    } 
    
    render(){
        return <div>
        <h2>Get Weather</h2>
  
        <form onSubmit={this.handleSubmit}>
            <h3>Enter Zip Code:</h3>
            <input className="zip" value={this.state.value} onChange={this.handleChange} type="text"></input>
            <button className="submit-btn" type="submit">Submit</button>
        </form>
        
        <div className="temp">
            <div>{this.state.city}</div>
            <div>{this.state.temperature}</div>
        </div>
        
        </div>
    }
}

export default Weather
