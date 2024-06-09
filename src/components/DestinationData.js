import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <h3>{this.props.address}</h3>
        </div>
        <div className="img-box1">
          <iframe width="600px" height="350px" franeborder ="0" src={this.props.img1}></iframe>
        </div>
      </div>
    );
  }
}

export default DestinationData;
