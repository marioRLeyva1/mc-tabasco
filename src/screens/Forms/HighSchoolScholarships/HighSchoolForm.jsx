import React from 'react'
import { Header } from '../../../components/Header/Header'
import { Modal } from '../../../components/Modal/Modal'
import { QASelect } from '../../../components/QASelect/QASelect'
import { QAText } from '../../../components/QAText/QAText'
import { writeData } from '../../../hooks/useFirebase'
import { state } from './HighSchoolFormState'

export const HighSchoolForm = () => {

  const [data, setData] = React.useState([state.question]);
  const [results, setResults] = React.useState({});
  const [modal, setModal] = React.useState({title: '', message: '', open: 'hidden', button: ''});
  
  
  const onChangeData = (e) => {
    const key = e.target.id;
    if(key === 'birthDate'){
      const age = getAge(e.target.value);
      setResults({...results, age: age, [key]: e.target.value});
    }else{
      setResults({...results, [key]: e.target.value});
    }
  };

  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  };

  const onSubmit = async () => {
    if(results.name && results.age && results.birthDate && results.phone && results.address && results.city){
      setModal({title: '', message: 'Guardando datos...', open: '', button: 'hidden'});
      const success = await writeData(results);
      success === true ? setModal({title: 'Registro exitoso', message: 'Te contactaremos pronto. Mantente al pendiente de tus medios de contacto.', open: ''}) : setModal({title: 'Registro fallido', message: 'Hubo un error durante tu registro. Intenta nuevamente', open: ''})
    }else{
      setModal({title: 'Error', message: 'Completa todos los campos requeridos', open: '', button: 'hidden'});
      setTimeout(() => setModal({title: '', message: '', open: 'hidden', button: ''}),1500)
    }
  };

  const onCloseModal = () => {
    setModal({title: '', message: 'T', open: 'hidden'});
    window.location.replace('https://movimientociudadano.mx/tabasco');
  }

  return (
    <div>
      <Modal open={modal.open} button={modal.button} title={modal.title} message={modal.message} onClick={() => onCloseModal()}></Modal>
      <Header></Header>
      <div className='lg:bg-orange-300 lg:flex lg:flex-col lg:items-center lg:w-screen lg:h-screen'>
        <div className='lg:w-2/5 lg:bg-white shadow-lg max-w-2xl'>
          <h1 className='font-poppins flex flex-col justify-center items-center mt-4 text-xl lg:text-2xl'>
            Inscríbete al programa de becas
          </h1>
          <h4 className='font-poppins text-md text-center lg:text-2xl'>Termina tu bachillerato en 4 meses</h4>
          <br></br>
          <form action='submit'>
            {data.map(question => (
              question.map(element => (
                !element.options ?
                <QAText key={element.key} question={element.question} questionKey={element.key} type={element.type} required={element.required} onChange={(e) => onChangeData(e)}></QAText>
                : 
                <QASelect key={element.key} question={element.question} questionKey={element.key} options={element.options} onChange={(e) => onChangeData(e)}></QASelect>))
            ))}
            <div className='flex flex-col py-3 px-6 font-poppins lg:px-10 lg:mt-3'>
              <input className='hover:scale-105 hover:transition pointer w-full h-12 bg-orange-500 rounded-md shadow-xl active:scale-95 active:transition-all text-white font-semibold' type="button" value="Enviar" onClick={e => (onSubmit())}/>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

