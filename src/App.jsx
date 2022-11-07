import './App.css';
import ExampleUseState from './Components/Others/ExampleUseState';
import Header from './Components/Header/Header';
import Jobs from './Components/Others/Jobs';
import {ExampleConditionalReder} from "./Components/Others/ExampleConditionalReder"
import ExampleShowText from './Components/Others/ExampleShowText';
import Counter from './Components/Others/Counter';
import TodoListApp from './Components/TodoList/TodoListApp';
import CatFact from './Components/CatFactApp/CatFact';
import AgePredictor from './Components/AgePredictor/AgePredictor';
import ExcuseGenrator from './Components/ExcuseGenrator/ExcuseGenrator';
function  App() {
  let planets=[
    {name:"mercury", isGaseous: false},
    {name:"venus", isGaseous:false},
    {name:"earth", isGaseous: false},
    {name:"mars", isGaseous:false},
    {name:"jupiter", isGaseous:true},
    {name:"saturn", isGaseous:true},
    {name:"uranus", isGaseous:true},
    {name:"naptune", isGaseous:true},
    {name:"pluto", isGaseous:null},

  ]


  return (
    <>
    <ExcuseGenrator/>
    <AgePredictor/>
    <CatFact/>
    <TodoListApp/>
    <Counter/>
    <ExampleShowText/>
    <ExampleUseState/>
    <Header></Header>
    <Jobs  salary={5000} position="ceo" company="tcs" />
    <Jobs  salary={50000} position="Inforamation Processing Specialist" company="Tata consultancy Services" />
    { planets.map((ele)=>  <ExampleConditionalReder name={ele.name} isGaseous={ele.isGaseous}/> ) }
    </>
  )
}



export default App;
