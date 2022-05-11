import React from 'react'
import { readData } from '../../../hooks/useFirebase'

const Results = () => {
  const getData = () => {
    readData();
  }

  return (
    <p onClick={() => getData()}>Results</p>
  )
}

export default Results