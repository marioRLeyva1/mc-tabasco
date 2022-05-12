import React, { useEffect } from 'react'
import GridTable from '@nadavshaar/react-grid-table'

const GridTableResults = (props) => {

    useEffect(() => {
        const rows = props.rows;
        const colums = props.colums;
        console.log('>>>ROWS', rows);
        console.log('>>>COLUMNS', colums);
    })
  return (
    <div>
        <GridTable columns={props.colums} rows={props.rows} isLoading={props.isLoading} texts={{ search: 'Búsqueda:', totalRows: 'Total de registros:', rows: 'Filas:', selected: 'Seleccionado', rowsPerPage: 'Filas por página:', page: 'Página:', of: 'de', prev: 'Prev', next: 'Sig', columnVisibility: 'Activar/Desactivar Columnas' }}/>
    </div>
  )
}

export default GridTableResults