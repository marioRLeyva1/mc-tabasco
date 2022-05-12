import React from 'react'
import GridTableResults from '../../../components/GridTable/GridTable';
import { readData } from '../../../hooks/useFirebase'
import { state } from './ResultsState';
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Results = () => {
    const [rows, setRows] = React.useState([]);
    const [colums, setColums] = React.useState(state.colums);
    const [password, setPassword] = React.useState('');
    const [passwordCorrect, setPasswordCorrect] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [excel, setExcel] = React.useState(false);

    const getData = async () => {
        setLoading(true);
        setPasswordCorrect(true);
        const data = await readData();
        setRows(data);
        setLoading(false);
    };

    const validatePassowrd = () => {
        password === 'movctab' ? getData() : console.log('password incorrecta');
    };

    const exportExcel = () => {
        setExcel(true);
        console.log(excel);
    }

    return (
        <div className='absolute'>
            {passwordCorrect === false && 
                <div className={`w-full h-full z-30 fixed bg-slate-600 bg-opacity-75 flex items-center justify-center`}>
                  <div className='w-4/5 h-52 bg-white fixed z-50 rounded-lg flex flex-col items-center lg:w-2/5  max-w-2xl'>
                    <label htmlFor='password' className='text-lg text-center font-poppins font-medium mt-5'>Contraseña</label>
                    <br></br>
                    <input className={`h-11 shadow-md rounded-md active:border-2 p-2 lg:bg-orange-50 hover:scale-105 hover:transition`} id='password' placeholder='*******' type='password' onChange={(e) => setPassword(e.target.value)}></input>
                    <button htmlFor='password' className={`bg-orange-500 w-32 h-10 rounded-lg shadow-lg mt-6 mb-7 hover:scale-105 hover:transition pointer active:scale-95 active:transition-all text-white font-semibold`} onClick={() => validatePassowrd()}>Entrar</button>
                  </div>
                </div>}
            {passwordCorrect === true && 
                <div className='w-full p-9'>
                    <div className='flex items-center'>
                        <h2 className='pl-2 text-xl font-poppins text-left font-bold'>{`Resultados: ${rows.length} registros`}</h2>
                        <ExcelFile filename={'registro-becas'} element={<button className={`ml-6 bg-orange-500 w-32 h-10 rounded-lg shadow-lg mt-6 mb-7 hover:scale-105 hover:transition pointer active:scale-95 active:transition-all text-white font-semibold`}>Exportar excel</button>}>
                            <ExcelSheet data={rows} name='Registro-becas'>
                                <ExcelColumn label='Nombre Completo' value='name'/>
                                <ExcelColumn label='Edad' value='age'/>
                                <ExcelColumn label='Fecha de nacimiento' value='birthDate'/>
                                <ExcelColumn label='Modalidad' value='mode'/>
                                <ExcelColumn label='Telefono' value='phone'/>
                                <ExcelColumn label='Correo electrónico' value='email'/>
                                <ExcelColumn label='Dirección' value='address'/>
                                <ExcelColumn label='Ciudad' value='city'/>
                                <ExcelColumn label='Estado' value='state'/>
                                <ExcelColumn label='Comentario' value='comment'/>
                            </ExcelSheet>
                        </ExcelFile>
                    </div>
                    <br></br>
                    <GridTableResults rows={rows} colums={colums} isLoading={loading} />
                </div>}
        </div>
)}

export default Results