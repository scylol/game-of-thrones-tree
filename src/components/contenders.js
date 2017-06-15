import React from "react";

import ContenderBio from './contender-bio';

export default class Contenders extends React.Component {
  constructor(props) {
    super(props);
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
          onClick={() => this.props.getBio(person)}
        >
          {this.props.houseArray[index].name}
        </li>
      );
    });

    if (!this.props.bioVisible) {
      return (
        <div className="contenders">
          <button onClick={this.props.hideContenders}>Hide Contenders</button>
          {contenders}
        </div>
      );
    }
    return (
        <ContenderBio contenderBio={this.props.contenderBio} hideBio={this.props.hideBio} />
        
    )
  }
}
