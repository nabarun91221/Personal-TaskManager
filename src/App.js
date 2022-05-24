import './App.css';
import Sidenav from './components/sidenav';
import ListEle from './components/listEle';
import AddList from './components/addlList';
import TodoPanel from './components/todoPanel';
import Profile from './components/profile';
import ThemeToggle from './components/themeToggle';
import TodoInputbox from './components/todoInputbox';
import TodoHeader from './components/todoHeader';
import TodoMain from './components/todoMain';
import Todos from './components/todos';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import DetailsDiv from './components/details';
import SubTodo from "./components/subTodo"
import AddSubtodo from './addSubtodo';
import DateTime from './dateTime';

function App() {

  let wallpapers = ["null","bk1","bk2","bk3","bk4","bk5","bk6","bk7","bk8","bk9","bk10","bk11","bk12","bk13","bk14"];
  const [Thewallpaper, setThewallpaper] = useState()
  // const [dpd_index, setdpd_index] = useState()
  const [theme, settheme] = useState([{ light: "rgba(255, 255, 255, 0.4)" }, { dark: "rgba(20, 20, 20,0.4)" }])
  const [themeToggle, setThemeToggle] = useState(theme[0].light)
  const [TextColor, setTextColor] = useState(`${themeToggle === theme[0].light ? "rgb(0,0,0)" : "rgb(255,255,255)"}`)



  const ThewallpaperHandeler=(dpd_index)=>{
    setThewallpaper(wallpapers[dpd_index]);
 }


  const ThemeToggleHandeler = () => {
    if (themeToggle === theme[1].dark) {
      console.log(Thewallpaper);
      setThemeToggle(theme[0].light)
      setTextColor("rgb(0,0,0)")
    }
    else {
      setThemeToggle(theme[1].dark)
      setTextColor("rgb(255,255,255)")

    }
  }
 
 
  const [counter, setcounter] = useState(0)
  const [newListData, setnewListData] = useState({ text: `${"untitled" + counter}`, logo: "" })
  

  const [todoLists, settodoLists] = useState([
    { text: "Today", logo: "",del:false },
    { text: "Tomorrow", logo: "",del:false}
  ])

  
  const [Thetodos, setThetodos] = useState([
    {
      title: "Today", todos: [], del: false,
    },
    {
     title: "Tomorrow", todos: [], del: false,
    },
  ])
  const [SelectedListItem, setSelectedListItem] = useState("Today")
  const [SelectedListItemTodos, setSelectedListItemTodos] = useState(Thetodos[0])
  // const [SelectedSubtodo, setSelectedSubtodo] = useState(SelectedListItemTodos.todos[0])

  //subtodo state---------///////////////
  const [subTodos, setsubTodos] = useState([

    { perentTodo: "Here gose your first todo", subTodos: [], del: false,deadLine:"00-00-00"},

  ])
    //adding selected todo State----
  const [SelectedTodo, setSelectedTodo] = useState({ perentTodo: "Here gose your first todo", subTodos: [], del: false,deadLine:"00-00-00" },)
  const SelectedTodoHandeler = (ele) => {
    let text;
    if (ele.target.className === "todoText")
      text = ele.target.innerText;
    else text = ele.target.querySelector('.todoText').innerText;
    console.log(text);
    let subtodoArr = subTodos
    let objArr = subtodoArr.find(o => { return o.perentTodo === text });
    if (objArr)
      setSelectedTodo(objArr);
    console.log(SelectedTodo)
  }
  //adding datails section state..///////
   const [detailsToggle, setdetailsToggle] = useState(false)
  //Adding new todos  ----------------/////////////////////////////////////////
   
  const addTodo =(new_todo) => {
    setSelectedListItemTodos(pre => {
      return ({ title: pre.title , todos:[...pre.todos,new_todo],del:false,deadLine:"00-00-00"})
      })
    console.log("successfully added the item : " + new_todo.text)
    let objArr = Thetodos
    let obj = objArr.find(o => { return o.title === SelectedListItem });
    obj.todos.push(new_todo)
    // setThetodos(pre => {
    //   return([...pre,obj])
    // })
    console.log(Thetodos)
    let subTodoOBJ = { perentTodo: new_todo.text, subTodos: [], del: false,deadLine:"00-00-00" }
    setsubTodos(pre => {
      return ([...pre, subTodoOBJ])
    }
    )
    console.log(subTodos);
  }

  //Deleting Todos -------------------/////////////////////////////////////////////

  const deleteTodo = (el) => {
     let todoArr = Thetodos
    let todoobj = todoArr.find(o => { return o.title === SelectedListItem });
    console.log(todoobj)
    var del_objIndex = todoobj.todos.findIndex(d => { return d.text === "gg" });
    console.log(del_objIndex)
    let ele = todoobj.todos.splice(del_objIndex,1)
    console.log(ele)
  }
  

  const settodoListsHandeler = async () => {
    if (todoLists.length <= 25) {
      await setcounter(counter + 1)
      let nd = `${"untitled" + `${counter + 1}`}`;
      setnewListData({ text: nd, logo: "0", del: false })
      
      settodoLists(pre => {
        return ([...pre, newListData])
      })
      
      console.log(newListData)
    }
    else console.log("You are not allowed to add more than " + `${counter - 1}` + " " + "section");
  }
  useEffect(() => {
    setThetodos(pre => {
      return ([...pre, { title: newListData.text, todos: [],del:false,}])
     })
  }, [newListData])

  
      
  
  return (
    <motion.div className="App" id={Thewallpaper} >
      <Sidenav theme={themeToggle} TextColor={TextColor} setdetailsToggle={setdetailsToggle}>
        <Profile theme={themeToggle} TextColor={TextColor}></Profile>
        <ThemeToggle theme={themeToggle} TextColor={TextColor} ThemeToggle={ThemeToggleHandeler} Thetodos={Thetodos}></ThemeToggle>
        {
          todoLists.map((todoList) => (
            <ListEle key={todoList.text} setdetailsToggle={setdetailsToggle} text={todoList.text} theme={themeToggle} TextColor={TextColor} Thetodos={Thetodos} setSelectedListItem={setSelectedListItem} SelectedListItem={SelectedListItem} setSelectedListItemTodos={setSelectedListItemTodos} ></ListEle>
          ))
        }
        
      </Sidenav>
      <AddList addlist={settodoListsHandeler} showList={todoLists} counter={counter} theme={themeToggle} TextColor={TextColor} ></AddList>
      <TodoPanel theme={themeToggle} TextColor={TextColor} setdetailsToggle={setdetailsToggle}>
        
        <TodoHeader theme={themeToggle} TextColor={TextColor} changeWallpaper={ThewallpaperHandeler} title={SelectedListItem} todoLists={todoLists} settodoLists={settodoLists} setThetodos={setThetodos} Thetodos={Thetodos} setSelectedListItem={setSelectedListItem}></TodoHeader>
        <TodoMain setdetailsToggle={setdetailsToggle} >
          {
            SelectedListItemTodos!==""?
            SelectedListItemTodos.todos.map((todo) => (

              <Todos key={todo.text} select={SelectedTodoHandeler} theme={themeToggle} TextColor={TextColor} text={todo.text} done={todo.done} deleteTodo={deleteTodo} setdetailsToggle={setdetailsToggle}></Todos>

            )) :
              <div></div>
            
          }
        </TodoMain>
        <TodoInputbox addTodo={addTodo} SelectedListItem={SelectedListItem} ></TodoInputbox>
      </TodoPanel>
      <DetailsDiv theme={themeToggle} TextColor={TextColor} detailsToggle={detailsToggle} setdetailsToggle={setdetailsToggle}>
                <DateTime deadLine={SelectedTodo.deadLine} setitems={setsubTodos} items={subTodos} item={SelectedTodo}></DateTime>

        {
          
            SelectedTodo!==""?
            SelectedTodo.subTodos.map((subTodo) => (

              <SubTodo key={subTodo.text} theme={themeToggle} TextColor={TextColor} text={subTodo.text} done={subTodo.done}></SubTodo>

            )) :
              <div></div>
            
        }
        <AddSubtodo TextColor={TextColor} item={SelectedTodo} setitem={setSelectedTodo} setitems={setsubTodos}></AddSubtodo>
      </DetailsDiv>
    </motion.div>
  );
}

export default App;
