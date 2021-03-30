import React from 'react';

function List(props)
{

    return(
        <div className = "List">
            <input type = "checkbox" />
            <p>{props.task}</p>
        </div>
    )



}

export default List;