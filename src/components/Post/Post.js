import React from 'react';
import './Post.css';

const post = (props) => {
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title.split(" ").splice(0, 2).join(" ")}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
};

export default post;