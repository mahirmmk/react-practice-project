import React from 'react'
import { useState } from 'react'
import Tasks from './Tasks'

function TodoListApp() {
    const [taskList, setTaskList]=useState([])
    const[task, setTask]=useState("")
    const grabTask=(e)=> setTask(e.target.value)

    const addTask=(event)=>{
        let newTask={
            id:taskList.length <1 ? 1:taskList[taskList.length-1].id+1,
            taskName:task,
            completed:false
        }
        setTaskList([...taskList, newTask])
        event.target.task.reset()  
    }

    const deleteTask =(id)=>{
        setTaskList(taskList.filter((element)=> element.id !==id ))
    }
    const completedTask =(id)=>{
        setTaskList(taskList.map((ele)=>{
            if(ele.id===id)  return {...ele, completed:!ele.completed}
            else return ele            
        }))  
        // let array=[...taskList]
        // let index=array.findIndex((ele)=>ele.id===id)
        // array[index].completed=!array[index].completed
        // setTaskList(array) 
        // console.log(taskList)   
    }


    
  return (
    <div  style={{backgroundColor:"cyan", minHeight:"95vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}} >
        <h1>To-do App</h1>
        <div className='addTask'>
            <input onChange={grabTask} id="task" name={"task"} type="text" />
            <input onClick={addTask}   type="submit" value="Add Task" />
        </div>        
        {taskList.map((ele, index)=> <Tasks ele={ele} index={index}  deleteTask={deleteTask} completedTask={completedTask}  /> )}
       
    </div>
  )
}

export default TodoListApp