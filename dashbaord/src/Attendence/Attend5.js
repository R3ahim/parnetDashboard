import React, { useState,useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import matchers from '@testing-library/jest-dom/matchers';
import attender from '../hooks/attender';
import { useQuery } from 'react-query';
import attendData from '../hooks/attendData';

function Attend5() {
  
    const [user] = useAuthState(auth)
    const { data: posts, error, isLoading  } = useQuery("postsData", attender);
    const { data: jsonData, error2, isLoading2 ,refetch } = useQuery("jsonData", attendData);
    const [selectedValue, setSelectedValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(""); 
    const filteredPosts = posts?.filter(item => item.shopName === 'shop5@gmail.com'); 
    const filterJson = jsonData?.filter(item => item.email === 'shop5@gmail.com'); 
    const [upForm,setUpFrom] = useState('')
    const [upTo,setUpTo] = useState('')
    refetch();
    
    const [hours, setHours] = useState('');

  const handleChangeHours = (event) => {
    const { value } = event.target;
    // Ensure that the value entered is a valid number and less than or equal to 24
    if (!isNaN(value) && value >= 0 && value <= 24) {
      setHours(value);
    }
  };
   

    useEffect(() => {
      // Fetch data from time.json when the component mounts
  
      // Set the initial selectedDate to the current month
      const today = new Date();
      const initialSelectedDate = today.toISOString().slice(0, 7); // Format: YYYY-MM
      setSelectedDate(initialSelectedDate);
    }, []);
    useEffect(() => {
      // setSelectedValue(filteredPosts?.value);

    }, []); 
  
    useEffect(() => {
      // Update filteredData when jsonData or selectedDate changes
      filterData();
    }, [filterJson, selectedDate,selectedValue,filteredData,filteredPosts]);
   const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
 
  // autot select
    const filterData = (h) => {
      const selectedMonth = new Date(selectedDate).getMonth() + 1;
      const selectedYear = new Date(selectedDate).getFullYear();
      
      const filteredData = filterJson?.filter((appointment) => {
        const deto = appointment.date
        const dete = deto.slice(0, 7);
        const appointmentMonth = new Date(dete).getMonth() + 1;
        const appointmentYear = new Date(dete).getFullYear();
       const employe =appointment.name;
        return (
          appointmentMonth === selectedMonth && appointmentYear === selectedYear  && employe === selectedValue
        //    user?.email === 'dskuddin@gmail.com'||user?.email === 'r8ahim@gmail.com'||user?.email ==='iqbal101200@gmail.c0m'
        );
      });
     console.log(filteredData)
      setFilteredData(filteredData);
    };
  
    const handleDateChange = (event) => {
       
      setSelectedDate(event.target.value);

    };
  


    const expanceValues = filteredData?.map((item) => parseFloat(item.time) || 0);


    // Calculate the sum using reduce
     const totalexpance = expanceValues?.reduce((sum, value) => sum + value, 0);

     

     const handleDallete =(ider)=>{
        const id = ider;
        const data = {id:id}
       
       const proceed = window.confirm('Are you sure?');
       
       if(proceed){
           const url = `https://deltaserverer.onrender.com/attend1/${id}`;
           console.log(url);
           fetch(url, {
               method: 'DELETE',
               headers: {
                   'content-type': 'application/json'
               },
               body:JSON.stringify(data),
             
               
           })
           .then(res => res.json())
           .then(data => {
               console.log(data);
               const remaining = filteredData?.filter(service => service._id !== id);
               setFilteredData(remaining);
           })
       }
    }


    const handleAttendUp =(id)=>{

      const updateData ={
        time:hours,
        from:upForm,
        to:upTo,
       
    }
    const url  =`https://deltaserverer.onrender.com/attend1/${id}`
    fetch(url,{
        method:'PUT',
        headers:{
           'content-type': 'application/json'
        },
        body:JSON.stringify(updateData)
    })
    .then(res=>res.json())
    .then(data=>{
        setFilteredData(data)
    })
    }
    
    
      return (
        <div className=''>
    
        <div className="overflow-x-auto  ">
        
            <div className="flex items-center   ">
            <input
                  type="month"
                  id="month"
                  className='btn'
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                 <div class="">
               <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[160px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" value={selectedValue}  onChange={handleChange}>
               <option  value={''}>select Employee</option>
    
          {filteredPosts?.map(em=>
          <option key={em._id} value={em.employee}>{em.employee }</option>
          )}
      
    
        </select>
             </div>
        
            </div>
          <table className="table  w-full mx-0 ">
            <thead>
              <tr className='text-white'>
            
         
                   <th>Date</th> 
                   <th>ShopName</th>
                   <th>from</th> 
                <th>To</th> 
                <th>Total Hour</th> 
              
             
                <th></th> 
              
              </tr>
            </thead> 
            <tbody>
             
              {filteredData?.map((expance, index ) =>
                <tr>
                   <td>{expance.date.split('-')[2]}</td> 
                  <td>{expance.email}</td> 
                  <td>{expance.from}</td> 
                  <td>{expance.to}</td> 
                  <td>{expance.time}</td>
                  <input type="checkbox" id={`my_modal_${expance._id}`}className="modal-toggle" />
    <div className="modal " role="dialog" style={{}}>
      <div className="modal-box bg-black">
        <h3 className="text-center text-2xl">{expance.name}</h3>
      <div class="mb-5">
          <label className='block mb-2 text-sm font-medium text-white dark:text-white'>
            Come At {expance.from}
            <input type="time" 
                  name="timing"
                  step="3600"
                value={upForm} onChange={(e) => setUpFrom(e.target.value)}  id="email" class="bg-gray-400 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"    />
          </label>
          <label className='block mb-2 text-sm font-medium text-white dark:text-white'>
            Out At {expance.to}
        <input type="time" 
                  name="timing"
                  step="3600"
                value={upTo} onChange={(e) => setUpTo(e.target.value)}  id="email" class="bg-gray-400 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
          </label>
          <label className='block mb-2 text-sm font-medium text-white dark:text-white'>
            How much
        <input
                  type="number" 
                  value={hours} 
                  onChange={handleChangeHours} 
                  placeholder="Enter hours (0-24)"  id="email" class="bg-gray-400 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
          </label>
            </div>
            
            
        <div className="modal-action">
          <label htmlFor={`my_modal_${expance._id}`} onClick={(e)=>(handleAttendUp(expance._id))} className="btn" >Submit</label>
        </div>
      </div>
    </div>  
                  <td><label htmlFor={`my_modal_${expance._id}`} class="btn btn-success" title='Add more emplye'>Edit</label></td>
              
                  <td><button  onClick={()=>handleDallete(expance._id)}  className="btn btn-error btn-xs">Dellete</button></td>  
                </tr>
                
              )}
              
            </tbody> 
            <tfoot>
              <tr className=' text-red-500'>
                
                <th></th> 
                <th></th> 
                <th></th> 
                <th>totalDuration</th> 
                <th className='text-[17px]'>{totalexpance} Hour</th> 
    
              </tr>
            </tfoot>
          </table>
        </div>
        
            </div>
  )
}

export default Attend5