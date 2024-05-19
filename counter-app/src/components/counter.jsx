import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,

        tags: ["tag1", "tag2", "tag3"],
    };
    render() {
        let classes = "badge  m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return <div>{this.state.tags.length===0 && "please create new tags"}{this.renderTags()}</div>;
    }
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no Tags!</p>;

        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }
}

export default Counter;
