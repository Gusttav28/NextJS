"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

function FormTask(){
    // we make an instance of use State here in order to get the information from the inputs
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // and this one is to refresh the page every time that we click save in the form
    const router = useRouter()

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(title, description)
        console.log("This is the env: ", `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`)
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`, {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await resp.json()
        console.log(data)
        console.log(resp)
        router.refresh()
    }

    return(
        <div className="bg-slate-700 p-7 h-fit">
             <form action="" onSubmit={handleSubmit}>
                <h1 className="text-white">Add task</h1>

                <label htmlFor="title" className="text-xs text-white">Title:</label>
                <input type="text" name="title" 
                className="bg-slate-50 rounded-md p-2 mb-2 block w-f  ull, text-slate-900" onChange={e => setTitle(e.target.value)}/>

                <label htmlFor="title" className="text-xs text-white">Description</label>
                <textarea name="description" className="bg-slate-50 rounded-md p-2 mb-2 block w-f  ull, text-slate-900" onChange={e => setDescription(e.target.value)}></textarea>    

                <button className="text-white bg-blue-700 rounded-md p-2 block  w-full">
                    Save
                </button>
             </form>
        </div>
    )   
}
export default FormTask