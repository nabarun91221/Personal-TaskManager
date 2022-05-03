import "./todoInputbox.css"
import add2 from "./visuals/add.png"
import { useState,useEffect } from "react"
const TodoInputbox = (props) => {
    const [new_todoText, setnew_todoText] = useState("")
    const [new_todo, setnew_todo] = useState({})

    useEffect(() => {
        if(Object.keys(new_todo).length !== 0)
         props.addTodo(new_todo)
    }, [new_todo])

    const set_newTodoText = (e) => {
       setnew_todoText(e.target.value);
    }
    const set_newTodo = () => {
        if (new_todoText!=="") {
            let obj = { text: new_todoText, done: false }
            setnew_todo(obj)
            setnew_todoText("");
        }
    }

    return (
        <div className="todoinputbox" style={props.SelectedListItem?{opacity:1}:{opacity:0}}>
            <div className="addLogo" onClick={set_newTodo} >
                <img src={add2} hight="60%" width="60%"></img>
            </div>
            <form onSubmit={e => { set_newTodo(); e.preventDefault();}} className="form">
                <input type="text" className="addText" value={new_todoText} onChange={set_newTodoText}></input>
            </form>

        </div>
    )
}
export default TodoInputbox;