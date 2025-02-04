import React, { useState } from 'react';
import TodoForm from './TodoForm';

function AddBtn() {
  const [isFieldOpen, setIsFieldOpen] = useState(false);

  
  const openField = () => {
    setIsFieldOpen(true);
  };

  
  const closeField = () => {
    setIsFieldOpen(false);
  };

   
  

  return (
    <div className=' flex justify-center items-center'>
      {!isFieldOpen && (
      <button
        onClick={openField}
        type="submit"
        className="w-12 h-12 text-2xl font-bold rounded-4xl m-2 flex justify-center items-center bg-[#fcfbfd] hover:bg-black hover:text-white focus:text-[#fdfdff] focus:bg-gray-200  transition duration-400 cursor-pointer hover:scale-110"      >
       <div className='mb-1 '>+</div>
      </button>
      )

      }

    
      {isFieldOpen && (
        <div
          className="trasnition duration-200 w-50 md:w-150 lg:w-180 flex justify-center items-center "
          
        >
            
          <div
          
            className="relative bg-transparent p-6 rounded-lg  w-180 "
                  
          >
            <button
          onClick={closeField}
          className="hover:scale-90 h-6 w-6 flex justify-center items-center absolute top-0 right-0  bg-transparent text-black rounded-lg cursor-pointer hover:bg-red-400 hover:text-black "
        >
          <div className='mb-1 mt-0'>x</div>
        </button>
            <TodoForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddBtn;
