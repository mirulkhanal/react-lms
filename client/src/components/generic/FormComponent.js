import React from 'react'
import '../../styles/forms.css'
const FormComponent = () => {
  return (
    <form>
      <input type='text' placeholder='Full Name' />
      <input type='text' placeholder='Address' />
      <input type='email' placeholder='Email' />
      <input type='number' placeholder='Phone number' />
    </form>
  )
}

export default FormComponent
