import React from 'react'

function Todoitems({todo , onDelete}) {
    return (
        <div>
            <h4>{todo.id}</h4>
            <p>{todo.title}</p>
            <p>{todo.des}</p>
            <button onClick={()=>{onDelete(todo)}}>DELETE</button>
        </div>
    )
}

export default Todoitems
