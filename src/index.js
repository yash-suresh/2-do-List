import React from 'react';//enables JSX to work
import ReactDOM from 'react-dom';
import './index.css';
import List from "./List.js"
import Items from "./ToDoistItems.js"




function Header()
{
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();

    if(hours < 12)
    {
        timeOfDay = "Morning";
    }
    else if (hours > 12 && hours < 17)
    {
        timeOfDay = "Afternoon";
    }
    else
    {
        timeOfDay = "Evening";
    }

    return(
        <header className= "Header">
            <h1>
                To-Do List
            </h1>
            <h2>
                Good {timeOfDay}, Yash
            </h2>
        </header>
    )
}




/*function Welcome()
{

    const TaskList = Items.map(thing => <List task = {thing.task} item = {thing.item}
                                              completed = {thing.completed}/>);

    /!*if we want to map items like we've done here,we use the '.map()' function,
    theFileweWanttoMap.map(nameTheObjectWeMatching => JSXelementWeMappingToWantToMapItTo)
    We assign this to a constant var*!/

    //Problem is, since we are passing it as props, these properties are immutable.
    


    return(
        <div>

            <Header/>
            {TaskList};

        </div>
    )//we can return JSX elements by wrapping them up in () and div
    //the above is how we pass props, allowing us to reuse the same template, with different properties
}*/

class Welcome extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isLoading : false,
            character:{}
        }
    }

    componentDidMount()
    {
        this.setState({isLoading:true});//'loading' shows up when the data is still being fetched
        fetch("https://swapi.dev/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({character:data})
            })
        this.setState({isLoading:false});
    }


    render()
    {
        const text = this.state.isLoading ? "loading..." : this.state.character.name//this is coniditional rendering

        const TaskList = Items.map(individualItem => <List task = {individualItem.task}/>);
        return(

            <div>
                <Header/>
                {TaskList}
                {text}

            </div>
        )
    }
}



//the function render displays everything on the webpage.
ReactDOM.render(
    <Welcome/>,
    document.getElementById('root')
    //root is default 'hoster', anything we want to host needs to be on here
    //ReactDOM.render(What do I want to render, where do i want to render it)
);



//JSX is a pseudo code which allows us to implement HTML elements in JS