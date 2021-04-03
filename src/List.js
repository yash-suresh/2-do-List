import React from 'react';

/*function List(props)
{


    return(
        <div className = "List">
            <input type = "checkbox" checked={props.completed}/>
            <p>{props.task}</p>
            <p style={{display: !props.item && "none"}}> Use a {props.item}</p>
        </div>
    )
    //in line 11, the code means that if there is no 'item' provided, we need not display the following



}*/

class List extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name:"Yash",
            isChecked: false};

        this.toggleChange = this.toggleChange.bind(this);
    }

    toggleChange()
    {
        this.setState(
            {
                isChecked: !this.state.isChecked,
            }
        )
    }

    render()
    {
        return (
            <div className="List">
                <input type="checkbox" defaultChecked={this.isChecked} onChange={this.toggleChange}/>
                <p>{this.props.task}</p>
                <p style={{display: !this.props.item && "none"}}> Use a {this.props.item}</p>
                <p> {this.state.name}</p>
            </div>
        )
    }
    /*on line 46, the default 'check' status is false, but we then call the function
    which inverts the check status. This allows us to change the state.
        */
}

export default List;

//we can use either 'class based' or 'functional' components.
//We just need to remember to add 'this' before props, using 'class'
/*also, the return() statement, comes inside the render() method. We can create functionality inside
other methods outside render(), and call them inside the latter*/

//Props are immutable