import React from 'react'
import AnnounceSlider from '../components/AnnounceSlider'
import ProductListHome from '../components/ProductListHome'
import Layout from './Layout'

const Dashboard = () => {
  return (
   <Layout>
     <AnnounceSlider/>
     <br />
     <br />
     <ProductListHome/>
   </Layout>
  )
}

export default Dashboard
