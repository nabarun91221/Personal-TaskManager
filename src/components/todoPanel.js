import "./todoPanel.css"
import { motion } from "framer-motion"
const TodoPanel = (props) => {

    return (
           <motion.div className="todoPanel_div" animate={props.theme==="rgba(255, 255, 255, 0.4)"?{backgroundColor:"rgba(255, 255, 255, 0.1)"}:{backgroundColor:props.theme}}>
            {props.children}
            </motion.div>
    )
}
export default TodoPanel