import React from 'react'
import Dawncomponent from './Dawncomponent'
import Emrecomponent from './Emrecomponent'

const Barbaracomponents = ({setValue ,value,handless}) => {
    
  return (
    <>
    <Dawncomponent setValue={setValue} value={value} handless={handless}/>
    
        <Emrecomponent setValue={setValue} value={value}  handless={handless}/>
        </>
  )
}

export default Barbaracomponents