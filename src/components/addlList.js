import "./addList.css"
import add from "./visuals/add.png"
import { motion } from "framer-motion"
const AddList = ({addlist,showList,counter,theme,TextColor}) => {
    return (
        <motion.div className="addList_div" onClick={function (event) { addlist(); }} animate={
            showList.length >= 25 ? { opacity: 0.8 , backgroundColor:theme, cursor:"not-allowed"}:{boxShadow:`${"2px 0px 9px "+TextColor}`}
        } transition={{ type: "tween", duration: 0.3 }} >
            <motion.img className="add" src={add} hight="40%" width="40%" className="logo2" animate={{ x: [-200, 0] }} transition={{ type: "tween", duration: 0.5,delay:0.1 }} ></motion.img>
        </motion.div>
    )
}
export default AddList