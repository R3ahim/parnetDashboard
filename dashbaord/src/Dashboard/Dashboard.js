import React from 'react'
import './Dashboard.css'
import { Link, Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div style={{color:'white !important'}}>
        <div className="drawer lg:drawer-open md:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Page content here */}
    <div className="w-full navbar ">
      <div className="flex-none lg:hidden md:hidden">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
  </div>
  <div className='flex gap-2'>
   <Link to={'/dashboard/company'}><button className='btn btn-xs btn-accent'>Company</button></Link>
   <Link to={'/dashboard/company2'}><button className='btn btn-xs btn-accent'>reklama </button></Link>
   <Link to={'/dashboard/company3'}><button className='btn btn-xs btn-accent'>biuro</button></Link>
  </div>
  </div>
    <Outlet/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#1f2b33] 
 text-white">
      {/* Sidebar content here */}
     <Link to={'/dashboard/companyShow'}> <li><a>Company</a></li> </Link>
     <Link to={'/dashboard/companyShow2'}> <li><a>Reclema</a></li> </Link>
     <Link to={'/dashboard/companyShow3'}> <li><a>Buiro</a></li> </Link>
      <li><div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className=" m-1">All Shops</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#1f2b33] 
 rounded-box w-52">
    <li> <div class="dropdowns">
      <button class="dropdowns-button">jodłowa11a</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop1/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop1/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">wojskatczew</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop2/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop2/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">jasinskiego </button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop3/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop3/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">olsztynek</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop4/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop4/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">kowale</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop5/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop5/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">cieplewo</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop6/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop6/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">stargard 1</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop7/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop7/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">starogard 2</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop8/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop8/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">malbork</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop9/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop9/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">lidzbark </button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop10/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop10/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">sierakowice</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop11/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop11/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">szczecinek </button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop12/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop12/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">tuchola</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop13/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop13/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">Shop14</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop14/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop14/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
    <li> <div class="dropdowns">
      <button class="dropdowns-button">Shop15</button>
      <div class="dropdowns-content">
      <Link to={'/dashboard/shop15/totalsell'} className='a'>Sells</Link>
      <Link to={'/dashboard/shop15/expense'} className='a'>Expense</Link>
     
      </div>
    </div>
    </li>
  </ul>
</div></li>
<Link to={'/dashboard/pass'} ><li><a href="">Accounts</a></li> </Link>

<li><div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className=" m-1">Attendence</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#1f2b33] 
 rounded-box w-52">
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend1'} class="dropdowns-button">jodłowa11a</Link>
    
    </div>
    </li>
    <li> <div class="dropdowns">
    <Link to={'/dashboard/attend2'} class="dropdowns-button">wojskatczew</Link>
   
    </div>
    </li>
    <li> <div class="dropdowns">
    <Link to={'/dashboard/attend3'} class="dropdowns-button">jasinskiego</Link>
    
    </div>
    </li>
    <li> <div class="dropdowns">
    <Link to={'/dashboard/attend4'} class="dropdowns-button">olsztynek</Link>
    
    </div>
    </li>
    <li> <div class="dropdowns">
    <Link to={'/dashboard/attend5'} class="dropdowns-button">kowale</Link>
      
    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend6'} class="dropdowns-button">cieplewo</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend7'} class="dropdowns-button">stargard 1</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend8'} class="dropdowns-button">stargard 2</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend9'} class="dropdowns-button">malbork</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend10'} class="dropdowns-button">lidzbark</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend11'} class="dropdowns-button">sierakowice</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend12'} class="dropdowns-button">szczecinek</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend13'} class="dropdowns-button">Tuchola</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend14'} class="dropdowns-button">Shop14</Link>

    </div>
    </li>
    <li> <div class="dropdowns">
      <Link to={'/dashboard/attend15'} class="dropdowns-button">Shop15</Link>

    </div>
    </li>
  </ul>
</div></li>
<Link to={'/dashboard/employee'}><button className=''>Mange Employee</button></Link>

    </ul>
  
  </div>
</div>
    </div>
  )
}

export default Dashboard