import React from 'react'

export default function TodosItem({todos,onDelete}) {
    return (
        <div>
            <table className="table">

                <tbody>
                    <tr>
                        <th scope="row">{todos.srn}</th>
                        <td>{todos.title}</td>
                        <td>{todos.desc}</td>
                        <td><button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button></td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}
