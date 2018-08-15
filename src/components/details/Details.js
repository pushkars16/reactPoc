import React, {Component} from 'react';
import './Details.css';
import ToggleDisplay from 'react-toggle-display';
import {withRouter} from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

class Details extends Component {

  constructor(props){
    super(props);

    this.state = {
      customerDetails : this.props.UserInfo,
      pageName : this.props.PageName,
      show: false
    };

  }

  editFields() {
    this.setState({
      show: true
    })
  }

  confirmDetails(event) {
    if (this.state.pageName === "Home") {
      this.props.history.push("/reviewAndConfirm", [this.state.customerDetails]);
    }
    else {
      this.props.history.push("/travelInsurance");
    }
  }

  render() {
    const {customerDetails,pageName, show} = this.state;
    const isReviewAndConfirm = pageName==="ReviewAndConfirm";

    return (
      <div className="container">
        <div className="vl d"><span id="details">Contact Details</span>
          <ToggleDisplay if={pageName === "ReviewAndConfirm"}>
            <span onClick={(e) => this.editFields(e)}>
              <MaterialIcon  icon="create" color="black" size="tiny"/><span id="editText">Edit</span>
            </span>
          </ToggleDisplay>
          <br/>
          <span className="tiny">*Marked Fields must be completed, and can be completed in English.</span>
        </div>
        <form onSubmit = {(e) => this.confirmDetails(e)}>
          <label>Given Names</label>
          <ToggleDisplay if={show && isReviewAndConfirm}>
            <input type="text" placeholder={customerDetails.fName} /> <br/>
          </ToggleDisplay>
          <ToggleDisplay if={!show}>
            <b>{customerDetails.fName}</b> <br/>
          </ToggleDisplay>
          <label>Family Name</label>
          <ToggleDisplay if={show && isReviewAndConfirm}>
            <input type="text" placeholder={customerDetails.lName} /> <br/>
          </ToggleDisplay>
          <ToggleDisplay if={!show}>
            <b>{customerDetails.lName}</b> <br/>
          </ToggleDisplay>
          <input type="submit" value={!isReviewAndConfirm ? "Confirm" : "Buy Now"}/>
        </form>
      </div>
    );
  }
}


export default withRouter(Details);
