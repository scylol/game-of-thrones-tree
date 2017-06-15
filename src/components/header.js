import React from "react";
import Contenders from "./contenders";
import Houses from "../houses";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.getHouseMembers = this.getHouseMembers.bind(this);
    this.hideContenders = this.hideContenders.bind(this);
    this.getBio = this.getBio.bind(this);
    this.hideBio = this.hideBio.bind(this);

    this.state = {
      showTree: false,
      houseArray: [],
      bioVisible: false,
      contenderBio: []
    };
  }

  getHouseMembers(house) {
    let houseArray = Houses[house];
    this.setState({ houseArray: houseArray });
    this.setState({ showTree: true });
    this.setState({ bioVisible: false });
  }

  hideContenders() {
    this.setState({ showTree: false });
  }

  // Methods for contender component
  getBio(person) {
    let contenderBio = Object.keys(person).map((value, index) => {
      return [value] + ": " + person[value];
    });
    this.setState({ contenderBio: contenderBio });
    this.setState({ bioVisible: true });
  }

  hideBio() {
    this.setState({ bioVisible: false });
  }

  render() {
    const houses = Object.keys(Houses).map((house, index) =>
      <li
        key={index}
        className="house-name"
        value={house}
        id={house}
        onClick={() => this.getHouseMembers(house)}
      >
        {house}
      </li>
    );

    if (!this.state.showTree) {
      return (
        <div className="house">
          <h2>Houses of Game of Thrones</h2>
          <div className="houses">
            {houses}
          </div>
        </div>
      );
    }
    return (
      <div className="house">
        <h2>Houses of Game of Thrones</h2>
        <div className="houses">
          {houses}
        </div>
        <Contenders
          houseArray={this.state.houseArray}
          hideContenders={this.hideContenders}
          bioVisible={this.state.bioVisible}
          contenderBio={this.state.contenderBio}
          getBio={this.getBio}
          hideBio={this.hideBio}
        />
      </div>
    );
  }
}
