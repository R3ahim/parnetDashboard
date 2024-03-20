import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if ( email === 'rahim@gmail.com') {
       
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth,email, password)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
        return;
      }
      else{
        alert('your are not admin')
      }
      setErrorMsg("");
  
    };    



    return (
            <div class="max-w-sm mx-auto"  >
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
    <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)}  id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
    <input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
  
  <div class="flex items-start mb-5">
   
{/* <p>New to Here<Link to="/register" class="text-blue-600 hover:underline dark:text-blue-500">Create A Account</Link></p> */}
  </div>
  <button onClick={handleSubmission} class="btn btn-accent">Login</button>
</div>
        
        
    );
};

export default Login;