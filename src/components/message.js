import React,{Component} from "react";

class message extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello everyOne"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thanks for subscribing!!"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default message