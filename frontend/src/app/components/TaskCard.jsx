"use client"
import { useRouter } from "next/navigation"
import { useState } from 'react'


function TaskCard({task}) {
    const router = useRouter()
    const [edit, setEdit] = useState(false)

    const [title, setNewTitle] = useState(task.title);
    const [description, setNewDescription] = useState(task.description)

    

    const handleDelete = async (id) => {
        console.log(id)
        if(window.confirm('Do you confirm to eliminate this task?')) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/${id}/`, {
                method: "DELETE",
            })
            if (res.status === 200) {
                router.refresh()
            }
            router.refresh()
        }
    }
    const handleUpdate = async (id) => {
        console.log(id)
        console.log(title, description)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/${id}/`, {
            method: "PUT",
            body: JSON.stringify({title, description}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        if (res.status === 200){
            router.refresh()
        }
        const data = await res.json();
        setNewTitle(data.title);
        setNewDescription(data.description);
        setEdit(false)
        console.log(data)
        router.refresh()
    }

    const handleTaskDone = async (id) => {
        console.log(id)
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/${id}/done/`, {
            method: "POST",
        })
        if (res.status === 200){
            router.refresh()
        } else {
            window.confirm("Err status - Sorry try again")
        }
        console.log(res)
    }





    return(
        <div className="bg-slate-600 px-4 py-3 mb-2 rounded-md text-slate-200 flex justify-between items-center">
        <div className="flex flex-col"  >
            {
                !edit ? (
                    <h1 className="text-white">{title} {task.done && <span>✅</span>}</h1>
                    
                ) : (
                    <input onChange={e => setNewTitle(e.target.value)} className="border-none outline-none text-green-400" type="text" placeholder={task.title}/>    

                )
            }
            {
                !edit ? (
                    <p className="text-white">{description}</p>
                ) : ( 
                    <textarea onChange={e => setNewDescription(e.target.value)} className="border-none outline-none text-green-400 w-full" placeholder={task.description} ></textarea>  
                )
            }

        </div>
        <div className="flex justify-between gap-x-2">
            {edit && (
                <button className="text-black bg-slate-300 rounded-md p-2" onClick={() => handleUpdate(task.id)}>Save Changes</button>
            )}
            <button className={
                "text-white rounded-md p-2" + (task.done ? "bg-slate-950" : " bg-green-500")
            } onClick={() => handleTaskDone(task.id)}>
                
                {task.done ? "Unkdone" : "Done"}
            </button>
            <button className="text-white bg-sky-600 rounded-md p-2" onClick={() => setEdit(!edit)}>
                Update
            </button> 
            <button className="text-white bg-red-700 rounded-md p-2" onClick={() => handleDelete(task.id)}>
                Delete
            </button>
        </div>
    </div>
    );
}

export default TaskCard;