import { React, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Location from '../components/Location';
import Signup from '../components/Signup';
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const wasteCategories = ["Plástico", "Metal", "Papel", "Vidrio", "Organico"];
  const totalWasteCollected = 1000; // en kilogramos
  const mostCollectedCategory = "Plástico"; // categoría con la mayor cantidad de residuos recogidos

  const [selectedMenu, setSelectedMenu] = useState('');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  }

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto p-2 flex">
        <div className="w-1/6 border rounded-md bg-light-green bg-opacity-[50%] p-6 mr-3 text-green-dark">
          <h2 className="font-bold text-xl mb-4">Menú</h2>
          <ul>
            <li><p>Administrador : {user && user.email}</p></li>
            <li className="mb-2"><button onClick={() => handleMenuClick('Usuarios')}>Usuarios</button></li>
            <li className="mb-2"><button onClick={() => handleMenuClick('Ubicaciones')}>Ubicaciones</button></li>
            <li className="mb-2"><button onClick={() => handleMenuClick('Métricas')}>Métricas</button></li>
            <li className="mb-2"><button onClick={() => handleMenuClick('Agregar Usuarios')}>Agregar Usuarios</button></li>
          </ul>
        </div>
        <div className="w-3/4">
          <h1 className="text-2xl font-bold mb-4 text-green-dark">Dashboard de Gestión de Residuos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 border rounded-md bg-blue bg-opacity-[18%] text-gray-700">
              <h2 className="font-bold text-xl mb-2 ">Total de Residuos Recogidos</h2>
              <p>{totalWasteCollected} Kg</p>
            </div>
            <div className="p-6 border rounded-md bg-blue bg-opacity-[18%] text-gray-700">
              <h2 className="font-bold text-xl mb-2">Categoría con Mayor Recogida</h2>
              <p>{mostCollectedCategory}</p>
            </div>
            <div className="p-6 border rounded-md bg-blue bg-opacity-[18%] text-gray-700">
              <h2 className="font-bold text-xl mb-2">Categorías de Residuos</h2>
              <ul>
                {wasteCategories.map(category => <li key={category}>{category}</li>)}
              </ul>
            </div>
          </div>
          {selectedMenu === 'Ubicaciones' && <Location />}
          {selectedMenu === 'Agregar Usuarios' && <Signup />}
        </div>
      </div>
      <Footer />
    </div>
  );
}