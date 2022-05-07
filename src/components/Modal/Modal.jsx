import React from 'react'

export const Modal = (props) => {

  return (
      <div className={`${props.open} w-full h-full z-30 fixed bg-slate-600 bg-opacity-75 flex items-center justify-center`}>
          <div className='w-4/5 h-56 bg-white fixed z-50 rounded-lg flex flex-col items-center lg:w-2/5  max-w-2xl'>
              <h2 className='text-xl font-poppins text-center font-bold mt-4'>{props.title}</h2>
              <p className='text-lg text-center font-poppins font-medium mt-5'>{props.message}</p>
              <button className={`${props.button} bg-orange-500 w-32 h-10 rounded-lg shadow-lg mt-6 mb-7 hover:scale-105 hover:transition pointer active:scale-95 active:transition-all text-white font-semibold`} onClick={() => props.onClick()}>OK</button>
          </div>
      </div>
  )
}
