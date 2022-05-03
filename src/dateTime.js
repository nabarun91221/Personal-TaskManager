import { useState } from "react"
const DateTime = ({deadLine,setitems,items,item}) => {
    
    const [Datetime, setDatetime] = useState("0000-00-00T00:00")
    const DateTimeHandeler = (e) => {
        setDatetime(e.target.value)
    }
    const formatdate = (date) => {
        var Thedate = new Date(date);
        return (Thedate.toDateString());
    }

    const onSubmitHandeler = (e) => {
      e.preventDefault();
        disToggle();
        let itemsArr = items
        let newobj = itemsArr.find(o => { return o.perentTodo === item.perentTodo });
        newobj.deadLine = formatdate(Datetime);
    }
     const [dis, setdis] = useState(true)
    const disToggle = () => {
          setdis(!dis)
      }
    return (
        <div>
            {
                dis ?
                    <form onSubmit={onSubmitHandeler} className="dateForm">
                        <input type="datetime-local" className="dateInput" value={Datetime} onChange={DateTimeHandeler}>
                    
                        </input>
                        <button type="submit" className="dateSubmit">Add Date</button>
                    </form>
                    :
                    
                    <div onDoubleClick={disToggle} className="dateDisplay">
                        {
                            item.deadLine
                        }
                    </div>
                
            }
            
            
        </div>
    )
}
export default DateTime