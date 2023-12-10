import React from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
const DashTest = () => {
    const token = localStorage.getItem('token') // inja token ro ke to safhe login save kardim to local storage gereftim
    const { data } =  axios.get('http://localhost:5555/api/coddingaddict', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(`this is data from codding addcit ${data}`);
    // const decoded = jwt.verify(locToken,'myfirstprojectworkingwithjwt10801')
    // console.log(decoded);
  return (
    <div>DashTest</div>
  )
}

export default DashTest