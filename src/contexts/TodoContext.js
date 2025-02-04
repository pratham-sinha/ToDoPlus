import { createContext,useContext } from "react";


export const TodoContext=createContext({
 tasks:[
    {
        id:1,
        task:"Learn React",
        completed:false,
    }
 ],
 addTask:(task)=>{},
 editTask:(id,task)=>{},
 deleteTask:(id)=>{},
 toggleComplete:(id)=>{},

})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
   return useContext(TodoContext)
}
