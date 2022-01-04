import React from 'react'

function Footer() {
    let footerStyle={
        background:"black",
        width:"100%",
        color:"white",
        padding:"0.1px"
    }
    return (
        <div style={footerStyle}>
            <p> Copyright &copy; MyTodoList.com</p>
        </div>
    )
}

export default Footer
