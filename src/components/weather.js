import React from "react";
import "./Weather.css";

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city && 
                    <div>
                        <h3>
                            <p>Your location: {this.props.city}, {this.props.country}</p>
                            <p>Temperature: {this.props.temp} °C</p>
                            <p>Sunset: {this.props.sunset}</p>
                        </h3>
                    </div>
                }
            </div>
        );
    }
}

export default Weather;