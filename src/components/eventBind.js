import React, { Component } from 'react'

export class eventBind extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    }
    clickHAndler(){
        this.setState({
            message:"Good Bye"

        })
    }
    render() {
    
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHAndler.bind(this)}>click</button>
        
      </div>
    )
  }
}

export default eventBind
