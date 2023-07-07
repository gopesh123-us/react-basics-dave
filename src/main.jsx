/**import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
**/

import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

const date = new Date();
function Greetings() {
  return <div className="app">Happy New Year {date.getFullYear()}</div>;
}

function HelloFullName(props){
  return <div className="app">Hello Dear {props.firstName} {props.lastName}</div>
}

const MetaVerse = (prop) => {
  return <div className="app">Hello {prop.name}, roaming the Metaverse!</div>
};

function MediaCard(props){
  return (
    <>
      <div className="app">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          <img src={props.imgUrl}></img>
      </div>
    </>
  );
};

ReactDOM.render(<Greetings />, document.querySelector('#root'));
ReactDOM.render(<HelloFullName  firstName="Gopesh" lastName="Sharma"/>, document.querySelector('#root'));
ReactDOM.render(<MetaVerse name="Gopesh" />, document.querySelector('#root'));
ReactDOM.render(<MediaCard title="Scenic" body="The most beautiful place on earth" imgUrl="https://images.unsplash.com/photo-1688636596185-798367e2cb6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"/>, document.querySelector('#root'));




