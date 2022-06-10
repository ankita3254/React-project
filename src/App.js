import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
function App() {
let todos=[
  {
    sno:1,
    title:"go to market",
    desc:"go to market to buy fruit"
  },
  {
    sno:2,
    title:"go to mall",
    desc:"go to market to buy fruit"
  },
  {
    sno:3,
    title:"go to movie",
    desc:"go to market to buy fruit"
  }
]


  return (
   <>
    <Header title="mylist"/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;
