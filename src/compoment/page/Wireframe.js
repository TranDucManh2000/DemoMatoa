import React from 'react'
import DealsWireframe from '../common/DealsWireframe'
import HeaderWireframe from '../common/HeaderWireframe'
import In4wireframe from '../common/In4wireframe'
import MatoaFooter from '../common/MatoaFooter'
import NavMatoa from '../common/NavMatoa'
import Newswire from '../common/Newswire'
import '../scss/wireframe.scss'

const Wireframe = () => {
  return (
    <div className='wireframe'>
      <NavMatoa/>
      <HeaderWireframe/>
      <DealsWireframe/>
      <Newswire/>
      <In4wireframe/>
      <MatoaFooter/>
    </div>
  )
}

export default Wireframe