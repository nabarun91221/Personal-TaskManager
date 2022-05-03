import './sidenav.css'
import { motion } from 'framer-motion';
const Sidenav = (props) => {
    const ontak = () => {
        props.setdetailsToggle(false)
        console.log("the display state changed")
    }

    return (
        <motion.div className="sidenav_div" onClick={ontak} animate={{backgroundColor:`${props.theme}`}}>
            {props.children}
        </motion.div>
    )
}
export default Sidenav;