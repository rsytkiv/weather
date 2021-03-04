import React from "react";
import Info from "./components/info";
import Weather from "./components/weather";
import Form from "./components/form";

const api = "fe6e126c90ade2cba04635a773627ac8";

class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (event) =>{
    event.preventDefault();
    const city = event.target.elements.city.value;
    

  if(city){
    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
    const data = await api_url.json();

    var sunset = data.sys.sunset;
    var date = new Date();
    date.setTime(sunset);
    var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    let temp = data.main.temp;
    let tempFToCel = Math.floor(temp - 273.15);

    this.setState({
      temp: tempFToCel,
      city: data.name,
      country: data.sys.country,
      sunset: sunset_date,
      error: ""
    });
  }
}

  render(){
    return(
      <div>
        <Info />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunset={this.state.sunset}
          error={this.state.error}
        />
        <Form weatherMethod={this.gettingWeather} />
      </div>
    )
  }
}
export default App;