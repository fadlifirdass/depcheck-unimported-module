import React ,{useEffect} from 'react'
import ProductListHome from '../components/ProductListHome'
import LayoutLogin from './LayoutLogin'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getMe} from "../features/authSlice"
import AnnounceSlider from '../components/AnnounceSlider'

const DashboardLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isError} = useSelector((state) => state.auth)

    useEffect(()=>{
        dispatch(getMe())
    },[dispatch])

    useEffect(()=>{
        if(isError){
            navigate('/')
        }
    },[isError,navigate])

  return (
    <div>
        <LayoutLogin>
            <AnnounceSlider/>
            <br />
            <br />
            <ProductListHome/>
        </LayoutLogin>
    </div>
  )
}

export default DashboardLogin
