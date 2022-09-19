import React from 'react'
import TodosItem from './TodosItem'

export default function Todos(props) {

  return (
    <div className='conainer'>
      <h3 className='text-center'>Todo's List</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Descreption</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
      </table>
      {props.todos.length === 0 ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>No Todos To Display....!</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> : props.todos.map((todo) => {
        return <TodosItem todos={todo} key={todo.srn} onDelete={props.onDelete} />
      })}



    </div>
  )
}
