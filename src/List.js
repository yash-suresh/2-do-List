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
    render()
    {
        return (
            <div className="List">
                <input type="checkbox" checked={this.props.completed}/>
                <p>{this.props.task}</p>
                <p style={{display: !this.props.item && "none"}}> Use a {this.props.item}</p>
            </div>
        )
    }

}



export default List;

//we can use either 'class based' or 'functional' components.
//We just need to remember to add 'this' before props.
/*also, the return() statement, comes inside the render() method. We can create functionality inside
other methods outside render(), and call them inside the latter*/