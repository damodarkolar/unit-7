import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Private = ({ children }) => {
    const token=5;
    const navigate=useNavigate();
    useEffect(()=>{
        navigate("/")
    },[])
    React.useEffect(()=>{

    },[])

  return (
    children
  )
}
