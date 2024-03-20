import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import * as XLSX from 'xlsx';
import { useQuery } from 'react-query';
import allData from '../hooks/allData';



function TotalSell5() {
  const [user, loading,] = useAuthState(auth);

  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const { data: posts, error, isLoading ,refetch } = useQuery("postsData", allData);
 
  const filteredPosts = posts?.filter(item => item.email === 'shop5@gmail.com');  
  // refetch()
  
  useEffect(() => {
    // Fetch data from time.json when the component mounts


    // Set the initial selectedDate to the current month
    const today = new Date();
    const initialSelectedDate = today.toISOString().slice(0, 7); // Format: YYYY-MM
    setSelectedDate(initialSelectedDate);
  }, []);

  useEffect(() => {
    // Update filteredData when filteredPosts or selectedDate changes
    filterData();
  }, [filteredPosts, selectedDate]);
  

  const filterData = () => {
    const selectedMonth = new Date(selectedDate).getMonth() + 1;
    const selectedYear = new Date(selectedDate).getFullYear();

    const filteredData = filteredPosts?.filter((appointment) => {
      const appointmentMonth = new Date(appointment.time).getMonth() + 1;
      const appointmentYear = new Date(appointment.time).getFullYear();

      return (
        appointmentMonth === selectedMonth && appointmentYear === selectedYear
        //   && user?.email === 'dskuddin@gmail.com'||user?.email === 'r8ahim@gmail.com'||user?.email ==='iqbal101200@gmail.c0m'
      );
    });

    setFilteredData(filteredData);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };






  const cashValues = filteredData?.map((item) => parseFloat(item.totalCashValue) || 0);
  const bankValues = filteredData?.map((item) => parseFloat(item.totalBankValue) || 0);
  const sellValues = filteredData?.map((item) => parseFloat(item.totalSellValue) || 0);
  const glovoValues = filteredData?.map((item) => parseFloat(item.glovoValue) || 0);
  const restomaticValues = filteredData?.map((item) => parseFloat(item.restomaticValue) || 0);
  const phisnafelValues = filteredData?.map((item) => parseFloat(item.phisnafelValue) || 0);

  // Calculate the sum using reduce
  const totalSell = sellValues?.reduce((sum, value) => sum + value, 0);
  const totalCash = cashValues?.reduce((sum, value) => sum + value, 0);
  const totalBank = bankValues?.reduce((sum, value) => sum + value, 0);
  const totolGlovo = glovoValues?.reduce((sum, value) => sum + value, 0);
  const totalRestomatic = restomaticValues?.reduce((sum, value) => sum + value, 0);
  const totalPhisnafel = phisnafelValues?.reduce((sum, value) => sum + value, 0);

  const handleDallete = (ider) => {
    const id = ider;
    const data = { id: id }

    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      const url = `https://deltaserverer.onrender.com/items/${id}`;
      console.log(url);
      fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data),


      })
        .then(res => res.json())
        .then(data => {
          const remaining = filteredData?.filter(service => service._id !== id);
          setFilteredData(remaining);
        })
    }
  }

  const exportToExcel = () => {
    try {
      const worksheet = XLSX.utils.json_to_sheet(filteredData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
      XLSX.writeFile(workbook, 'kowle.xlsx');
    } catch (error) {
    }
  };



  return (
    <div className=''>

      <div className="overflow-x-auto   ">

        <input
          type="month"
          id="month"
          className='btn'
          value={selectedDate}
          onChange={handleDateChange}
        />
                <button className='btn btn btn-success' onClick={exportToExcel}>Export to Excel</button>


        <table className="table  -full mx-0">
          <thead>
            <tr className='text-{15px} 
 text-white'>
              <th className=''>date</th>
              <th>Total Sell</th>
              <th>Bank</th>
              <th>Cash</th>
              <th>Glovo</th>
              <th>Restomatic</th>
              <th>Pyszne pl</th>

            </tr>
          </thead>
          <tbody>

            {filteredData?.map((sell, index) =>
              <tr>
                <td>{sell.time.split('-')[2]}</td>
                <td>{sell.totalSellValue}</td>
                <td>{sell.totalBankValue}</td>
                <td>{sell.totalCashValue}</td>
                <td>{sell.glovoValue}</td>
                <td>{sell.restomaticValue}</td>
                <td>{sell.phisnafelValue}</td>
                <td><button onClick={() => handleDallete(sell._id)} className="btn btn-error btn-xs">Dellete</button></td>

              </tr>

            )}

          </tbody>
          <tfoot>
            <tr className=' text-red-500'>
              <th></th>
              <th className='text-[17px]'>{Math.ceil(totalSell)}</th>
              <th className='text-[17px]'>{Math.ceil(totalBank)}</th>
              <th className='text-[17px]'>{Math.ceil(totalCash)}</th>
              <th className='text-[17px]'>{Math.ceil(totolGlovo)}</th>
              <th className='text-[17px]'>{Math.ceil(totalRestomatic)}</th>
              <th className='text-[17px]'>{Math.ceil(totalPhisnafel)}</th>
            </tr>
          </tfoot>
        </table>

      </div>

    </div>
  )
}

export default TotalSell5