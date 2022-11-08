import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

function TodoListApp() {
    const [taskList, setTaskList]=useState([])
    const[task, setTask]=useState("")
    const [empty, setEmpty]=useState(true)
    const grabTask=(e)=> {
        let value=e.target.value
        setTask(value)
        if(value.length<1){setEmpty(true)}
        else{setEmpty(false)}
    }
    

    const addTask=(event)=>{
        
        let newTask={
            id:taskList.length <1 ? 1:taskList[taskList.length-1].id+1,
            taskName:task,
            completed:false
        }
        setTaskList([...taskList, newTask])
        setEmpty(true) 
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
    <div  >
        <Link className='rounded-3xl' to={"/projects"} >
            <button class=" bg-transparent  duration-100 rounded-full m-3  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Back
            </button>
        </Link>
        
        <div  >
            <h1 className='text-3xl text-center' >To-do App</h1>
            <div className='text-center m-3 ' >
                <input onChange={grabTask}  placeholder="Enter Task to add" className=" focus:outline-2 outline outline-gray-600 mx-4 p-4 rounded-lg  focus:outline-green-600 " />
                {empty &&
                    <button className=' hover:cursor-not-allowed mt-2    border-blue-800 rounded-lg p-2 bg-red-400' disabled> Enter task first  </button> 
                }
                {!empty &&
                <input onClick={addTask} type="button"  className="border-2  bg-green-200 border-blue-800 rounded-lg p-2 hover:bg-blue-700 hover:text-blue-100 duration-300" value="Add Task" />
                }
                
            </div>        
            {taskList.map((ele, index)=> <Tasks ele={ele} index={index}  deleteTask={deleteTask} completedTask={completedTask}  /> )}
        

        </div>

        
    </div>
  )
}

const Tasks=(props)=>{
    return <>
    <div style={{backgroundColor:props.ele.completed===true?"lightgreen":" rgb(147 197 253)"}} className='flex justify-between items-center rounded m-3 p-1'>
        <div className='inline-block w-72 text-2xl '>
            {props.index+1+"."}  {props.ele.taskName}
        </div>
        <div className='inline-block text-right ' >
        <button  onClick={()=> props.completedTask(props.ele.id)}  className="border-2 m-2 p-1 border-green-800 rounded-lg  hover:bg-green-700 hover:text-green-100 duration-300" >
          {props.ele.completed===true?"Uncomplete":"Completed"}  </button>
        <button onClick={()=> props.deleteTask(props.ele.id)}  className="border-2 p-1 border-red-800 rounded-lg  hover:bg-red-700 hover:text-red-100 duration-300" >
          Delete</button> 
               
        </div>
    </div>
    
</>
}
export default TodoListApp