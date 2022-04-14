import React from 'react'
import MatoaFooter from '../common/MatoaFooter'
import NavMatoa from '../common/NavMatoa'
import HeaderProduc from '../commonProduc/HeaderProduc'
import RelateProduct from '../commonProduc/RelateProduct'
import Tabproduct from '../commonProduc/Tabproduct'
import '../scss/wireframe.scss'

const Product = () => {
  return (
    <div className='wireframe'>
      <NavMatoa/>
      <HeaderProduc/>
      <Tabproduct/>
      <RelateProduct/>
      <MatoaFooter/>
    </div>
  )
}

export default Product