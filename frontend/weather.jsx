import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: undefined
        }
        this.weatherRequest = this.weatherRequest.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((response) => {
           const latitude = response.coords.latitude;
           const longitude = response.coords.longitude;
           this.weatherRequest([latitude, longitude])
        });
    }

    weatherRequest(location){
      const xhr = new XMLHttpRequest();

      const latitude = location[0];
      const longitude = location[1];
      const apiKey = 'a98b28f125738d05cd50109f158f1513';
      // step 2 - specify path and verb
      xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`);

      // step 3 - register a callback
      const func = this;
      xhr.onload = function() {
        const response = JSON.parse(xhr.response);
        const temp = response.main.temp;
        const location = response.name;
        func.setState({weather: [temp, location]});
      }

      xhr.send();
    }

    render(){

        if (this.state.weather === undefined) {
            return (
                <div className="weather-div">
                    <h1>Weather</h1>
                    <div className="weather-contents">
                        <p><span>Loading wea</span><span className="white">ther</span> </p>
                    </div>
                </div>
            )
        } else {
            return (
            <div className="weather-div">
                <h1>Weather</h1>
                <div className="weather-contents">
                    <p>{this.state.weather[1]}</p>
                    <p><span> {this.state.weather[0]} degr</span><span className="white">ees</span> </p>
                </div>  
            </div>
            )
        }
      
    }
}

export default Weather;