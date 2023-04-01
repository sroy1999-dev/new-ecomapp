import React, { useState } from 'react';
import { BiShow, BiHide } from 'react-icons/bi';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => {
        return {
            ...prev,
            [name]:value
        }
    });
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  }
  return (
    <div className='min-h-screen w-full bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
     <div className='sm:mx-auto sm:w-full sm:max-w-md'>
      <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>Login to your account</h2>
     </div>
     <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form action="" className='space-y-6'>
                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email address</label>
                    <div className='mt-1'>
                        <input type="email" name="email" autoComplete="email" required value={data.email} onChange={handleOnChange} className='block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus-within:border-blue-500 sm:text-sm' />
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                    <div className='mt-1 relative'>
                        <input type={showPassword ? "text" : "password"} name="password" autoComplete="password" required value={data.password} onChange={handleOnChange} className='block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus-within:border-blue-500 sm:text-sm' />   
                        <span className='absolute right-2 top-2 cursor-pointer text-gray-500' onClick={handleShowPassword}>{showPassword ? <BiShow /> : <BiHide />}</span>
                    </div>
                </div>
                <div className={`${styles.normalFlex} justify-between`}>
                    <div className={`${styles.normalFlex}`}>
                        <input type="checkbox" name="remember me" id="remember me" className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded' />
                        <label htmlFor="remember me" className='ml-2 block text-gray-900'>Remember me</label>
                    </div>
                    <div className='text-sm'>
                        <Link to="#" className='font-medium text-blue-600 hover:text-blue-500'>Forgot password ?</Link>
                    </div>
                </div>
                <div>
                    <button type="submit" className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 uppercase'>Login</button>
                </div>
                <div className={`${styles.normalFlex} w-full`}>
                    <h4>Don't have an account ?</h4>
                    <Link to="/signup" className='text-blue-600 pl-2'>Signup</Link>
                </div>
            </form>
        </div>
     </div>
    </div>
  )
}

export default Login;