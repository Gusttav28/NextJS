function TaskCard({task}) {
    return(
        <div className="bg-slate-200 px-4 py-3 mb-2 rounded-md text-slate-200 flex justify-between items-center">
        <div>
            <h2 className="text-black">{task.title}</h2>
            <p className="text-black">{task.description}</p>
        </div>
        <div className="flex justify-between gap-x-2">
            <button className="text-white bg-green-600 rounded-md p-2">
                Task Done
            </button>
            <button className="text-white bg-sky-600 rounded-md p-2">
                Update
            </button>
            <button className="text-white bg-red-700 rounded-md p-2">
                Delete
            </button>
        </div>
    </div>
    );
}

export default TaskCard;