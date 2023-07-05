import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';



export default function Account() {
const {user, logout} = UserAuth();
const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await logout();
    navigate('/');
    console.log("you are logged out");
  } catch (e) {
    console.log(e.message);
  }
}

  return (
    <div>
    <p>Usuario : {user && user.email}</p>
    <div>Account</div>
    <button onClick={handleLogout}>log out</button>
    </div>
  );
};
