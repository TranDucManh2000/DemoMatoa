import React from 'react'
import '../scss/navmatoa.scss'
import {
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import MatoaCart from '../commoncart/MatoaCart';

const NavMatoa = () => {
  return (
    <div className='navmatoas'>
      <div className='logo'></div>
      <div className='textnav'>
        <p>Watches</p>
        <p>Eyewear</p>
        <p>Accessories</p>
        <p>News</p>
      </div>
      <div className='itemnav'>
        <p><SearchOutlined /></p>
        <p><UserOutlined /> Log In</p>
        <MatoaCart/>
      </div>
    </div>
  )
}

export default NavMatoa