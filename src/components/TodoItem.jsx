import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ task }) {
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const [todoMsg,setTodoMsg]=useState(task.task)


    const {editTask,deleteTask,toggleComplete}=useTodo()
    
    const edit=()=>{
     editTask(task.id,{...task,task:todoMsg})
     setIsTodoEditable(false)
    }

    const toggle=()=>{
        toggleComplete(task.id)
        handleCheckboxClick()
    }

    const [showEmoji,setShowEmoji]=useState(false)

    const handleCheckboxClick = () => {
        if(!task.completed){
        setShowEmoji(true);
        setTimeout(() => setShowEmoji(false), 1000);
        }
    };




    return (
        <div
            className={`flex border relative border-black rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 ${
                task.completed ? " bg-[#3d3939] "  : "bg-[#000000]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={task.completed}
                onChange={ toggle }
            />
            <input
                type="text"
                className={`outline-none capitalize border text-2xl font-primary w-full  rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${task.completed ? "text-black line-through transition duration-200" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />


            {showEmoji && (
            <div className="w-10 bg-transparent h-10 absolute top-7 left-125 transform -translate-y-1/2 text-2xl animate-bounce">
            🥳
            </div>
            )}
          
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 hover:scale-90 transition duration-200"
                onClick={() => {
                    if (task.completed) return;

                    if (isTodoEditable) {
                        edit();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={task.completed}
            >
               {isTodoEditable ? (
        <img 
          className='cursor-pointer h-6'
          src="https://cdn-icons-png.flaticon.com/512/4406/4406149.png" 
          alt="Save Icon" 
        />
      ) : (
        <img 
        className='cursor-pointer '
          src="https://cdn-icons-png.flaticon.com/512/6324/6324826.png" 
          alt="Edit Icon" 
        />
      )}
            </button>
           
            <button
              
                className="transition duration-200 cursor-pointer inline-flex w-8 h-8 rounded-lg text-sm hover:scale-90 border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTask(task.id)}
            >
               <img src="https://icons.veryicon.com/png/o/miscellaneous/mahealth-pro/delete-295.png" alt="" />
            </button>
           
        </div>
    );
}

export default TodoItem;
