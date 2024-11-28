import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();
    const [visible,setVisible] = useState(false)
    function handleLogin(e) {
        e.preventDefault();
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Check if the entered email and password match the stored ones
        if (email.current.value === storedEmail && password.current.value === storedPassword) {
            toast.success("Login successful")
            // Redirect to home page
            navigate('/home'); // Change this to your actual home route
        } else {
            toast.error('Invalid email or password');
        }
    }

    return (
        <div className='w-full h-screen bg flex items-center justify-center tracking-wider'>
            <div className='w-11/12 sm:w-5/12 md:w-3/12 text-sm glass'>
                <div className='w-full text-center my-3'>
                    <h2 className='text-2xl text-black font-medium'>Login</h2>
                </div>
                <form className='my-2'>
                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input
                            type='email'
                            ref={email}
                            className='w-11/12 bg-transparent outline-none placeholder-black'
                            placeholder='Enter Your Email Address'
                        />
                        <div className='w-2/12 flex item-center justify-center'>
                            <i className="fa-solid fa-envelope text-xl"></i>
                        </div>
                    </div>

                    <div className='flex border-b-black border-b-2 mx-5 my-7 py-1'>
                        <input type={visible ? "text" : "password"} ref={password} className='w-11/12 bg-transparent outline-none placeholder-black' placeholder='Create a strong password' />
                        <div className='w-2/12 flex item-center justify-center' onClick={() => setVisible(!visible)}>
                            {visible ? (<i class="fa-solid fa-eye"></i>) : (<i class="fa-solid fa-eye-slash"></i>)}
                        </div>
                    </div>

                    <div className='mx-5 my-7 py-2'>
                        <button onClick={handleLogin} className='bg-black w-full h-[35px] rounded-sm text-white'>
                            Login
                        </button>
                    </div>
                    <Link to='/' className='mx-5 my-5 py-2 flex item-center justify-center cursor-pointer'>
                        <p className='text-sm'>Don't have an account? / <span className='span-tag' >Register</span></p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;