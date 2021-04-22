import { Component } from "react";

export class ToDoItemWithState extends Component {
  state = {
    nrOfClick: 0,
  };

  handleIncreaseClick = () => {
    console.log("click on item");
    this.setState({ nrOfClick: this.state.nrOfClick + 1 });
  };

  render() {
    return (
      <div className="to-do-item" onClick={this.handleIncreaseClick}>
        <input type="checkbox" defaultChecked={this.props.checkValue} />
        <p>{this.props.label}</p>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/860/860829.svg?token=exp=1618938202~hmac=5372da9d227dec8ad0c250a251d064ab"
          alt="trash can"
        />
        <p>{this.state.nrOfClick}</p>
      </div>
    );
  }
}
