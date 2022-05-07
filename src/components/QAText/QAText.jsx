import React from 'react'

export const QAText = (props) => {
  return (
    <section className='flex flex-col py-3 px-6 lg:px-10 font-poppins'>
        <label className='mb-1' htmlFor={props.questionKey}>{props.question}</label>
        {props.questionKey === 'comment' &&
        <textarea className='h-20 shadow-md rounded-md active:border-2 p-2 resize-none lg:bg-orange-50 hover:scale-105 hover:transition' id={props.questionKey} type={props.type} onChange={(e) => props.onChange(e)}/>
        }
        {props.required === true &&
        <input className='h-11 shadow-md rounded-md active:border-2 p-2 lg:bg-orange-50 hover:scale-105 hover:transition' id={props.questionKey} type={props.type} onChange={(e) => props.onChange(e)} required/>
        }
        {props.required === false && props.questionKey !== 'comment' &&
        <input className='h-11 shadow-md rounded-md active:border-2 p-2 lg:bg-orange-50 hover:scale-105 hover:transition' id={props.questionKey} type={props.type} onChange={(e) => props.onChange(e)}/>
        }
    </section>
  )
}
