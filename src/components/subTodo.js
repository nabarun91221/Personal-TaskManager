import "./subTodo.css"
import cut2 from "./visuals/cut2.png"
import { motion } from "framer-motion"
import { useState } from "react"
import subtaskLogo from "./visuals/subtask.png"
const SubTodos = (props) => {
    const [Done, setDone] = useState(false)
    const setDoneHandeler = () => {
        setDone(!Done);
        console.log(Done)
    }
    //const [el, setel] = useState("")

    return (
        <motion.div className="subtodos" onDoubleClick={setDoneHandeler} animate={props.theme == "rgba(255, 255, 255, 0.4)" ? { backgroundColor: "rgb(255,255,255)", color: props.TextColor, y: [100, 1], opacity: [0, 1] } : { backgroundColor: "rgb(50,50,50)", color: props.TextColor, y: [100, 1], opacity: [0, 1] }} transition={{ duration: 0.3 }} >
            <img src={subtaskLogo} height="5%" width="5%" className="subLogo" ></img>
            <motion.div className="subtodoText" style={Done ? { textDecoration: "line-through" } : ""} animate={Done === true && props.theme == "rgba(255, 255, 255, 0.4)" ? { backgroundColor: "#f0ffd6" } : ""}>{props.text}</motion.div>
            
        </motion.div>
    )
}
export default SubTodos