import "./themeToggle.css"
import { motion } from "framer-motion";
const ThemeToggle = (props) => {
    return (
        <motion.div className="outer_div" animate={{ backgroundColor: `${ props.TextColor }` }}>
            <motion.div className="inner_div" onClick={props.ThemeToggle} animate={props.theme === "rgba(255, 255, 255, 0.4)" ? { x: [13, 0] } : { x:[0,13]}} transition={{duration:0.1}} ></motion.div>
	   </motion.div>
    )
}
export default ThemeToggle;