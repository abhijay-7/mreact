import React, { Component } from 'react'

class Counter extends Component {
    state = { 
       count: 0
     } 
    render() { 
        let classes = "badge  m-2 bg-"
        classes+= (this.state.count===0)? 'warning': 'primary'
        return (
            <div>
        <span styles={{font:"Roboto"}}    className={classes}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>incremement</button>
            </div>
    );
    
    }

    formatCount(){
        const count= this.state.count;
        return count === 0 ? 'zero':count;
    }

}
 
export default Counter;