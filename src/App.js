//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { Addtodo } from "./MyComponents/Addtodo";
//import { About } from "./MyComponents/About";
//import {Switch} from 'react-router-dom';
import React, { useState ,useEffect} from 'react';
// import {
//   BrowserRouter as Router,
  
//   Route
// } from "react-router-dom";

function App() {
   let initTodo;
   if(localStorage.getItem("todos")===null){
    initTodo=[];
   }
   else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
   }


const onDelete=(todo)=>{

   setTodos(todos.filter((e)=>{
    return e!==todo;
   }));
   localStorage.setItem("todos",JSON.stringify(todos));
}

const addtodo=(title,desc)=>{
  let sno;
  if(todos.length===0){
    sno=0;
  }
  else{
 sno =todos[todos.length-1].sno+1;
  }
  const myTodo={
    sno:sno,
    title:title,
    desc:desc,
  }
  setTodos([...todos,myTodo]);
  console.log("mytodo");
  //localStorage.setItem("todos",JSON.stringify(todos));
}


const [todos, setTodos] = useState([initTodo]);
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos])

  return (
  <>
    <Header title="mylist"/>
  
      <Addtodo addtodo={addtodo}/>
    <Todos todos={todos} onDelete={onDelete} /> 
    <Footer/>
    </>
    );
  
}

export default App;
