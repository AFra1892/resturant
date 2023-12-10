import React from 'react'
import jwt from 'jsonwebtoken'

const DashTest = () => {
    const token = localStorage.getItem('token')
    const t = token.split(' ')[1]
    const decoded = jwt.verify(t,'myfirstprojectworkingwithjwt10801')
    console.log(decoded);
  return (
    <div>{decoded.name}</div>
  )
}

export default DashTest