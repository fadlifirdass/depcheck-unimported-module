import React,{useEffect} from 'react'
import EditProduct from '../components/EditProduct'
import LayoutLogin from './LayoutLogin'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {getMe} from '../features/authSlice'

const ManageEditProduct = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isError , user} = useSelector((state) => state.auth)

    useEffect(()=>{
        dispatch(getMe())
    },[dispatch])

    useEffect(()=>{
        if(isError){
            navigate('/')
        }
        if(user && user.role !== "seller"){
            navigate('/dashboard')
        }
    },[isError,user,navigate])


  return (
    <div>
        <LayoutLogin>
           <EditProduct/>
        </LayoutLogin>
    </div>
  )
}

export default ManageEditProduct
