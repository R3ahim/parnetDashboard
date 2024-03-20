import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import TotalSell1 from './ShopSells/TotalSell1';
import Home from './Home';
import TotalExp1 from './ShopEx/ExShop1';
import TotalSell2 from './ShopSells/TotalSell2';
import TotalSell3 from './ShopSells/TotalSell3';
import TotalSell4 from './ShopSells/TotalSell4';
import TotalSell5 from './ShopSells/TotalSell5';
import TotalSell6 from './ShopSells/TotalSell6';
import TotalSell7 from './ShopSells/TotalSell7';
import TotalSell8 from './ShopSells/TotalSell8';
import TotalSell9 from './ShopSells/TotalSell9';
import TotalSell10 from './ShopSells/TotalSell10';
import TotalSell11 from './ShopSells/TotalSell11';
import TotalSell12 from './ShopSells/TotalSell12';
import TotalSell14 from './ShopSells/TotalSell14';
import TotalSell13 from './ShopSells/TotalSell13';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import TotalExp2 from './ShopEx/ExShop2';
import TotalExp3 from './ShopEx/ExShop3';
import TotalExp4 from './ShopEx/ExShop4';
import TotalExp5 from './ShopEx/ExShop5';
import TotalExp6 from './ShopEx/ExShop6';
import TotalExp7 from './ShopEx/ExShop7';
import TotalExp8 from './ShopEx/ExShop8';
import TotalExp9 from './ShopEx/ExShop9';
import TotalExp10 from './ShopEx/ExShop10';
import TotalExp11 from './ShopEx/ExShop11';
import TotalExp12 from './ShopEx/ExShop12';
import TotalExp13 from './ShopEx/ExShop13';
import TotalExp14 from './ShopEx/ExShop14';
import TotalExp15 from './ShopEx/ExShop15';
import Details from './ShopEx/Details';
import Compnay from './Dashboard/Company';
import CompnayShow from './Dashboard/CompanyShow';
import AllSells from './ShopSells/AllSells';
import Testing from './Testing/Testing';
import Compnay2 from './Dashboard/Company2';
import Compnay3 from './Dashboard/Company3';
import CompnayShow2 from './Dashboard/CompanyShow2';
import CompnayShow3 from './Dashboard/CompanyShow3';
import FouroFour from './FouroFour';
import Password from './Login/Password';
import Attend1 from './Attendence/Attend1';
import Attend2 from './Attendence/Attend2';
import Attend3 from './Attendence/Attend3';
import Attend4 from './Attendence/Attend4';
import Attend5 from './Attendence/Attend5';
import ManageEmplye from './Attendence/ManageEmplye';
import Attend6 from './Attendence/Attend6';
import Attend7 from './Attendence/Attend7';
import Attend9 from './Attendence/Attend9';
import Attend10 from './Attendence/Attend10';
import Attend11 from './Attendence/Attend11';
import Attend12 from './Attendence/Attend12';
import Attend13 from './Attendence/Attend13';
import Attend14 from './Attendence/Attend14';
import Attend15 from './Attendence/Attend15';
import Attend8 from './Attendence/Attend8';

function App() {
  return (
    <div>
   <Routes>

<Route path='*' element={<RequireAuth><FouroFour/></RequireAuth>}/>
<Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
<Route path='/testing' element={<RequireAuth><Testing/></RequireAuth>}/>
<Route path='/allSells' element={<RequireAuth><AllSells/></RequireAuth>}/>

   <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
   <Route index element={<CompnayShow/>}></Route>
   <Route path='/dashboard/companyShow' element={<CompnayShow/>}/>
   <Route path='/dashboard/pass' element={<RequireAuth><Password/></RequireAuth>}/>

   <Route path='/dashboard/companyShow2' element={<CompnayShow2/>}/>
   <Route path='/dashboard/companyShow3' element={<CompnayShow3/>}/>
   <Route path='/dashboard/shop1/totalsell' element={<TotalSell1/>}/>
   <Route path='/dashboard/shop2/totalsell' element={<TotalSell2/>}/>
   <Route path='/dashboard/shop3/totalsell' element={<TotalSell3/>}/>
   <Route path='/dashboard/shop4/totalsell' element={<TotalSell4/>}/>
   <Route path='/dashboard/shop5/totalsell' element={<TotalSell5/>}/>
   <Route path='/dashboard/shop6/totalsell' element={<TotalSell6/>}/>
   <Route path='/dashboard/shop7/totalsell' element={<TotalSell7/>}/>
   <Route path='/dashboard/shop8/totalsell' element={<TotalSell8/>}/>
   <Route path='/dashboard/shop9/totalsell' element={<TotalSell9/>}/>
   <Route path='/dashboard/shop10/totalsell' element={<TotalSell10/>}/>
   <Route path='/dashboard/shop11/totalsell' element={<TotalSell11/>}/>
   <Route path='/dashboard/shop12/totalsell' element={<TotalSell12/>}/>
   <Route path='/dashboard/shop13/totalsell' element={<TotalSell13/>}/>
   <Route path='/dashboard/shop14/totalsell' element={<TotalSell4/>}/>
   <Route path='/dashboard/shop15/totalsell' element={<TotalSell5/>}/>

{/* total Expense */}
   <Route path='/dashboard/shop1/expense' element={<TotalExp1/>}/>
   <Route path='/dashboard/shop2/expense' element={<TotalExp2/>}/>
   <Route path='/dashboard/shop3/expense' element={<TotalExp3/>}/>
   <Route path='/dashboard/shop4/expense' element={<TotalExp4/>}/>
   <Route path='/dashboard/shop5/expense' element={<TotalExp5/>}/>
   <Route path='/dashboard/shop6/expense' element={<TotalExp6/>}/>
   <Route path='/dashboard/shop7/expense' element={<TotalExp7/>}/>
   <Route path='/dashboard/shop8/expense' element={<TotalExp8/>}/>
   <Route path='/dashboard/shop9/expense' element={<TotalExp9/>}/>
   <Route path='/dashboard/shop10/expense' element={<TotalExp10/>}/>
   <Route path='/dashboard/shop11/expense' element={<TotalExp11/>}/>
   <Route path='/dashboard/shop12/expense' element={<TotalExp12/>}/>
   <Route path='/dashboard/shop13/expense' element={<TotalExp13/>}/>
   <Route path='/dashboard/shop14/expense' element={<TotalExp14/>}/>
   <Route path='/dashboard/shop15/expense' element={<TotalExp15/>}/>

   <Route path="/dashboard/shop1/:id" element={<Details/>}></Route>
   <Route path='/dashboard/company' element={<RequireAuth><Compnay/></RequireAuth>}/>
   <Route path='/dashboard/company2' element={<RequireAuth><Compnay2/></RequireAuth>}/>
   <Route path='/dashboard/company3' element={<RequireAuth><Compnay3/></RequireAuth>}/>

{/* attendence will here */}

<Route path='/dashboard/attend1' element={<Attend1/>}/>
<Route path='/dashboard/attend2' element={<Attend2/>}/>
<Route path='/dashboard/attend3' element={<Attend3/>}/>
<Route path='/dashboard/attend4' element={<Attend4/>}/>
<Route path='/dashboard/attend5' element={<Attend5/>}/>
<Route path='/dashboard/attend6' element={<Attend6/>}/>
<Route path='/dashboard/attend87' element={<Attend7/>}/>
<Route path='/dashboard/attend8' element={<Attend8/>}/>

<Route path='/dashboard/attend9' element={<Attend9/>}/>
<Route path='/dashboard/attend10' element={<Attend10/>}/>
<Route path='/dashboard/attend11' element={<Attend11/>}/>
<Route path='/dashboard/attend12' element={<Attend12/>}/>
<Route path='/dashboard/attend13' element={<Attend13/>}/>
<Route path='/dashboard/attend14' element={<Attend14/>}/>
<Route path='/dashboard/attend15' element={<Attend15/>}/>





<Route path='/dashboard/employee' element={<ManageEmplye/>}/>


        </Route>
   </Routes>
    </div>
  );
}

export default App;
