import { useState } from "react"
   
export default function Login() {
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
     e.preventDefault();
  }

  return (
    <div className="login">
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="contraseña"/>
      <button type="submit">Login</button>
      {error && <span>Email o password incorrectos!</span>}
    </form>
    </div>
  )
}
