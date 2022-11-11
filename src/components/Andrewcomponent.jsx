import React, { useState } from 'react'
import Barbaracomponents from './Barbaracomponents'
import Carloscomponent from './Carloscomponent'
const Andrewcomponent = ({setObjs,ele,objs}) => {
  const [value,setValue]=useState(0)
 const handless=()=>{
  objs[ele]=value
  setObjs({...objs})
 }
  return (
    <>
    <Barbaracomponents setValue={setValue} value={value} handless={handless}/>
    <Carloscomponent value={value} />
    
    </>
  )
}

export default Andrewcomponent