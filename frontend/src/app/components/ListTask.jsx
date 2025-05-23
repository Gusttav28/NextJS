// "use client"
// import { useRouter } from "next/router"
// import { useState } from "react"
// import { useTask } from "./useTask";
import TaskCard from "./TaskCard";


async function loadTask() { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`)
    const task = await res.json()   
    return task
}

async function ListTask() {
    const task =  await loadTask()
    console.log(task)

    const handleDelete = (id) => {
        console.log(id)
    }
    // const {task, isLoading, isError, mutate } = useTask()
    // if (isLoading) return <p className="text-white">Loading...</p>
    // if (isError) return <p className="text-white">Failed to load the task</p>
    return(
        <div className="bg-slate-950 p-7 w-full">
            {task.map((task) =>(
                <TaskCard task={task} key={task.id}/>
            ))}                        
        </div>
    );
}

export default ListTask;