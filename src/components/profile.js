import "./profile.css"
import defaultAvater from "./visuals/defaultAvater.png"
import { motion } from "framer-motion"
const Profile = (props) => {

    return (
        <motion.div className="profileS">
            <div className="profileInfo">
                <img src={ props.profileAvater?props.profileAvater:defaultAvater}className="avater"></img>
                <motion.p animate={{color:props.TextColor}} className="profileName" >{props.profileName?props.profileName:"Local Admin"}</motion.p>
           </div>
        </motion.div>
    )
}
export default Profile;