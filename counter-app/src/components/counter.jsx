import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = ()=> {
        console.log("Increment Clicked", this);
        this.setState({count:this.state.count+1});
    }
    getBadgeClass() {
        let classes = "badge  m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    render() {
        return (
            <div>
                <span
                    styles={{ font: "Roboto" }}
                    className={this.getBadgeClass()}
                >
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    incremement
                </button>
            </div>
        );
    }

  

    formatCount() {
        const count = this.state.count;
        return count === 0 ? "zero" : count;
    }
}

export default Counter;
