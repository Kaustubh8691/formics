import React from 'react'

const Emrecomponent = ({setValue,value,handless}) => {
  const handleminus=()=>{
    setValue(value+=1)
    handless()
  }
  return (
    <>
    <button className='add-sub-btn right' onClick={()=>handleminus()}>+</button></>
  )
}

export default Emrecomponent