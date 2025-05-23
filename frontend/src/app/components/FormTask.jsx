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

    const handleSave = () => {
        window.confirm("You're adding this task")
        router.refresh()
    }

    return(
        <div className="bg-slate-950 p-4 md:p-10 h-fit w-full md:max-w-md">
            <div className="bg-slate-700 p-5 md:p-10 rounded-md w-full max-w-sm md:max-w-lg">
                <form action="" onSubmit={handleSubmit} className="space-y-4">
                    <h1 className="text-white text-2xl md:text-3xl mb-6 text-center">Add task</h1>

                    <label htmlFor="title" className="text-xs text-white block mb-1">Title:</label>
                    <input type="text" name="title" 
                    className="bg-slate-50 rounded-md p-2 mb-2 block w-full text-slate-900" onChange={e => setTitle(e.target.value)}/>

                    <label htmlFor="title" className="text-xs text-white">Description</label>
                    <textarea name="description" className="bg-slate-50 rounded-md p-2 mb-2 block w-full text-slate-900" onChange={e => setDescription(e.target.value)}></textarea>    
        
                    <button className="text-white bg-blue-700 rounded-md p-2 block w-full hover:bg-blue-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 active:bg-blue-600 active:bg-blue-100 ..." onClick={() => handleSave()}>
                        Save
                        
                    </button>
                </form>
            </div>
        </div>
    )   
}
export default FormTask