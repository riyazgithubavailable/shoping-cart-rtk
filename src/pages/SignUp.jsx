import React,{useRef,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Login from './Login'

const SignUp = () => {
    const name = useRef()
    const email= useRef()
    const password = useRef()
    const [show,setShow] = useState(false)
    
    const navigate = useNavigate()
  
    function handleClick (e) {
        e.preventDefault()
        
        if(name.current.value && email.current.value && password.current.value ){
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            setShow(true)
           toast.success('User successfully registered')
           navigate('/login')
        }else{
            toast.error('Please fill all the fields')
        }
    }
  return (<>
  {show ? (
    <Login />
    ):(<div className='w-full h-screen bg flex items-center justify-center tracking-wider'>
        <div className='  w-11/12 sm:w-5/12 md:w-3/12 text-sm  glass '>
        <div className=' w-full text-center my-3'>
            <h2 className='text-2xl text-black font-medium '>Register</h2>
        </div>
        <form className='my-2'>
            <div className='flex border-b-black border-b-2 mx-5 my-7 py-1 '>
                <input type='text' ref={name} className='w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Your Name' />
                <div className='w-2/12 flex item-center justify-center'>
                <i className="fa-solid fa-user text-xl"></i>
                </div>
            </div>

            <div className='flex border-b-black border-b-2 mx-5 my-7 py-1 '>
                <input type='email' ref={email} className='w-11/12 bg-transparent outline-none placeholder-black' placeholder='Enter Your Email Address' />
                <div className='w-2/12 flex item-center justify-center'>
                <i className="fa-solid fa-envelope text-xl"></i>
                </div>
            </div>

            <div className='flex border-b-black border-b-2 mx-5 my-7 py-1 '>
                <input type='password' ref={password} className='w-11/12 bg-transparent outline-none placeholder-black' placeholder='Create a strong password' />
                <div className='w-2/12 flex item-center justify-center'>
                <i className="fa-solid fa-lock text-xl"></i>
                </div>
            </div>
            <div className='mx-5 my-7 py-2'> 
              <button  onClick={handleClick} className='bg-black w-full h-[35px] rounded-sm text-white'>Register</button>
            </div>
            <Link to='/login' className='mx-5 my-5 py-2 flex item-center justify-center cursor-pointer'>
                <p className='text-sm'>Already have an account? /<span className='span-tag' >Login</span> </p>
            </Link>
        </form>
        </div>
      
    </div>)
}
    </>
  )
}

export default SignUp
