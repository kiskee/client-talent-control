import React from 'react'

export function RegisterList({ setStyleDisplay }) {

  const showhide = () => {
    setStyleDisplay('none')
  }


  console.log('DIMAOND')
  


  return (
<div className='container-modal'>
      <div className="modal-content">
        <span className="close" onClick={()=>{showhide()}}>&times;</span>
        <p>Some text in the Modal..</p>
    </div>
    </div>
  )
}