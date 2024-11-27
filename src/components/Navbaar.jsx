import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from "../asset/shop.png"

import bag from "../asset/shopping-bag_14099095.gif";
import { toast } from 'react-toastify';
const Navbaar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const navigate = useNavigate()
  function handleLogout (){
    toast.success('Logout Successfully')
       navigate('/login')
  }
  return (
    <div className='navbar' style={{ display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
       position:'relative'
        }}>
        <span className='logo'>
          <img style={{width:'40px', height:'40px',borderRadius:'50%'}} 
          src='https://img.freepik.com/premium-vector/woman-avatar-with-online-shopping-icon-pop-art-style_24911-19045.jpg?w=740' alt='my-store' />
          </span><h2 style={{position:'absolute', left:'4rem',top:'0.5rem',fontWeight:'bold'}}>Online Shopping</h2>
        <div style={{marginRight:'2rem', display:'flex', justifyContent:'space-between',gap:'0.8rem'}}>
         <button className='btn log-btn' onClick={handleLogout}>LogOut</button>
      <Link className='navLink' to='/home'><img style={{width:'40px', height:'40px', backgroundColor:'#fff',}} src={store} alt='store' /></Link>
      
      <Link className='navLink' to='/cart'><img style={{width:'40px', height:'40px',borderRadius:'50%'}} src={bag} alt='bag' /></Link>
    <h3 className='item-quant' style={{fontWeight:'bold'}}>Item:{cartTotalQuantity}</h3> 
      
      </div>
    </div>
  )
}

export default Navbaar
