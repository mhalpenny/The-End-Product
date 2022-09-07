import React, { Component } from 'react';
 
class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "aGuideHubt"
    }
  }
 
  updateContent = () => {
      this.setState({ message: "Welcome To aGuideHub!"});
  }
 
  render() {
    return (
      <div>
        <div className="h1 bg-danger text-white text-center p-2">
          { this.state.message }
        </div>
        <div className="text-center">
          <button className="btn btn-danger" onClick={this.updateContent}>
            Click Me
          </button>
        </div>
      </div>
    );
  }
}
 
export default Homepage;