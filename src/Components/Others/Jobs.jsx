
const Jobs=(props)=>{
return (
    <>
    <div style={{backgroundColor:"tan", border:"5px solid grey"}}>
    <h1>Salary: {props.salary}</h1>
    <h2>Position: {props.position} </h2>
    <h3>Company name: {props.company} </h3>
    </div>
    </>
)
}
export default Jobs