import { useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts'
import { useEffect } from 'react'
import TodoItem from './components/TodoItem'
import AddBtn from './components/AddBtn'


function App() {
  const [tasks, setTasks] = useState([])
 
  const addTask=(task)=>{
     setTasks((prev)=>[{id:Date.now(),...task},...prev])
  }

  const editTask=(id,task)=>{
      setTasks((prev)=>prev.map((it)=>(
        it.id===id ? task : it
      )))
  }

  const deleteTask=(id)=>{
    setTasks((prev)=>prev.filter((task)=>task.id!=id))

  }

  const toggleComplete=(id)=>{
    setTasks((prev)=>prev.map((it)=>it.id===id ? {...it,completed:!it.completed}:it))
  }


  useEffect(()=>{
    const tasks=JSON.parse(localStorage.getItem("tasks"))
    if(tasks && tasks.length>0){
      setTasks(tasks)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  return (
    <TodoProvider value={{tasks,addTask,editTask,deleteTask,toggleComplete}}>
      <div className="w-full bg-gradient-to-r from-slate-600 to-stone-900')]
                   min-h-screen   py-8">
                <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-3 text-white">
                    <h1 className="text-3xl  text-center mb-8 mt-2 text-amber-300 underline font-primary ">ToDo+</h1>
                    
                    
                    {tasks.length===0 && <h1 className='flex justify-center font-mono text-2xl capitalize'>No tasks as of now</h1>}
                    <div className="flex flex-wrap gap-y-3">
                        {tasks.map((task)=>(
                          <div key={task.id}
                          className='w-full'
                          >
                            <TodoItem task={task}/>
                          </div>
                        )

                        )}
                    </div>
                   
                </div>
                <div className=" mb-4">
                    
                    <AddBtn/>
                    </div>

            </div>
    </TodoProvider>
  )
}

export default App
