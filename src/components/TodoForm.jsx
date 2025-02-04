import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [task,setTask]=useState("")
    const {addTask}=useTodo()

    
 

    const add=(e)=>{
         e.preventDefault()
         if(!task)return
         addTask({task,completed:false})
         setTask("")
        
    };

    return (
        <form onSubmit={add} className="mr-2 w-90 md:w-150 lg:w-180 flex justify-center items-center">
            <input
                type="text"
                placeholder="+ Add Tasks..."
                className=" w-80 md:w-150 lg:w-150  capitalize border border-black/10 rounded-2xl px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />
             <button 
                type="submit"
                className="w-4 h-9 md:w-7 lg:w-10 flex justify-center items-center ml-2 py-2 px-6 rounded-xl  bg-[#000000] hover:bg-white hover:text-[#000000]  focus:bg-gray-200  font-bold leading-loose transition duration-200 cursor-pointer hover:scale-90 text-white"
             >
             ADD
             </button>
             


            


        </form>
    );
}

export default TodoForm;


