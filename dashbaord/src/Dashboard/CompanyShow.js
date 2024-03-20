import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function CompnayShow() {
    const [jsonData, setJsonData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [user] = useAuthState(auth)

    useEffect(() => {
      // Fetch data from time.json when the component mounts
      fetchData();
  
      // Set the initial selectedDate to the current month
      const today = new Date();
      const initialSelectedDate = today.toISOString().slice(0, 7); // Format: YYYY-MM
      setSelectedDate(initialSelectedDate);
    }, []);
  
    useEffect(() => {
      // Update filteredData when jsonData or selectedDate changes
      filterData();
    }, [jsonData, selectedDate]);
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://deltaserverer.onrender.com/company"); // Assumes time.json is in the public folder
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const handleDallete =(ider)=>{
        const id = ider;
        const data = {id:id}
       
       const proceed = window.confirm('Are you sure?');
      
       
           const url = `https://deltaserverer.onrender.com/company/${id}`;
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
               const remaining = filteredData.filter(service => service._id !== id);
               setFilteredData(remaining);
           })
    
           
    }
    
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };
    

    const filterData = () => {
        const selectedMonth = new Date(selectedDate).getMonth() + 1;
        const selectedYear = new Date(selectedDate).getFullYear();
    
        const filteredData = jsonData.filter((appointment) => {
          const appointmentMonth = new Date(appointment.date).getMonth() + 1;
          const appointmentYear = new Date(appointment.date).getFullYear();
    
          return (
            appointmentMonth === selectedMonth && appointmentYear === selectedYear  
            );
        });
    
        setFilteredData(filteredData);
      };
      const expanceValues = filteredData.map((item) => parseFloat(item.expance) || 0);
      const totalexpance = expanceValues.reduce((sum, value) => sum + value, 0);
 console.log(filterData,jsonData)
          return (
    <div className=''>

<div className="overflow-x-auto  ">

        <input
          type="month"
          id="month"
          className='btn'
          value={selectedDate}
          onChange={handleDateChange}
        />

  <table className="table  w-full mx-0 ">
    <thead>
      <tr className='text-white'>
    
        <th className=''>date</th> 
        <th>Expense</th> 
        <th>Name</th> 
        <th>Comment</th> 

      
      
      </tr>
    </thead> 
    <tbody>
     
      {filteredData.map((sell, index ) =>
        <tr>
           <td>{sell.date.split('-')[2]}</td> 
          <td>{sell.expance}</td> 
          <td>{sell.name}</td> 
          <td>{sell.comment}</td> 
          <td><button  onClick={()=>handleDallete(sell._id)}  className="btn btn-error btn-xs">Dellete</button></td>
     
        </tr>
        
      )}
      
    </tbody> 
    <tfoot>
      <tr className=' text-red-500'>
        <th></th> 
        <th className='text-[17px]'>{Math.ceil(totalexpance)}</th> 
        <th className='text-[17px]'></th> 
        <th className='text-[17px]'></th> 
        <th className='text-[17px]'></th> 

      </tr>
    </tfoot>
  </table>
</div>

    </div>
  )
}

export default CompnayShow