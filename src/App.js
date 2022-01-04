import React, { useState, useEffect } from 'react'
import './App.css'

import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import AddTodo from './MyComponents/AddTodo'
import About from './MyComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  let initTodo
  if (localStorage.getItem("todolist") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todolist"))
  }

  const onDelete = (todo) => {
    console.log("I am deleted : ", todo)

    setTodolist(todolist.filter((prevItem) => { return prevItem !== todo }))

    localStorage.getItem("todolist", JSON.stringify(todolist))
  }

  const addtodo = (title, des) => {
    console.log("i am editing")
    let id
    if (todolist.length === 0) {
      id = 1
    } else {
      id = todolist[todolist.length - 1].id + 1
    }
    const myTodo = {
      id: id,
      title: title,
      des: des
    }
    setTodolist([...todolist, myTodo])
  }
  const [todolist, setTodolist] = useState(initTodo)


  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist))
  }, [todolist])


  return (
    <div className="App">
      <Router>
        <Header Login="yes" isLogin={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addtodo={addtodo} />
                <Todos todo={todolist} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
