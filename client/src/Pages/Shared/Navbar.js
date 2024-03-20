import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import './Navbar.css'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  const handleSignOut = () => {
    signOut(auth);
};

  const logout = () => {
    signOut(auth);
};

    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/sheet">MontlySheet</Link></li>
    <li><Link to="/totalSell">Total Sell</Link></li>
    <li><Link to="/dashboard"> Dashborad</Link></li>
    <li><Link to="/businessSummery">Profile</Link></li>
    <li><Link to="/login ">login</Link></li>
 

    </>
    
    return (
        <div class=" ">
        
        <div className="navbar ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><div className='flex items-center justify-center'>        <img src="https://restaumatic-production.imgix.net/uploads/restaurants/275281/logo/1689151634.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=500&w=500" class="h-10" alt="Flowbite Logo" />

<Link className='hidderna' to={'/'}>DeltaKabab </Link></div></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li>
  <Link to={'/addsells'}>Add Sells</Link>
  <Link to={'/attend1'}>Attendence</Link>
</li>   
<li>
  <Link to={'/order'}>Order Now</Link>
</li>   <li>
{
                                user ?
                                    <button title='Log Out' className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>{user?.email== 'shop1@gmail.com'?'jodłowa11a':''|| user?.email === 'shop2@gmail.com'? 'Wojskatczew' :''|| user?.email === 'shop3@gmail.com'?'jasinskiego':''|| user?.email == 'shop4@gmail.com'? 'olsztynek':''|| user?.email == 'shop5@gmail.com'?'Kowale':'' ||user?.email === 'shop6@gmail.com'?'Cieplewo' :''|| user?.email === 'shop7@gmail.com'?'Starogard1':'' || user?.email ==='shop8@gmail.com'?'starogard2':'' || user?.email =='shop9@gmail.com'?'Malbok':'' ||user?.email == 'shop10@gmail.com'?'lidzbark' :''|| user?.email == 'shop11@gmail.com'?'sierakowice':''|| user?.email === 'shop12@gmail.com'?'szczecinek':''||user?.email === 'shop13@gmail.com'?"Tuchola":''}</button>
                                :
                                <Link to="/login" className='m-2'>
                                Login
                            </Link>}
      </li>
    </ul>
  </div>
</div>

      </div>
    );
};

export default Navbar;