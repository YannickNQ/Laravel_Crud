import React from 'react'

const StepperControl = () => {
  return (
    <div className='flex justify-around mt-4 mb-4'>
        {/* back button */}
        <button className="bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
            Anterior
        </button>
        {/* next button */}
        <button className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
            Siguiente
        </button>
    </div>
  )
}

export default StepperControl