import React from 'react'

export default function Greet(props) {
  return (
    <div className="container card  box-container">
    <h1>Thank you for joining</h1>
    <h1> {props.name},</h1>
    <h1>email sent varification,{props.email}</h1>
    
     </div>
  )
}
