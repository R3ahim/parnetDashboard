import React from 'react'
import { signOut } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import './Navbar.css'

function Navbar2() {
  const [user] = useAuthState(auth)
  const handleSignOut = () => {
    signOut(auth);
};
  return (
    <div>
  <div className="navbar bg-[#1f2b33] text-white">
  <div className="navbar-start ">
    <div className="dropdown bar">
      <div tabIndex={0} role="button" className="btn hidderna btn-ghost lg:hidden  bar">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
       {/* for mobile devicd */}
       <div className="dropdown dropdown-bottom  ">
  <div tabIndex={0} role="button" className=" m-1 md:hidden ">All Shops</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#1f2b33] rounded-box w-52">

  <Link to={'/shop1/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">jodłowa11a</a>
                  </li></Link>
                  <Link to={'/shop2/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Wojskatczew</a>
                  </li></Link>
                  <Link to={'/shop3/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">jasinskiego</a>
                  </li></Link>
                  <Link to={'/shop4/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">olsztynek</a>
                  </li></Link>
                  <Link to={'/shop5/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Kowale</a>
                  </li></Link>
                  <Link to={'/shop6/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Cieplewo</a>
                  </li></Link>
                  <Link to={'/shop7/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Starogard 1</a>
                  </li></Link>
                  <Link to={'/shop8/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Starogard 2</a>
                  </li></Link>
                  <Link to={'/shop9/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Malbork  </a>
                  </li></Link>
                  <Link to={'/shop10/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Lidzbark  </a>
                  </li></Link>
                  <Link to={'/shop11/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Sierakowice </a>
                  </li></Link>
                  <Link to={'/shop12/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Szczecinek</a>
                  </li></Link>
                  <Link to={'/shop13/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Tuchola</a>
                  </li></Link>
                  <Link to={'/shop14/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Shop-14</a>
                  </li></Link>
                  <Link to={'/shop15/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Shop-15</a>
                  </li></Link>
                  
  
 
  
  </ul>
</div>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to={'/'}> <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://restaumatic-production.imgix.net/uploads/restaurants/275281/logo/1689151634.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=500&w=500" class="h-10" alt="Flowbite Logo" />
        <span class="self-center text-2xl hidderna  font-semibold whitespace-nowrap dark:text-white">Delta Kabab</span>

    </a></Link>  </div>
 

<div className="navbar-end">
<div className="dropdown dropdown-bottom navSmall ">
  <div tabIndex={0} role="button" className=" m-1 "><Link to='/addsells'>Add Sells</Link> </div>
  {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#1f2b33] rounded-box w-52">

  <Link to={'/shop1/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 nlver dark:hover:bg-gray-600 dark:hover:text-white">jodłowa11a</a>
                  </li></Link>
                  <Link to={'/shop2/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833 dark:hover:bg-gray-600 dark:hover:text-white">Wojskatczew</a>
                  </li></Link>
                  <Link to={'/shop3/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">jasinskiego</a>
                  </li></Link>
                  <Link to={'/shop4/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">olsztynek</a>
                  </li></Link>
                  <Link to={'/shop5/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Kowale</a>
                  </li></Link>
                  <Link to={'/shop6/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Cieplewo</a>
                  </li></Link>
                  <Link to={'/shop7/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Starogard 1</a>
                  </li></Link>
                  <Link to={'/shop8/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Starogard 2</a>
                  </li></Link>
                  <Link to={'/shop9/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Malbork  </a>
                  </li></Link>
                  <Link to={'/shop10/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Lidzbark  </a>
                  </li></Link>
                  <Link to={'/shop11/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Sierakowice </a>
                  </li></Link>
                  <Link to={'/shop12/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Szczecinek</a>
                  </li></Link>
                  <Link to={'/shop13/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Tuchola</a>
                  </li></Link>
                  <Link to={'/shop14/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Shop-14</a>
                  </li></Link>
                  <Link to={'/shop15/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg[#1f2833] dark:hover:bg-gray-600 dark:hover:text-white">Shop-15</a>
                  </li></Link>
                  
  
 
  
  </ul> */}
</div>
<li>
  <Link to={'/attend1'}>Attendence</Link>
</li>
<li>
  <Link to={'/order'}>Order Now</Link>
</li>

  {/* ul */}
{
                                user ?
                                    <button title='Log Out' className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>{user?.email== 'shop1@gmail.com'?'jodłowa11a':''|| user?.email === 'shop2@gmail.com'? 'Wojskatczew' :''|| user?.email === 'shop3@gmail.com'?'jasinskiego':''|| user?.email == 'shop4@gmail.com'? 'olsztynek':''|| user?.email == 'shop5@gmail.com'?'Kowale':'' ||user?.email === 'shop6@gmail.com'?'Cieplewo' :''|| user?.email === 'shop7@gmail.com'?'Starogard1':'' || user?.email ==='shop8@gmail.com'?'starogard2':'' || user?.email =='shop9@gmail.com'?'Malbok':'' ||user?.email == 'shop10@gmail.com'?'lidzbark' :''|| user?.email == 'shop11@gmail.com'?'sierakowice':''|| user?.email === 'shop12@gmail.com'?'szczecinek':''||user?.email === 'shop13@gmail.com'?"Tuchola":''}</button>
                                :
                                <Link to="/login" className='m-2'>
                                Login
                            </Link>}
                          
  </div>
</div>


    </div>
  )
}

export default Navbar2