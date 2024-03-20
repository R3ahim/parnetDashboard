import React, { useState } from 'react'
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Compnay() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [comment,setComment] = useState('')
    const [user, loading, error] = useAuthState(auth);
  
    const handleSubmission =async () => {
      const data = {
        email:user.email,
        expance:email,
        date:date,
        comment:comment,
        name:name

      }

     
      try {
        const response = await fetch('https://deltaserverer.onrender.com/company', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
      
        if (response.ok) {
            alert('okey done')
            setEmail('')
            setName('')
            setDate('')
            setComment('')
        } else {
            console.error('Failed to send data to the server.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      
      

    };
  
  return (
    <div>
        <h1 className='text-center text-4xl mb-10'>Copany Expense</h1>
        <div>
       

       <div class="max-w-sm mx-auto"  >
       

         <div class="mb-5">
           <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expense Amount</label>
           <input  type="number" value={email} onChange={(e) => setEmail(e.target.value)}  id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="type your Expense" required/>
         </div>
         <div class="mb-5">
           <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
           <input  value={name} onChange={(e) => setName(e.target.value)} type="text" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
         </div>
         <div class="mb-5">
           <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Comment</label>
           <input  value={comment} onChange={(e) => setComment(e.target.value)} type="text" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
         </div>
         <div class="mb-5">
         <input
          type="date"
          id="month"
          className='btn'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
         </div>
         
         <div class="flex items-start mb-5">
           
           
         </div>
         <button onClick={handleSubmission} class="btn btn-accent">Submit</button>
       </div>
           </div>
    </div>
  )
}

export default Compnay