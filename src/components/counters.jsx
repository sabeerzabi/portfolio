import React, { Component } from 'react'
import Counter from "./counter";
 
class Counters extends Component {
     state = {
        counters:[
            {id: 1, value: 2},
            {id: 2, value: 6},
            {id: 3, value: 4},
            {id: 4, value: 1},
            {id: 5, value: 8}
        ],
        imageUrl: "http://picsum.photos/id/500/500/50?grayscale"
    };
    /* Inrement */
    incrementCount = counter =>{
        /* Clone data */
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index].value = counter.value + 1;
        this.setState({counters});
    };
    /* Count */
    totalCount = () =>{
        return this.state.counters.reduce((total, counter) =>{
            return total + counter.value;
        }, 0)
    }
    /* Decrement  */
    decrementCount = counter =>{
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        if(counter.value  === 0){
            return null;
        }
        counters[index].value = counter.value - 1;
        this.setState({counters});
    };
    /* Reset  */
    resetCount = () =>{
        /* Clone data */
        let counters = [...this.state.counters];
        counters = counters.map(c =>{
            let counter = {...c};
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    };
    /* Delete */
    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };
    render() { 
        return (            
            <React.Fragment>
                <div style= {{ backgroundImage: this.state.imageUrl}}>
                    <button className="btn btn-info btn-lg" onClick={this.resetCount}>Reset ({this.totalCount()})</button>
                    {this.state.counters.map(counter => 
                        <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} incrementCount={this.incrementCount} decrementCount={this.decrementCount}>
                            <div className="m-0 p-0 text-left text-danger">Product - {counter.id}</div>
                        </Counter>
                    )}
                </div>
            </React.Fragment>
        );
    }

}
 
export default Counters;