// "use client"
// import { useRouter } from "next/router"
// import { useState } from "react"
import TaskCard from "./TaskCard";


async function loadTask() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`)
    const task = await res.json()   
    return task
}

async function listTask() {
    const task =  await loadTask()
    console.log(task)

    const handleDelete = (id) => {
        console.log(id)
    }
    return(
        <div className="bg-slate-950 p-7 w-full">
            {task.map((task) =>(
                <TaskCard task={task} key={task.id}/>
            ))}                        
        </div>
    );
}

export default listTask;