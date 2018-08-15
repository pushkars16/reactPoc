import React, {Component} from 'react';
import Details from '../details/Details';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      customerDetails : {},
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('data.json')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded : true,
          customerDetails : result
        });
      },
      (error) => {
          this.setState({
            isLoaded:true,
            error
          });
      }
    )
  }

  render() {

    const {isLoaded, error, customerDetails} = this.state;
    if(error) {
      return <div>Error : {error.message}</div>
    }
    else if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div>
          <Details UserInfo={customerDetails} PageName="Home"/>
        </div>
      );
    }
  }
}

export default Home;
