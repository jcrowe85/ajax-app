import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id !== null) {
            post = (
                <div className="FullPost">
                    <h1>{this.props.id}</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        } 

        return post;
    }
}

export default FullPost;