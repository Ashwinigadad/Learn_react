import React, { Component } from 'react'

export class userGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    

  render() {
    if(this.state.isLoggedIn){
        return (
            <div>
                <h1>welcome Ashwini</h1>
              
            </div>
          )
         
    }
    else{
        return (
            <div>
                <h1>welcome Guest</h1>
              
            </div>
          )

    }
   
  }
}

export default userGreeting
