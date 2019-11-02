import React from "react";

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
      temperatureUnit: "",
      details: ""
    };

  }

  componentDidMount() {
    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      let periods = result.properties.periods;
      this.setState({
        name: "Lab 5 Weather Report"
        temperature: periods[1].temperature,
        temperatureUnit: periods[1].temperatureUnit,
        details: periods[1].detailedForecast
      });
    })
    .catch((error) => {console.log(error)} );

  }

  render() {
    return(
      <div>
        {this.state.temperature}
        {this.state.temperatureUnit}
        <p>
          {this.state.details}
        </p>
      </div>
    );
  }

}

export default Weather;
