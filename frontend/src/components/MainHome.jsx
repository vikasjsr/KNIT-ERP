import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const MainHome = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login')
  },[])
  return (
    <div>
      redirecting...
    </div>
  )
}


export default MainHome
