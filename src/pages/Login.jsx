import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import icon1 from '../images/login.png'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className='flex flex-col items-center justify-center flex-grow text-center rounded-[25px] bg-blue bg-opacity-[50%] max-w-[700px] p-4 mx-auto my-10'>
        <img src={icon1} alt="Image" className="w-[60%] sm:w-[50%] lg:w-[40%]"/>
        <h1 className='text-green-dark text-2xl font-bold py-2'>Acceder</h1>
        <p className='py-2 text-green-dark'>
          Solo uso para miembros de la administración.{' '}
          <Link to='/' className='underline text-green-dark'>
            Volver a inicio.
          </Link>
        </p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium text-green-dark'>correo electrónico</label>
            <input onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded-[25px] w-full' type='email' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='py-2 font-medium text-green-dark'>contraseña</label>
            <input onChange={(e) => setPassword(e.target.value)} className='border p-3 rounded-[25px] w-full' type='password' />
          </div>
          <button className='border border-blue-500 bg-blue hover:bg-blue-500 w-full rounded-[25px] p-3 my-2 text-white'>
            Entrar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;