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
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import NavbarComponent from './Components/Navbar';
import PageNotFount from './Components/404/PageNotFount';
import About from './Components/About/About';
import Projects from './Components/Projects';
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
    <Router >
      <NavbarComponent />
      <Routes>
        <Route path='/' element={< Home />}  />
        <Route path='/home' element={< Home />}  />
        <Route path='/todo' element={< TodoListApp />}  />
        <Route path='/counter' element={< Counter />}  />
        <Route path='/catfact' element={< CatFact />}  />
        <Route path='/excuse' element={< ExcuseGenrator />}  />
        <Route path='/agepredict' element={<AgePredictor/>}/>
        <Route path='/usestate' element={<ExampleShowText/>}/>
        <Route path='/*' element={<PageNotFount/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Routes>

    </Router>
    {/*
    
  
    
    <ExampleUseState/>
    <Header></Header>
    <Jobs  salary={5000} position="ceo" company="tcs" />
    <Jobs  salary={50000} position="Inforamation Processing Specialist" company="Tata consultancy Services" />
    { planets.map((ele)=>  <ExampleConditionalReder name={ele.name} isGaseous={ele.isGaseous}/> ) } */}
    </>
  )
}



export default App;
