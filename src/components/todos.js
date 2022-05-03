import "./todos.css"
import cut2 from "./visuals/cut2.png"
import { motion } from "framer-motion"
import { useState } from "react"
const Todos = (props) => {
    const [Done, setDone] = useState(false)
    const setDoneHandeler = () => {
        setDone(!Done);
        console.log(Done)
    }
    const [el, setel] = useState("")
    
    const ontak = () => {
        props.setdetailsToggle(true)
        console.log("the display state changed")
    }

    return (
        <motion.div onClick={props.select} onTap={ontak}  className="todos" animate={props.theme=="rgba(255, 255, 255, 0.4)"?{backgroundColor:"rgb(255,255,255)",color:props.TextColor,y:[100,1],opacity:[0,1]}:{backgroundColor:"rgb(50,50,50)",color:props.TextColor,y:[100,1],opacity:[0,1]}} transition={{duration:0.3}} >
            <div className="_checkBox"><input type="checkbox"  onClick={setDoneHandeler} checked={Done}></input></div>
            <motion.div className="todoText" style={Done ? { textDecoration: "line-through" } : ""} animate={Done === true && props.theme == "rgba(255, 255, 255, 0.4)" ? { backgroundColor: "#dbffe5" } : ""}>{props.text}</motion.div>
            <img src={cut2} height="15px" width="15px" className="cut" ></img>
            </motion.div>
    )
}
export default Todos