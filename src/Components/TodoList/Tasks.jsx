import React from 'react'

function Tasks(props) {    
  return (<>
        <h1>
        <div style={{backgroundColor:props.ele.completed?"lightgreen":"#B0E0E6", borderRadius:"10px", padding:"10px"}}>
            {props.index+1+"."}  {props.ele.taskName}
            <button onClick={()=> props.completedTask(props.ele.id)} >{props.ele.completed===true?"Uncomplete":"Completed"}  </button>
            <button onClick={()=> props.deleteTask(props.ele.id)} >Remove Task</button> 
        </div>
        </h1>
  </>
  )
}

export default Tasks