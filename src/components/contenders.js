import React from "react";

import ContenderBio from './contender-bio';

export default class Contenders extends React.Component {
  constructor(props) {
    super(props);

    this.getBio = this.getBio.bind(this);
    this.hideBio = this.hideBio.bind(this);

    this.state = {
      showBio: false,
      contenderBio: []
    };
  }

  getBio(person) {
    let contenderBio = Object.keys(person).map((value, index) => {
      return [value] + ": " + person[value];
    });
    this.setState({ contenderBio: contenderBio });
    this.setState({ showBio: true });
  }

  hideBio() {
    this.setState({ showBio: false });
  }

  render() {
    const contenders = this.props.houseArray.map((person, index) => {
      let nameArray = person.name.split(" ");
      let firstName = nameArray[0];
      return (
        <li
          key={index}
          className="contender-name"
          id={firstName}
          onClick={() => this.getBio(person)}
        >
          {this.props.houseArray[index].name}
        </li>
      );
    });

    if (!this.state.showBio) {
      return (
        <div className="contenders">
          <button onClick={this.props.hideContenders}>Hide Contenders</button>
          {contenders}
        </div>
      );
    }
    return (
        <ContenderBio contenderBio={this.state.contenderBio} hideBio={this.hideBio} />
    )
  }
}
