import "./details.css"
import { motion } from "framer-motion"
const DetailsDiv = (props) => {
    return (
        <motion.div className="Upperdetails_div" style={{opacity:0}} animate={props.detailsToggle?{x:[500,0],opacity:1}:{x:[0,500]}} transition={{duration:0.3}} >
        <motion.div className="details_div" animate={
            props.theme === "rgba(255, 255, 255, 0.4)" ? { backgroundColor: "rgb(255,255,255,0.99)", color: props.TextColor } : { backgroundColor: "rgb(50,50,50,0.99)", color: props.TextColor }
        }>
         {props.children}
            </motion.div>
        </motion.div>
    )
}
export default DetailsDiv