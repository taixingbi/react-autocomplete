import React, { Component } from 'react';

class autocomplete extends Component {
  constructor(props){
    super(props)
    this.state={
      suggestions: [],
    }

    this.items=[
      'david',
      'damien',
      'sara',
      'jane',
    ];
  }

  handleOnChange= e=>{
    const value= e.target.value;

    let sugesstions= [];
    if(value.length > 0){
      const regex= new RegExp(value);

      sugesstions= this.items.sort().filter( item => regex.test(item) );
      this.setState({sugesstions});
      console.log(sugesstions);
    }
  }
 
  render() {
    const { sugesstions=[] }= this.state;
    return (
      <div>
        {this.items.map( item =>  <li> {item}  </li>  )}

        <input onChange={this.handleOnChange} type= "text" />

        { sugesstions.map( sugesstion => <li> {sugesstion} </li>) }


      </div>
    );
  }
}

export default autocomplete;
