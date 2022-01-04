import React from 'react'
import Todoitems from './Todoitems'

function Todos(props) {
    return (
        <div>
            <h2>TODO LIST : </h2>
            {props.todo.length===0?"WARNING : No item left":
            props.todo.map((obj)=>{
                return <Todoitems todo={obj} key={obj.id} onDelete={props.onDelete}/>
            })
            }
        </div>
    )
}

export default Todos
