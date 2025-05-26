"use client"

import { useEffect, useState } from "react"
import AnimatedList from "../components/reactbits/AnimatedList"
import Modal from "../components/Modal"


export default function Tasklistt() {
    const [tasklist, setTaskList] = useState([]);
    const [selected, setSelected] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() =>{        
        async function fetchTasks() {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`)
            const tasklist = await res.json()    
            setTaskList(tasklist);
            console.log("This is the list of the task: ", tasklist)
        }   
        fetchTasks();
    },[]);

    const handleid = () => {
        console.log(tasklist.id)
    }


    return(
        <main>
            <div>
                <AnimatedList 
                  items={tasklist}
                  renderItem={(item) =>(
                    <div className="px-4 py-3 mb-2 rounded-md text-slate-200 flex justify-between items-center"> 
                        <div className="flex flex-col">
                            <label htmlFor="title" className="text-xs text-white block mb-1">Title:</label>
                            <strong>{item.title}</strong>
                            <label htmlFor="title" className="text-xs text-white block mb-1">Description:</label>
                            <p>{item.description}</p>
                            <label htmlFor="title" className="text-xs text-white block mb-1">Done:</label>
                            <h1 className="text-white transition-discrete">{item.done && <span>✅</span>}</h1>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between gap-2 mt-2">
                            {/* <button className="text-white bg-red-700 rounded-md p-2 delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-500 ...">Done</button> */}
                            <div>
                                <button 
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-gray-500 text-white px-3 py-3 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Task Details
                                </button>
                            </div>
                            <Modal 
                                isOpen={isModalOpen}    
                                onClose={() => setIsModalOpen(false)}
                                title="Task Details"
                            >
                                <p>Gus is still working on this!</p>
                            </Modal>
                        </div>
                    </div>
                    
                  )}
                  onItemSelect={(item, index) => console.log(item, index)}
                  showGradients={true}
                  enableArrowNavigation={true}
                  displayScrollbar={true}  
                />
            </div>
        </main>
    )
}