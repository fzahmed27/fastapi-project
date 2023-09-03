import React, {Component} from "react";

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {counter: 0}; // Initialize the local state
        // Bind an event handler
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event){
        event.preventDefault();
        this.setState({counter: this.state.counter + 1});
    }
    
    render(){
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}

export default Timer;
