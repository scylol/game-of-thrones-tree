import React from 'react';


export default class ContenderBio extends React.Component {
  
  constructor(props) {
    super(props);
 }
 
  render() {

    const contender = this.props.contenderBio.map((value, index) => {
        console.log(value)
            let nameArray = value.split(' ');
            let firstName = nameArray[1];
            return <li key={index} className='contender-name' id={firstName+'Bio'}>
                {value}
            </li>    
        })

    return (
        <div className='contender'>
            <button onClick={this.props.hideBio}>Hide Bio</button>
            {contender}
        </div>    

    )
  }
}

