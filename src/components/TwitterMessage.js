import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue:'',
    };
    this.handleMessageChange = this.handleMessageChange.bind(this)
  }

  handleMessageChange = (e) => {
    let currentInput = e.target.value
    this.setState({
      inputValue: currentInput
    })
    console.log(this.state.inputValue)
    
  }

 

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.inputValue} onChange={this.handleMessageChange}/>
        <div>{this.props.maxChars - this.state.inputValue.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
