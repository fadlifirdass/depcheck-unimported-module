import React,{useEffect} from 'react'
import LayoutLogin from './LayoutLogin'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getMe} from "../features/authSlice"
import ManageProductList from '../components/ManageProductList'

const ManageProducts = () => {

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
          <ManageProductList/>
        </LayoutLogin>
    </div>
  )
}

export default ManageProducts
