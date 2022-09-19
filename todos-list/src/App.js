// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import AddTodo from './MyComponents/AddTodo'
import { useState } from 'react';
function App() {

  const onDelete = (todo) => {
    // if todo.length == 0
      
    
    setTodos(todos.filter((e)=>{
      return e!== todo
    
    }))
    console.log('deleted', todo)
  }
  const addTodo = (title,desc) =>{
    let srn
    (todos.length===0) ?  srn=0 : srn = todos[todos.length-1].srn+1
    
    const myTodo ={
     srn : srn,
     title : title,
     desc :desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
   }
  const [todos, setTodos] = useState([{
    srn: 1,
    title: 'my todo 1',
    desc: 'my desc 1'
  },
  {
    srn: 2,
    title: 'my todo 2',
    desc: 'my desc 2'
  },
  {
    srn: 3,
    title: 'my todo 3',
    desc: 'my desc 3'
  }])

  return (
    <>
      <Header title="MyTodo List" />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );
}

export default App;
