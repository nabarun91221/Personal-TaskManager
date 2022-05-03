import "./todoHeader.css"
import wLogo from "./visuals/wLogo.png"
import delete1 from "./visuals/delete.png"
import { motion } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react"
const TodoHeader = (props) => {

    const [Title, setTitle] = useState("")
    const onChangeTitleHandeller = (e) => {
        setTitle(e.target.value)
    }

    // let text = props.text;
    // wallpaper change logic........................
    const [dpd_index, setdpd_index] = useState()
    useEffect(() => {
            props.changeWallpaper(dpd_index)
            return () => {
               console.log("wall is changed")
            }
        }, [dpd_index])
    const changeHandeler = (e) => {
        
        setdpd_index(e.target.value)
        console.log(dpd_index);  
    }
  
    const [titleflage, settitleflage] = useState(false)

    const onClickTitle = () => {
        if (props.title !== "Today" && props.title !== "Tomorrow") {
            settitleflage(!titleflage)
            console.log(titleflage)
            setTitle(props.title)
        }
        else {
            alert("following item can't be edited")
        }
        
    }
    // Edit the Title of the Todo List//..............................
    const onSubmitHandeler = async (e) => {
            console.log(e.target.childNodes[0].value);
            settitleflage(!titleflage)
            console.log(titleflage)
            let eleindex = props.todoLists.findIndex(o => { return (o.text === props.title) })
            let todolist = props.todoLists;
            let thetodos = props.Thetodos;
            todolist[eleindex].text = e.target.childNodes[0].value;
            thetodos[eleindex].title = e.target.childNodes[0].value;
            props.settodoLists(todolist);
            props.setThetodos(thetodos);
            console.log(todolist)
            console.log(thetodos)
            console.log(eleindex);
            props.setSelectedListItem(e.target.childNodes[0].value)
           e.preventDefault();
           
    }
   
    
    //deleting the List Element..//......................................
    const [DleteClick, setDleteClick] = useState(false)
    const DeleteHandeler = () => {
        if (props.title !== "Today" && props.title !== "Tomorrow" && props.todoLists.length>2) {
            let eleindex = props.todoLists.findIndex(o => { return (o.text === props.title) })
            let todolist = props.todoLists;
            let thetodos = props.Thetodos;
            todolist.splice(eleindex, 1);
            thetodos.splice(eleindex, 1);
            props.settodoLists(todolist);
             props.setThetodos(thetodos);
            console.log("i did run");
             props.setSelectedListItem("")
            setDleteClick(!DleteClick);
        }
        else {
            alert("you can't delete the following section");
        }
    }
     useEffect(() => {
        props.settodoLists(pre => {
            return ([...pre])
        })
          props.setThetodos(pre => {
            return ([...pre])
          })
        
    }, [titleflage === false,DleteClick])

    return (
        <motion.div className="todoHeader" animate={{ color: props.TextColor }}>
            {
                titleflage ? <form onSubmit={onSubmitHandeler} className="titleForm"><input className="title" placeholder={props.title ? props.title : "The Untitled Name"} value={Title} onChange={onChangeTitleHandeller}></input> </form>:
                   <input className="title"  onClick={onClickTitle} placeholder={props.title ? props.title : "The Untitled Name"} value={props.title}></input>
            }
            
            <div className="dropDown">
                {/* <img className="wallpaperLogo" src={wLogo} width="19vh" height="19vh"></img> */}
                <motion.select className="wallpaperType" onChange={changeHandeler} animate={{color:props.TextColor,backgroundColor:props.theme}}>
                    <option value="Wallpaper1" value="1" > Wallpaper1 </option>
                    <option value="Wallpaper2" value="2" > Wallpaper2 </option>
                    <option value="Wallpaper3" value="3"> Wallpaper3 </option>
                    <option value="Wallpaper4" value="4"> Wallpaper4 </option>
                    <option value="Wallpaper5" value="5"> Wallpaper5 </option>
                    <option value="Wallpaper6" value="6"> Wallpaper6 </option>
                    <option value="Wallpaper7" value="7"> Wallpaper7 </option>
                    <option value="Wallpaper8" value="8"> Wallpaper8 </option>
                    <option value="Wallpaper9" value="9"> Wallpaper9 </option>
                    <option value="Wallpaper10" value="10"> Wallpaper10 </option>
                    <option value="Wallpaper11" value="11"> Wallpaper11 </option>
                    <option value="Wallpaper12" value="12"> Wallpaper12 </option>
                    <option value="Wallpaper12" value="13"> Wallpaper13 </option>
                    <option value="Wallpaper12" value="14"> Wallpaper14 </option>
                </motion.select>
                <img className="delete" onClick={DeleteHandeler} src={delete1} width="20vh" height="20vh"></img>
            </div>
        </motion.div>
    )
}
export default TodoHeader