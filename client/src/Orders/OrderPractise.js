import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import './OrderForm.css'

function OrderPractise() {
    const [user] = useAuthState(auth)
    const [dkurchak, setdkurchak] = useState(0);

    const [kurchak, setkurchak] = useState(0);
    const [dBria, setDBria] = useState(0);
        // start 
   const [bria,setBria] = useState(0)
    const [bulka,setBulka] = useState(0);
    const [frytura,setFrytura] = useState(0);
    const [pita,setpita] = useState(0);
    const [pita2,setPita2] = useState(0);
    const [tortila,setTortila] = useState(0);
    const [tortila2,setTortila2] = useState(0);
    const [majo,setMajo] = useState(0);
    const [sambal,setSambal] = useState(0);
    const [folia,setFolia] = useState(0);

// option for selectiong
const [selectedValue, setSelectedValue] = useState('');
const [seKurzak , setseKurzak] = useState('');
const [seDBarani , setseDBarani] = useState('');
const [seBarani , setseBarani] = useState('');
const [comment,setComment] = useState('')
const [timeer,setTimeer] = useState('')




    const handleDecrease = () => {
      if (dkurchak > 0) {
        setdkurchak(dkurchak - 1);
      }
    };
  
    const handleIncrease = () => {
      setdkurchak(dkurchak + 1);
    };

    // kurchak
    
    const hanldeKurchakDec = () => {
        if (kurchak > 0) {
            setkurchak(kurchak - 1);
        }
      };
    
      const hanldeKurchakIn = () => {
        setkurchak(kurchak + 1);
      };
    const hanldeDBinc =()=>{
        setDBria(dBria + 1)
    }
    const  handleddDeac=()=>{
       if(dBria >0){
        setDBria(dBria - 1)
       }
    }
    // briana added
    const handleBdec=()=>{
        if(bria >0){
            setBria(bria -1)
        }
    }
 
    const handleBinc = () => {

        setBria(bria + 1)
      };
    //   bulka Added
    const  handleBulkaDec=()=>{
        if(bulka >0){
            setBulka(bulka -1)
        }
    }
    const hankdeBulkaInc =()=>{
        setBulka(bulka + 1)
    }
    // frytura
    const handleFryDec =()=>{
        if(frytura >0){
            setFrytura(frytura -1)
        }    }
        const handleFryInc =()=>{
            setFrytura(frytura + 1)
        }
    // pita
    const handlePitadec =()=>{
        if(pita >0){
            setpita(pita -1)
        }
    }
    const handlePitaInc = ()=>{
        setpita(pita +1 )
    }
    // pita 2
    const handlePitaDec2 =()=>{
        if(pita2 >0){
            setPita2(pita2 -1)
        }
    }
    const handlePitaInc2 = ()=>{
        setPita2(pita2 +1 )
    }
    // tortila part
    const handleTortilaDec = ()=>{
        if(tortila >0){
            setTortila(tortila - 1)
        }
    }
    const handleTortilaInc =()=>{
        setTortila(tortila +1)
    }
    const handleTortilaDec2 = ()=>{
        if(tortila >0){
            setTortila2(tortila2 - 1)
        }
    }
    const handleTortilaInc2 =()=>{
        setTortila2(tortila2 +1)
    }
    // majod
    const handleMajDec =()=>{
        if(majo >0){
            setMajo(majo -1)
        }
    }
    const handleMajInc = ()=>{
        setMajo(majo +1)
    }
    // smabal
    const handleSameDec = ()=>{
        if(sambal >0 ){
            setSambal(sambal -1)
        }
    }
    const handleSamInc =()=>{
        setSambal(sambal +1)
    }
    // folio
    const handleFoliaDec =()=>{
        if(folia >0){
            setFolia(folia -1)
        }
    }
    const handleFoliaInc = ()=>{
        setFolia(folia +1)
    }


    //  will se slectecd option
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
     
      };
      const handleCaKur =(event)=>{
        setseKurzak(event.target.value)
    };
      const handleCaBrani =(event)=>{
        setseBarani(event.target.value)
    };
    const handleCaDbarani =(event)=>{
        setseDBarani(event.target.value)
    }
    const handleTimer =(event)=>{
      setTimeer(event.target.value)
  }
    // submiting all data to server
   const handleSubmit =async()=>{
    const data ={
        time:timeer,
        dKurzak:selectedValue,
        dKurzakQ:dkurchak,
        kurzak:seKurzak,
        kurzakQ:kurchak,
        dBarani:seDBarani,
        DbaraniQ:dBria,
        barani:seBarani,
        baraniQ:bria,
        bulkaQ:bulka,
        frytura:frytura,
        pita1:pita,
        pita2:pita2,
        tortila1:tortila,
        tortila2:tortila2,
        majo:majo,
        sambal:sambal,
        folia:folia,
        comment:comment,
        email:user?.email,
        do:'no',
        



    }
    try {
        const response = await fetch('https://deltaorders.onrender.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
      
        if (response.ok) {
          // alert('you have SuccesFull')
          alert('okey submited')
 
      
          // setInputOthers([{ value: '' }])
        
      
      
          } else {
            console.error('Failed to send data to the server.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      
   }

    return (
        <div>
        <h1 className='text-center text-3xl mb-6 font-bold text-green-500 '> order for:{user?.email== 'shop1@gmail.com'?'jodłowa11a':''|| user?.email === 'shop2@gmail.com'? 'Wojskatczew' :''|| user?.email === 'shop3@gmail.com'?'jasinskiego':''|| user?.email == 'shop4@gmail.com'? 'olsztynek':''|| user?.email == 'shop5@gmail.com'?'Kowale':'' ||user?.email === 'shop6@gmail.com'?'Cieplewo' :''|| user?.email === 'shop7@gmail.com'?'Starogard1':'' || user?.email ==='shop8@gmail.com'?'starogard2':'' || user?.email =='shop9@gmail.com'?'Malbok':'' ||user?.email == 'shop10@gmail.com'?'lidzbark' :''|| user?.email == 'shop11@gmail.com'?'sierakowice':''|| user?.email === 'shop12@gmail.com'?'szczecinek':''||user?.email === 'shop13@gmail.com'?"Tuchola":''|| user?.email === ''?'login first':<Link to='/login'>Login First</Link>}</h1>
     
           <div class="max-w-full mx-auto relative lg:mx-20 lg:mt-20" >
     
           <div className="overflow-x-auto mx-auto">
        <table className="table table-xs md:w-[900px]">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Type</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
    
        <td>Delta Kurczak </td>
        <td><select className="select select-bordered w-full max-w-xs " value={selectedValue} onChange={handleChange}>
  <option  selected>Salect how much</option>
  <option>15 kg</option>
  <option>20 kg</option>
  <option>25 kg</option>
  <option>30 kg</option>
  <option>40 kg</option>

</select></td>
        <td>   <div class="quantity-buttons">
                      <button onClick={handleDecrease}>-</button>
                        <input class="quant input" type='text' value={dkurchak}/>
                        <button onClick={handleIncrease}>+</button>
                    </div></td>
      </tr>
      <tr>
    
        <td> Kurczak </td>
        <td><select className="select select-bordered w-full max-w-xs " value={seKurzak} onChange={handleCaKur}>
  <option  selected>Salect how much</option>
  <option>15 kg</option>
  <option>20 kg</option>
  <option>25 kg</option>
  <option>30 kg</option>
  <option>40 kg</option>

</select></td>
        <td>   <div class="quantity-buttons">
        <button onClick={hanldeKurchakDec}>-</button> 
        <input class="quant input" type='text' value={kurchak}/>
        <button onClick={hanldeKurchakIn}>+</button>              
              </div></td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
    
      <td>Delta Baranina  </td>
        <td><select className="select select-bordered w-full max-w-xs " value={seDBarani} onChange={handleCaDbarani} >
  <option  selected>Salect for Baranina</option>
  <option>15 kg</option>
  <option>20 kg</option>
  <option>25 kg</option>
 
</select></td>
        <td>   <div class="quantity-buttons">
                   <button onClick={handleddDeac}>-</button>
                               <input class="quant input" type='text' value={dBria}/>
                        <button onClick={hanldeDBinc}>+</button>
                    </div></td>
      </tr>
      <tr className="hover">
    
      <td> Baranina  </td>
        <td><select className="select select-bordered w-full max-w-xs " value={seBarani} onChange={handleCaBrani}>
  <option  selected>Salect for Baranina</option>
  <option>15 kg</option>
  <option>20 kg</option>
  <option>25 kg</option>
 
</select></td>
        <td>   <div class="quantity-buttons">
        <button onClick={handleBdec}>-</button>
                               <input class="quant input" type='text' value={bria}/>
                        <button onClick={handleBinc}>+</button>
                    </div></td>
      </tr>
      {/* row 3 */}
   
      <tr>
      <td>Bulka  </td>
        <td></td>
        <td>   <div class="quantity-buttons">
                        <button onClick={handleBulkaDec}>-</button>
                        <input class="quant input" type='text' value={bulka}/>
                        <button onClick={hankdeBulkaInc}>+</button>
                    </div></td>
                    </tr>
      <tr>
      <td>Frytura oil  </td>
        <td></td>
        <td>   <div class="quantity-buttons">
                        <button onClick={handleFryDec}>-</button>
                        <input class="quant input" type="number" value={frytura}/>
                        <button onClick={handleFryInc}>+</button>
                    </div></td>
                    </tr>
                    <tr>
       
       <td>Pita 25cm </td>
         <td></td>
         <td>   <div class="quantity-buttons">
                         <button onClick={handlePitadec}>-</button>
                         <input class="quant input" type="number" value={pita}/>
                         <button onClick={handlePitaInc}>+</button>
                     </div></td>
       </tr>
                    <tr>
       
       <td>Pita 30cm </td>
         <td></td>
         <td>   <div class="quantity-buttons">
                         <button onClick={handlePitaDec2}>-</button>
                         <input class="quant input" type="number" value={pita2}/>
                         <button onClick={handlePitaInc2}>+</button>
                     </div></td>
       </tr>
      <tr>

      <td>Tortilla 30cm  </td>
        <td></td>
        <td>   <div class="quantity-buttons">
                        <button onClick={handleTortilaDec}>-</button>
                        <input class="quant input" type="number"value={tortila}/>
                        <button onClick={handleTortilaInc}>+</button>
                    </div></td>
                    </tr>
      <tr>

      <td>Tortilla 35cm  </td>
        <td></td>
        <td>   <div class="quantity-buttons">
                        <button onClick={handleTortilaDec2}>-</button>
                        <input class="quant input" type="number" value={tortila2}/>
                        <button onClick={handleTortilaInc2}>+</button>
                    </div></td>
                    </tr>
      <tr>
      <td>Majonez 76%   </td>
        <td></td>
        <td>   <div class="quantity-buttons">
                        <button onClick={handleMajDec}>-</button>
                        <input class="quant input" type="number"  value={majo}/>
                        <button onClick={handleMajInc}>+</button>
                    </div></td>
                    </tr>
      <tr>
      <td>Sambal   </td>
        <td></td>
        <td>   <div class="quantity-buttons">
        <button onClick={handleSameDec}>-</button>
                        <input class="quant input" type="number" value={sambal}/>
                        <button onClick={handleSamInc}>+</button>
                    </div></td>
                    </tr>
      <tr>
      <td>Folia    </td>
        <td></td>
        <td>   <div class="quantity-buttons">
                        <button onClick={handleFoliaDec}>-</button>
                        <input class="quant input" type="number" value={folia}/>
                        <button onClick={handleFoliaInc}>+</button>
                    </div></td>
                    </tr>
      <tr>
      <td> comment  </td>
        <td><input type="text" placeholder="Type here" onChange={(e) => setComment(e.target.value)}className="input input-bordered input-primary w-full max-w-xs" /></td>
        <td> <input
          type="date"
          id="month"
          className='btn'
          value={timeer}
          onChange={handleTimer}

        
        />  </td>
                    </tr>
    </tbody>
  </table>
  {/* <div>
 
      <label> comment  </label>
        <input type="text" placeholder="Type here" onChange={(e) => setComment(e.target.value)}className="input input-bordered input-primary w-full max-w-xs" />
      <div className="inputs">
      <input type="date" placeholder="Type here" onChange={(e) => setComment(e.target.value)}className="input input-bordered input-primary w-full max-w-xs" />

      </div>
  </div> */}
  <button onClick={handleSubmit} className="btn btn-accent">Submit</button>
      </div>
    </div>
    </div>
    );
  }
  

export default OrderPractise