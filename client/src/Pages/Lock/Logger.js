import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logger = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the provided credentials are correct (replace with your logic)
    if (username === 'jodlowa11a' && password === 'shop1') {
      // Set authenticated to true and navigate to TotalValue
      setAuthenticated(true);
      navigate('/shop1/addSell');
    } else {
      // Handle incorrect credentials (you may show an error message)
      alert('Invalid credentials');
    }
  };

  return (
    <div  class="max-w-sm mx-auto">

     
      <div class="mb-5">
      <label className='block mb-2 text-sm font-medium text-white dark:text-white'>
        Username:
        <input  id="email" class="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
        </div>
        <div className="mb-5">
        <label  className='block mb-2 text-sm font-medium text-white dark:text-white'>
        Password:
        <input id="password" class="bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
        </div>
      <br />
      <button class="btn btn-accent" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Logger;