import React from 'react'
import '../scss/navmatoa.scss'
import {
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

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
        <button><ShoppingOutlined style={{fontSize:'18px'}}/></button>
      </div>
    </div>
  )
}

export default NavMatoa