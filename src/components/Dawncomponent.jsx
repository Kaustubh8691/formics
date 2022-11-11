import React from 'react'

const Dawncomponent = ({setValue,value,handless}) => {
  const handleminus=()=>{
    setValue(value-=1)
    handless()
  }
  return (
    <>
    <button className='add-sub-btn left' onClick={()=>handleminus()} >-</button></>
  )
}

export default Dawncomponent