import React, { useState } from 'react'

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible mt-4" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }
        const alertTrigger = document.getElementById('liveAlertBtn')
        e.preventDefault()
            (!title || !desc ? alert('Title or Description cannot be blank!', 'warning') : addTodo(title, desc))

    }
    return (
        <div className='container my-3' >
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <div id="liveAlertPlaceholder" >
                    <button type="submit" id="liveAlertBtn" className="btn btn-sm btn-success">Add Todo</button>
                </div>
            </form>
        </div>
    )
}
