import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { useQuery } from "react-query";
import { useAuthState } from 'react-firebase-hooks/auth';
import retrievePosts from '../hooks/retrievePosts';

function Attendence() {
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [user, loading] = useAuthState(auth);
    const [selectedValue, setSelectedValue] = useState('');
    const [ShopName, setShopName] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [timeValue2, setTimeValue2] = useState('');
    const [username, setUsername] = useState('');
    const { data: posts, error, isLoading ,refetch } = useQuery("postsData", retrievePosts);
    
    const filteredPosts = posts?.filter(item => item.shopName === user?.email);  
    console.log(filteredPosts)
    refetch();
   
  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
    const handleEmSub =async()=>{
      
      const data ={
        email:user?.email,
        employee:username,
        shopName:ShopName,
       

      }
      try {
        const response = await fetch('https://delta-j1eh.onrender.com/addMember', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
      if(response.ok){
      }
      
      } catch (error) {
        console.error('Error:', error);
      }
      
    }
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleShopnameChange = (event) => {
    setShopName(event.target.value);
    console.log('nothing',event.target.value)
  };
  console.log('shopnameformd',ShopName)
  
  const handleTimeChange = (event) => {
    setTimeValue(event.target.value);
   
  };
  const handleTimeChange2 = (event) => {
    setTimeValue2(event.target.value);
    
  };

    const handleSubmission =async () => {
       
            const time1Obj = new Date("2000-01-01T" + timeValue + ":00");
            const time2Obj = new Date("2000-01-01T" + timeValue2 + ":00");
    
            const difference = Math.abs(time2Obj - time1Obj);
            const hours =  Math.floor(difference / 3600000);
            const minutes =Math.floor((difference % 3600000) / 60000);
            const formattedTimeDifference = `${hours}:${minutes}`;

            
      
            
          
      const data = {
        email:user?.email,
        date:date,
        name:selectedValue,
        time:formattedTimeDifference,
        from:timeValue,
        to:timeValue2

      }

      console.log(data)
     
      try {
        const response = await fetch('https://delta-j1eh.onrender.com/attend1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
      
        if (response.ok) {
            setEmail('')
            setDate('')
            setTimeValue('')
            setTimeValue2('')
            alert('okey done')

        } else {
            console.error('Failed to send data to the server.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      
      

    };
  
  return (

     
    
    <div>
   <h1 className='text-center text-3xl mb-6 font-bold text-green-500 '>{user?.email== 'shop1@gmail.com'?'jodłowa11a':''|| user?.email === 'shop2@gmail.com'? 'Wojskatczew' :''|| user?.email === 'shop3@gmail.com'?'jasinskiego':''|| user?.email == 'shop4@gmail.com'? 'olsztynek':''|| user?.email == 'shop5@gmail.com'?'Kowale':'' ||user?.email === 'shop6@gmail.com'?'Cieplewo' :''|| user?.email === 'shop7@gmail.com'?'Starogard1':'' || user?.email ==='shop8@gmail.com'?'starogard2':'' || user?.email =='shop9@gmail.com'?'Malbok':'' ||user?.email == 'shop10@gmail.com'?'lidzbark' :''|| user?.email == 'shop11@gmail.com'?'sierakowice':''|| user?.email === 'shop12@gmail.com'?'szczecinek':''||user?.email === 'shop13@gmail.com'?"Tuchola":''|| user?.email === ''?'login first':'login first'}</h1>
        <div>


       <div class="max-w-sm mx-auto"  >

       <div class="relative z-0 w-full mb-5 group">
            <input type="time" 
              name="timing"
              step="60"
              value={timeValue}
              onChange={handleTimeChange}
              id="floating_phone"  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="time" 
              name="timing"
              step="3600"
              value={timeValue2}
            onChange={handleTimeChange2}
              id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Out</label>
          </div>
         <div class="mb-5">
           <label for="text" class="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
           <select className="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  value={selectedValue} onChange={handleChange}>
           <option value={''}>Select Employee</option>

    {filteredPosts.map(em=>
      <option value={em.employee}>{em.employee}</option>
      )}
  
    </select>
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
         <button onClick={handleSubmission} class="btn btn-accent">Submit</button>{/* The button to open modal */}
{
 user?.email === 'rahim@gmail.com'||  user?.email === 'dskuddin@gmail.com'|| user?.email ==='r8ahim@gmail.com'?<label htmlFor="my_modal_6" class="btn btn-success" title='Add more emplye'>+</label>: <span> </span>
}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal " role="dialog" style={{}}>
  <div className="modal-box bg-black">
  <div class="mb-5">
      <label className='block mb-2 text-sm font-medium text-white dark:text-white'>
        Employee name:
        <input  id="email" class="bg-gray-400 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
        </div>
        <div class="mb-5">
           <label for="text" class="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
           <select className="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  value={ShopName}   onChange={handleShopnameChange}>
      <option   value="shop1@gmail.com">Select Shop</option>
      <option   value="shop1@gmail.com">jodlowa11a</option>
      <option    value="shop2@gmail.com">wojskatczew</option>
      <option    value="shop3@gmail.com">jasinskiego</option>
      <option    value="shop4@gmail.com">olsztynek</option>
      <option    value="shop5@gmail.com">kowale</option>
      <option    value="shop6@gmail.com">cieplewo</option>
      <option    value="shop7@gmail.com">starogard 1</option>
      <option    value="shop8@gmail.com">stargard 2</option>
      <option    value="shop9@gmail.com">malbork</option>
      <option    value="shop10@gmail.com">lidzbark</option>
      <option    value="shop11@gmail.com">sierakowice</option>
      <option    value="shop12@gmail.com">szczecinek</option>
      <option    value="shop13@gmail.com">tuchola</option>
      <option    value="shop14@gmail.com">shop14</option>
      <option    value="shop15@gmail.com">shop15</option>
    </select>
         </div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn" onClick={handleEmSub}>Submit</label>
    </div>
  </div>
</div>
       </div>
           </div>
    </div>
  )
}

export default Attendence