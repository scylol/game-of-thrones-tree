import React from "react";

export default class ContenderBio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const contender = this.props.contenderBio.map((value, index) => {
      let splitArray = value.split(" ");
      let dataName = splitArray[0];
       return (
        <li key={index} className='contender-data' id={dataName}>
          {value}
        </li>
      );
    });

    return (
      <div className="contender">
      <button onClick={this.props.hideBio}>Hide Bio</button>
        {contender}
      </div>
    );
  }
}
