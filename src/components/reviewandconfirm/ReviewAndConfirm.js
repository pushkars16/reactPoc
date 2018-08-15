import React, {Component} from 'react';
import Details from '../details/Details';

class ReviewAndConfirm extends Component {

  constructor(props){
    super(props);

    this.state = {
      customerDetails : this.props.location.state[0]
    };

  }

  render() {
    return (
      <div>
        <Details UserInfo={this.state.customerDetails} PageName="ReviewAndConfirm"/>
      </div>
    );
  }
}


export default ReviewAndConfirm;
