import React from 'react'

export const QASelect = (props) => {
  return (
    <section className='flex flex-col py-3 px-6 lg:px-10 font-poppins'>
        <label className='mb-1' htmlFor={props.questionKey}>{props.question}</label>
        <select className='h-11 rounded-md lg:bg-orange-50 hover:scale-105 hover:transition shadow-md' id={props.questionKey} onChange={(e) => props.onChange(e)}>
            <option className='active:border-2 lg:bg-orange-50' value="" selected disabled hidden>Selecciona tu municipio</option>
            {props.options.map(option =>
                <option className='active:border-2 lg:bg-orange-50' id={props.questionKey} value={option}>{option}</option>
            )}
        </select>
    </section>
  )
}
