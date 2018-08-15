import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import './TravelInsurance.css';

export default class TravelInsurance extends Component {

  nextPage(){
    this.props.history.push("/");
  }

  render(){
    return(
      <div>
        <h1>Your Travel Insurance</h1>
        <ul id="menu">
          <li>1. PERSONAL DETAILS</li>
          <li>2. REVIEW</li>
          <li>3. ACKNOWLEDGEMENT</li>
        </ul>
        <div className="div2">
          <h3><MaterialIcon  icon="check_circle_outline" color="white"/>Congratulations!</h3>
          <p>Your insurance purchased is confirmed on Thursday 08 march, 2018.</p>
          <p>A confirmation mail is on its way.</p>
        </div>
        <button onClick={(e) => this.nextPage(e)}>Buy New Policy</button>
      </div>
    );
  }
}
