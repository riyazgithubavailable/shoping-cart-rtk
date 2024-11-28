import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from "../asset/shop.png"

import bag from "../asset/shopping-bag_14099095.gif";
import { toast } from 'react-toastify';
const Navbaar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const navigate = useNavigate()
  function handleLogout() {
    toast.success('Logout Successfully')
    navigate('/login')
  }

  function deleteData() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    toast.success('Account Delete Successfully')
    navigate('/')
  }
  return (
    <div className='navbar' style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      <span className='logo'>
        <img style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          src='https://img.freepik.com/premium-vector/woman-avatar-with-online-shopping-icon-pop-art-style_24911-19045.jpg?w=740' alt='my-store' />
      </span><h2 style={{ position: 'absolute', left: '4rem', top: '0.5rem', fontWeight: 'bold' }}>Online Shopping</h2>
      <div style={{ marginRight: '2rem', display: 'flex', justifyContent: 'space-between', gap: '0.8rem' }}>
        <div className='btn-div' >
        <button className='btn log-btn' onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i></button>
        
        <svg onClick={deleteData} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="#669df6"></circle><path fill="#317be4" d="M42,27v5.73C38.76,39.4,31.92,44,24,44C12.95,44,4,35.05,4,24c0-2.09,0.32-4.1,0.92-6H33	C37.97,18,42,22.03,42,27z"></path><polygon fill="#fff" points="27,14 26,13 22,13 21,14 15,14 15,16 18,16 30,16 33,16 33,14"></polygon><path fill="#fff" d="M16,18v14c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V18H16z M24,21c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2	S22.9,21,24,21z M28,31h-8v-2c0-1.33,2.67-2,4-2s4,0.67,4,2V31z"></path>
        </svg>
        </div>
        <Link className='navLink' to='/home'><img style={{ width: '40px', height: '40px', backgroundColor: '#fff', }} src={store} alt='store' /></Link>

        <Link className='navLink' to='/cart'><img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={bag} alt='bag' /></Link>
        <h3 className='item-quant' style={{ fontWeight: 'bold' }}>Item:{cartTotalQuantity}</h3>

      </div>
    </div>
  )
}

export default Navbaar
