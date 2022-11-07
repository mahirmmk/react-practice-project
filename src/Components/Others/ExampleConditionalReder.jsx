import "./Planets.module.css"
export const ExampleConditionalReder=(props)=>{
    return <    >
    <div style={{border: "1px solid black",backgroundColor:props.isGaseous?"lightblue":"grey"}}>
        <h1> {props.name}</h1>
        <h5>  </h5>
    </div>
    </> 
}