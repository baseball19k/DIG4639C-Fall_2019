import React from "react";
import "./index.css";

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Lab5 Weather Data",
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
        name: periods[1].name,
        temperature: periods[1].temperature,
        temperatureUnit: periods[1].temperatureUnit,
        details: periods[1].detailedForecast
      });

    })
    .catch((error) => {console.log(error)} );

  }

  render() {
    return(
      <div className="card">
        <span className="close"
        onClick={this.props.dataclick}
        datatitle={this.props.title}>&times;</span>
        <h1>
        {this.state.name}
        </h1>
        <h4>
        {this.state.temperature}
        {this.state.temperatureUnit}
        </h4>
        <p>
          {this.state.details}
        </p>
      </div>
    );
  }

}

export default Weather;
