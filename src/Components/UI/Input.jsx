import React from 'react'
import cl from '../../styles/login.module.css'

export default function Input (props) {
  return (
    <div className={cl.formInput}>
        <label>{props.label}</label>
        <input type={props.type} name={props.name} required className={cl.modalInput} />
    </div>
  )
}
