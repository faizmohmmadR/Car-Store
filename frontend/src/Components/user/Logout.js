import React from 'react'

const Logout = () => {

    localStorage.removeItem('token')
    window.location = '/signin/'
    
  return null
}

export default Logout