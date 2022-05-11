import React from 'react'

export const Header = () => {
  return (
      <div className='lg:flex lg:justify-center lg:bg-orange-300 sticky top-0 lg:w-full '>
        <header className='h-24 bg-orange-500 shadow-lg flex lg:w-2/5 lg:h-32 max-w-2xl cursor-pointer' onClick={() => window.location.replace('https://movimientociudadano.mx/tabasco')}>
            <img className='p-5' src="https://movimientociudadano.mx/images/logos/logo-mc.svg" alt="aguila-mc"/>
            <h1 className='text-center flex flex-col text-white w-full h-full justify-center font-poppins text-lg font-medium lg:text-3xl'>
                <span>Movimiento Ciudadano</span>
                <span>Tabasco</span>
            </h1>
        </header>
      </div>
  )
}
