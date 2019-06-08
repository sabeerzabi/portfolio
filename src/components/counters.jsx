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
    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };
    render() { 
        return (            
            <React.Fragment>
                <div style= {{ backgroundImage: this.state.imageUrl}}>
                    {this.state.counters.map(counter => 
                        <Counter key={counter.id} counter={counter} onDelete={this.handleDelete}>
                            <p>---------------------</p>
                        </Counter>
                    )}
                </div>
            </React.Fragment>
        );
    }

}
 
export default Counters;