import React, { useState,useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import matchers from '@testing-library/jest-dom/matchers';
import attender from '../hooks/attender';
import { useQuery } from 'react-query';
import attendData from '../hooks/attendData';

function ManageEmplye() {
    const [filteredData, setFilteredData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [user] = useAuthState(auth)
    const [selectedValue, setSelectedValue] = useState('');
    const { data: posts, error, isLoading ,refetch } = useQuery("postsData", attender);
    refetch();
    
    
   

    console.log(selectedValue)
    useEffect(() => {
      // Fetch data from time.json when the component mounts
  
      // Set the initial selectedDate to the current month
      const today = new Date();
      const initialSelectedDate = today.toISOString().slice(0, 7); // Format: YYYY-MM
      setSelectedDate(initialSelectedDate);
    }, []);
  
    useEffect(() => {
      // Update filteredData when jsonData or selectedDate changes
      filterData();
    }, [posts, selectedDate,selectedValue]);
   const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://deltaserverer.onrender.com/attend1"); // Assumes time.json is in the public folder
    //     const data = await response.json();
    //     setJsonData(data);
    //     console.log(data)
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    const filterData = (h) => {
      const selectedMonth = new Date(selectedDate).getMonth() + 1;
      const selectedYear = new Date(selectedDate).getFullYear();
      
      const filteredData = posts?.filter((appointment) => {
        // const appointmentMonth = new Date(dete).getMonth() + 1;
        // const appointmentYear = new Date(dete).getFullYear();
       const employe =appointment.shopName;
        return (
           employe === selectedValue
        //    user?.email === 'dskuddin@gmail.com'||user?.email === 'r8ahim@gmail.com'||user?.email ==='iqbal101200@gmail.c0m'
        );
      });
     console.log(filteredData)
      setFilteredData(filteredData);
    };
  
    const handleDateChange = (event) => {
       
      setSelectedDate(event.target.value);
      const h = event.target.value;
      filterData(h);
    };
  

  

    const expanceValues = filteredData?.map((item) => parseFloat(item.time) || 0);


    // Calculate the sum using reduce
     const totalexpance = expanceValues?.reduce((sum, value) => sum + value, 0);

     

     const handleDallete =(ider)=>{
        const id = ider;
        const data = {id:id}
       
       const proceed = window.confirm('Are you sure?');
       
       if(proceed){
           const url = `https://deltaserverer.onrender.com/addMember/${id}`;
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
           <option selected  value="">allShops</option>

           <option selected  value="shop1@gmail.com">jodlowa11a</option>
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
    
        </div>
    
      <table className="table  w-full mx-0 ">
        <thead>
          <tr className='text-white'>
        
                <th>positon</th>
               <th>shopName</th> 
               <th>Employee Name</th>
                 <th>Edit</th> 
                 <th>Delete</th> 
          
          </tr>
        </thead> 
        <tbody>
         
          {filteredData?.map((expance, index ) =>
            <tr>
                <td>{index}</td>
              <td>{expance.shopName}</td> 
              
              <td>{expance.employee}</td>
               
              <td><button  className="btn btn-accent btn-xs">Edit</button></td>  
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

export default ManageEmplye