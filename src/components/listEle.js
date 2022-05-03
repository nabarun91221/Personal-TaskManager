import "./listEle.css"
import defaultlogo from "./visuals/defaultLogo.png"
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
const ListEle = ({text,logo,todoLen,TextColor,Thetodos,setSelectedListItem,SelectedListItem,setSelectedListItemTodos,totalTodos,setdetailsToggle}) => {
    
    const [Flage, setFlage] = useState(false)
    const [start, setstart] = useState(false)
    const [todocount, settodocount] = useState(0)
    useEffect(() => {
       
        if (start === true) {
            let obj = Thetodos.find(o => { return o.title === SelectedListItem })
        setSelectedListItemTodos(obj)
        // console.log(obj);
       }

    }, [Flage])
    
    useEffect(() => {
         let obj = Thetodos.find(o => { return o.title === text})
        settodocount(obj.todos.length)
    }, [Thetodos])

    return (
        <motion.div className={"listEle_div" + " " + text} whileTap={{ scale: 0.95, backgroundColor: "rgba(0, 0, 0, 0)" }}
            
            animate={{ color: TextColor }}
            
            
        >
            <img src={logo? logo : defaultlogo} className="logo" height="17vh" width="17vh"></img>
            <p className="listText" onClick={function (e) { setSelectedListItem(e.target.innerText); setstart(true);setFlage(!Flage); }}>{text}</p>
            <p className="todoCounter_div">{todocount}</p> 
        </motion.div>
    )
}
export default ListEle;