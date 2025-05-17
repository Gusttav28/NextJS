import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";
export const dynamic = "force-dynamic"

function HomePage() {
  return(
    <div>
      <div className="flex gap-x-10 ">
        <FormTask/>
        <ListTask/>
      </div>
    </div>
  )
}

export default HomePage