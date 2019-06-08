import React, { Component } from 'react'

class Counter extends Component {
    render() { 
        let counter = this.props.counter;
        return ( 
            <React.Fragment>
                {this.props.children}
                <div className="text-danger">
                    <span className="badge badge-primary p-2 m-2">{this.formatCount()}</span>
                    <button className="btn btn-success btn-sm" onClick={() => this.props.incrementCount(counter)}>Add</button>
                    <button className="btn btn-warning ml-2 btn-sm" onClick={() => this.props.decrementCount(counter)}> Remove</button>
                    <button className="btn btn-danger ml-2 btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)}> Delete</button>
                </div> 
            </React.Fragment>
         );
    }

    formatCount = ()=>{
        const { value } = this.props.counter;
        return value;
    }
}
 
export default Counter;