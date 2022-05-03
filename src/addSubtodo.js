import "./addSubtodo.css"
import add from "./components/visuals/add2.png"
import { useState,useEffect} from "react"
const AddSubtodo = ({ TextColor, setitem, item,}) => {
    const [update, setupdate] = useState(false)
    const [subtodoTextValue, setsubtodoTextValue] = useState("")
    const subtodoTextValueHandeler = (e) => {
        setsubtodoTextValue(e.target.value)
    }
    const subtodo_onSubmitHandeler = (e) => {
        
        e.preventDefault();
        setitem(pre=> {
            let obj = pre
                obj.subTodos.push({text:subtodoTextValue,done:false})
            
            return(obj)
        })
        console.log(item);
      
        setsubtodoTextValue("");
        setupdate(!update)
    }

    useEffect(() => {
        setitem(pre => {
            return ({ ...pre })
        })
    }, [update])

    return (
        <div className="addsubtodo">
            <img src={add} height="20vh" whith="20vh" className="addsubtodo_logo"></img>
            <form onSubmit={subtodo_onSubmitHandeler}>
                <input type="text" style={{ color: TextColor }} className="subtodoTextInput" placeholder="Add Steps" value={subtodoTextValue} onChange={subtodoTextValueHandeler}></input>
            </form>
        </div>
    )
}
export default AddSubtodo