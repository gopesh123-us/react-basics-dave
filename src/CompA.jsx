import React from 'react';
import ReactDOM from 'react-dom';

function MediaCard(props){
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <image src={props.imgUrl}/>
        </>
    );
}

ReactDOM.render(<MediaCard title="Scenic" body="The most beautiful place on earth" imgUrl="https://unsplash.com/photos/an-aerial-view-of-a-beach-with-a-body-of-water-WSxpuUQ0dEs"/>, document.querySelector('#root'));