import "./todoMain.css"
import { motion } from "framer-motion"
const TodoMain = (props) => {
  
    return (
      <motion.div className="todoMain">
          {props.children}
        </motion.div>
    )
}
export default TodoMain
