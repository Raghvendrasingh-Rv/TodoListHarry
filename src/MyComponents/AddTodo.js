import React,{useState} from 'react'

function AddTodo(props) {
    const [title ,setTitle] = useState("")
    const [des ,setDes] = useState("")

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !des){
            alert("Title or Description can not be blank")
        }else{
        props.addtodo(title ,des)
        setTitle("")
        setDes("")
    }
    }

    return (
        <div className="container">
        <h1>Add todo</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="title" />
                        
  </div>
                    <div className="mb-3">
                        <label htmlFor="des" className="form-label">Description</label>
                        <input type="text" value={des} className="form-control" onChange={(e)=>{setDes(e.target.value)}} id="des" />
  </div>
                            <button type="submit" className="btn btn-sm btn-success">Add todo</button>
</form>
                    </div>
    )
}

export default AddTodo
