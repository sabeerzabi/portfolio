import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value:  this.props.counter.value,
        key:this.props.counter.id
    };

    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
    }
    test(){

    }
    incrementCount = product =>{
        this.setState({
           value: this.state.value + 1
        });
    };
    decrementCount = product =>{
        if(this.state.value === 0){
            return null;
        }
        this.setState({
           value: this.state.value - 1
        });
    };
    render() { 
        let key = this.props.counter.id;
        return ( 
            <React.Fragment>
                {this.props.children}
                <div className="text-danger">
                    <span className="badge badge-primary p-2 m-2">{this.formatCount()}</span>
                    <button className="btn btn-success btn-sm" onClick={() => this.incrementCount(key)}>Add</button>
                    <button className="btn btn-warning ml-2 btn-sm" onClick={() => this.decrementCount(key)}> Remove</button>
                    <button className="btn btn-danger ml-2 btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)}> Delete</button>
                </div> 
            </React.Fragment>
         );
    }

    formatCount = ()=>{
        const { value } = this.state;
        return value;
    }
}
 
export default Counter;