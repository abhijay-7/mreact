import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,

        tags: ["tag1", "tag2", "tag3"],
    };
    render() {
        let classes = "badge  m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return (
            <div>
                <span styles={{ font: "Roboto" }} className={classes}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">
                    incremement
                </button>
                <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
            </div>
        );
    }

    formatCount() {
        const count = this.state.count;
        return count === 0 ? "zero" : count;
    }
}

export default Counter;
