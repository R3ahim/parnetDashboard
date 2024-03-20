
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


function MontyShet() {
  const { register } = useForm()
  const bdTime = new Date();
    const datetime = bdTime.toLocaleString();
    const [datePart, timePart] = datetime.split(', ');
    const [user, loading, error] = useAuthState(auth);


  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [inputMeet, setInputMeet] = useState([{ value: '' }]);
  const [inputFudi, setInputFudi] = useState([{ value: '' }]);
  const [inputWarzya, setInputWarzaya] = useState([{ value: '' }]);
  const [inputCola, setInputCola] = useState([{ value: '' }]);
  const [inputOpakowania, setInputOpakowania] = useState([{ value: '' }]);
  const [inputGaz, setInputGaz] = useState([{ value: '' }]);
  const [inputOthers, setInputOthers] = useState([{ value: '' }]);
  console.log(inputOthers)
  const [formData, setFormData] = useState({
    totalSell: '',
    totalBank: '',
    totalCash: '',
    restomatic: '',
    glovo: '',
    phisnafel: '',
  });

  const handleAddField = () => {
    setInputFields([...inputFields, { value: '' }]);
  };
  const handleAddMeet = () => {
    setInputMeet([...inputMeet, { value: '' }]);
  };
  const handleAddFudi = () => {
    setInputFudi([...inputFudi, { value: '' }]);
  };
  const handleAddWarzywa = () => {
    setInputWarzaya([...inputWarzya, { value: '' }]);
  };
  const handleAddOpaknia = () => {
    setInputOpakowania([...inputOpakowania, { value: '' }]);
  };
  const handleAddCola = () => {
    setInputCola([...inputCola, { value: '' }]);
  };
  const hanldeAddGaz = () => {
    setInputGaz([...inputGaz, { value: '' }]);
  };
  const handleAddOthers = () => {
    setInputOthers([...inputOthers, { value: '' }]);
  };

  const handleChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setInputFields(newInputFields);
  };
  const handleMeetChange = (index, event) => {
    const newInputMeet = [...inputMeet];
    newInputMeet[index].value = event.target.value
    setInputMeet(newInputMeet)
  }

  const handleFudiChange = (index, event) => {
    const newInputFudi = [...inputFudi];
    newInputFudi[index].value = event.target.value
    setInputFudi(newInputFudi)
  }
  const handleWarzywaChange = (index, event) => {
    const newInputWarzya = [...inputWarzya];
    newInputWarzya[index].value = event.target.value
    setInputWarzaya(newInputWarzya)
  }
  const handleCoalChange = (index, event) => {
    const newInputCola = [...inputCola];
    newInputCola[index].value = event.target.value
    setInputCola(newInputCola)
  }
  const handleOpakowaniaChange = (index, event) => {
    const newInputOpakwani = [...inputOpakowania];
    newInputOpakwani[index].value = event.target.value
    setInputOpakowania(newInputOpakwani)
  }
  const handleGazCahnge = (index, event) => {
    const newInputGaz = [...inputGaz];
    newInputGaz[index].value = event.target.value
    setInputGaz(newInputGaz)
  }
  const handleOthersCahnge = (index, event) => {
    const newInputOthers = [...inputOthers];
    newInputOthers[index].value = event.target.value
    setInputOthers(newInputOthers)
  }

  const handleGetValues = () => {
    // Access the values from the state

  };
  const handleMainChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // Here you would typically send the data to a backend for user registration
    // For this example, we'll just log the data to the console

 
    const dcostValue = inputFields.map(field => field.value);
    const meetValue = inputMeet.map(field => field.value);
    const fudiValue = inputFudi.map(field => field.value);
    const warzyaValue = inputWarzya.map(field => field.value);
    const coalValue = inputCola.map(field => field.value);
    const opakowaniaValue = inputOpakowania.map(field => field.value);
    const gazValue = inputGaz.map(field => field.value);
    const othersValue = inputOthers.map(field => field.value);

    const data ={
      time:formData.timing,
      totalSellValue : formData.totalSell,
      totalBankValue :formData.totalBank,
      totalCashValue : formData.totalCash,
      restomaticValue :formData.restomatic,
      glovoValue : formData.glovo,
      phisnafelValue : formData.phisnafel,
      dCost:dcostValue[0],
      dcostCommnet:dcostValue[1],
      dcostCommnet2:dcostValue[2],
      meet:meetValue[0],
      meetComment:meetValue[1],
      meetComment2:meetValue[2],
      fudi:fudiValue[0],
      fuidComment:fudiValue[1],
      fuidComment2:fudiValue[2],
      warzaya:warzyaValue[0],
      warzayaCommnet2:warzyaValue[2],
      warzayaCommnet:warzyaValue[1],
      cola:coalValue[0],
      colaComment:coalValue[1],
      colaComment2:coalValue[2],
      opakowania:opakowaniaValue[0],
      opakowaniaComment:opakowaniaValue[1],
     opakowaniaComment2:opakowaniaValue[2],
      gaz:gazValue[0],
      gazComment:gazValue[1],
      gazComment2:gazValue[2],
      others:othersValue[0],
      otehrsComment:othersValue[1],
      otehrsComment2:othersValue[2],
      email:user?.email,

    }
    console.log(data)
try {
  const response = await fetch('https://delta-j1eh.onrender.com/sheetPost', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  if (response.ok) {
    toast('added successfull')
    alert('you have SuccesFull')
    setFormData({
      totalSell: '',
      totalBank: '',
      totalCash: '',
      restomatic: '',
      glovo: '',
      phisnafel: '',
    })
    setInputFields([{ value: '' }])
    setInputMeet([{ value: '' }])
    setInputFudi([{ value: '' }])
    setInputWarzaya([{ value: '' }])
    setInputWarzaya([{ value: '' }])
    setInputCola([{ value: '' }])
    setInputOpakowania([{ value: '' }])
    setInputGaz([{ value: '' }])
    setInputOthers([{ value: '' }])
  


    } else {
      console.error('Failed to send data to the server.');
  }
} catch (error) {
  console.error('Error:', error);
}



  };
  return (
    <div>
   <h1 className='text-center text-5xl font-bold text-green-500 '>{user?.email== 'shop1@gmail.com'?'jodłowa11a':''|| user?.email === 'shop2@gmail.com'? 'Wojskatczew' :''|| user?.email === 'shop3@gmail.com'?'jasinskiego':''|| user?.email == 'shop4@gmail.com'? 'olsztynek':''|| user?.email == 'shop5@gmail.com'?'Kowale':'' ||user?.email === 'shop6@gmail.com'?'Cieplewo' :''|| user?.email === 'shop7@gmail.com'?'Starogard1':'' || user?.email ==='shop8@gmail.com'?'starogard2':'' || user?.email =='shop9@gmail.com'?'Malbok':'' ||user?.email == 'shop10@gmail.com'?'lidzbark' :''|| user?.email == 'shop11@gmail.com'?'sierakowice':''|| user?.email === 'shop12@gmail.com'?'szczecinek':''||user?.email === 'shop13@gmail.com'?"Tuchola":''}</h1>

      <form class="max-w-full mx-auto relative lg:mx-20 lg:mt-20" onSubmit={handleSubmit}>


        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="date" 
              name="timing"
              value={formData.timing}
              onChange={handleMainChange}
              id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Select Time</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="number" 
              name="totalSell"
              value={formData.totalSell}
              onChange={handleMainChange}
              id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Total Sell</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="number"
              name="totalBank"
              value={formData.totalBank}
              onChange={handleMainChange}
              id="floating_company" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bank</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="number" name="totalCash"
              value={formData.totalCash}
              onChange={handleMainChange} id="floating_company" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cash</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="number" name="restomatic"
              value={formData.restomatic}
              onChange={handleMainChange} id="floating_company" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Restomatic</label>
          </div>
        
          <div class="relative z-0 w-full mb-5 group">
            <input type="number" name="glovo"
              value={formData.glovo}
              onChange={handleMainChange} id="floating_company" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Glovo</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="number" name="phisnafel"
              value={formData.phisnafel}
              onChange={handleMainChange} id="floating_company" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pyszne pl </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">

            {inputFields.map((field, index) => (
              <div key={index}>


                <input
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  value={field.value}
                  onChange={(event) => handleChange(index, event)}
                />
                {/* <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment for Ota </label> */}
              </div>
            ))}
            <button type="button"  className='px-1 btnPlus text-white bg-green-400 rounded' onClick={handleAddField}>
              +
            </button>
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Daily cost </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            {/* meat */}

            {inputMeet.map((field, index) => (
              <div key={index}>


                <input
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  value={field.value}
                  onChange={(event) => handleMeetChange(index, event)}
                />
                {/* <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment for Ota </label> */}
              </div>
            ))}
            <button type="button" className='px-1 btnPlus text-white bg-green-400 rounded' onClick={handleAddMeet}>
              +
            </button>
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Meat</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">

            {inputFudi.map((field, index) => (
              <div key={index}>


                <input
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  value={field.value}
                  onChange={(event) => handleFudiChange(index, event)}
                />
                {/* <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment for Ota </label> */}
              </div>
            ))}
            <button type="button" className='px-1  btnPlus text-white bg-green-400 rounded' onClick={handleAddFudi}>
              +
            </button>
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Fudi </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">

            {inputWarzya.map((field, index) => (
              <div key={index}>


                <input
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  value={field.value}
                  onChange={(event) => handleWarzywaChange(index, event)}
                />
                {/* <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment for Ota </label> */}
              </div>
            ))}
            <button type="button" className='px-1 btnPlus text-white bg-green-400 rounded' onClick={handleAddWarzywa}>
              +
            </button>
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Warzywa  </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">

            {inputCola.map((field, index) => (
              <div key={index}>


                <input
                  class="block py-2.5 px-0  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  value={field.value}
                  onChange={(event) => handleCoalChange(index, event)}
                />
                {/* <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment for Ota </label> */}
              </div>
            ))}
            <button type="button" className='px-1 btnPlus text-white bg-green-400 rounded' onClick={handleAddCola}>
              +
            </button>
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cola </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">

            {inputOpakowania.map((field, index) => (
              <div key={index}>


                <input
                  class="block py-2.5 px-0  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  value={field.value}
                  onChange={(event) => handleOpakowaniaChange(index, event)}
                />
                {/* <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment for Ota </label> */}
              </div>
            ))}
            <button type="button" className=' btnPlus text-white bg-green-400 rounded' onClick={handleAddOpaknia}>
              +
            </button>
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Opakowania  </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">

            {inputGaz.map((field, index) => (
              <div key={index}>


                <input
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  value={field.value}
                  onChange={(event) => handleGazCahnge(index, event)}
                />
                {/* <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment for Ota </label> */}
              </div>
            ))}
            <button type="button" className=' btnPlus text-white bg-green-400 rounded' onClick={hanldeAddGaz}>
              +
            </button>
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gaz  </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">

            {inputOthers.map((field, index) => (
              <div key={index}>


                <input
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  type="text"
                  value={field.value}
                  onChange={(event) => handleOthersCahnge(index, event)}
                />
                {/* <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment for Ota </label> */}
              </div>
            ))}
            <button type="button" className=' btnPlus text-white bg-green-400 rounded' onClick={handleAddOthers}>
              +
            </button>
            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Others </label>
          </div>

          {/* <div className="form-control w-full">
            <input value={datePart} className='dis'
             onSubmit={handleSubmit}
              {...register("time")}
              type="text" />
          </div> */}
        </div>
        <button type="submit" onClick={handleGetValues} style={{background:' rgb(38, 240, 38) '}} class="btn text-white ">Submit</button>
      </form>

    </div>
  )
}

export default MontyShet