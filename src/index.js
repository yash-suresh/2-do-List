import React from 'react';//enables JSX to work
import ReactDOM from 'react-dom';
import './index.css';
import List from "./List.js"


function Welcome()
{

    return(
        <div>
            <h1>
                To-Do List
            </h1>

            <List />


        </div>
    )//we can return JSX elements by wrapping them up in () and div
}


//the function render displays everything on the webpage.
ReactDOM.render(
    <Welcome/>,
    document.getElementById('root')
    //root is default 'hoster', anything we want to host needs to be on here
    //ReactDOM.render(What do I want to render, where do i want to render it)
);

//JSX is a pseudo code which allows us to implement HTML elements in JS