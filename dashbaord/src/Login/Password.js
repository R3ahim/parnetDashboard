import React from 'react'

function Password() {
    const data = [
        { account: "Shop1@gmail.com", logPass: "124568", user: "jodłowa11a",pass:"shop1" },
        { account: "Shop2@gmail.com", logPass: "156468", user: "wojskatczew",pass:"nerek38" },
        { account: "Shop3@gmail.com", logPass: "126485", user: "jasinskiego",pass:"nerek38" },
        { account: "Shop4@gmail.com", logPass: "156686", user: "olsztynek",pass:"shop4" },
        { account: "Shop5@gmail.com", logPass: "144485", user: "kowale",pass:"shop5" },
        { account: "Shop6@gmail.com", logPass: "169946", user: "cieplewo",pass:"21shop" },
        { account: "Shop7@gmail.com", logPass: "200512", user: "stargard1",pass:"rynek38" },
        { account: "Shop8@gmail.com", logPass: "200885", user: "starogard2",pass:"droga24" },
        { account: "Shop9@gmail.com", logPass: "200446", user: "malbork",pass:"chopina22" },
        { account: "Shop10@gmail.com", logPass: "198874", user: "lidzbark",pass:"hallera2" },
        { account: "Shop11@gmail.com", logPass: "785548", user: "sierakowice",pass:"kartuska4" },
        { account: "Shop12@gmail.com", logPass: "135526", user: "szczecinek",pass:"dk2022" },
        { account: "Shop13@gmail.com", logPass: "148816", user: "tuchola",pass:"may2022" },
        { account: "Shop14@gmail.com", logPass: "176615", user: "shop14",pass:"shop14" },
        { account: "Shop15gmail.com", logPass: "468843", user: "shop15",pass:"shop15" },
       
      ];
  return (
    <div>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Shop Name</th>
        <th>password</th>
        <th>Login name</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {data.map((sell, index ) =>
        <tr>
          <td>{index}</td> 
          <td>{sell.user}</td> 
          <td>{sell.pass}</td> 
          <td>{sell.account}</td>
          <td>{sell.logPass}</td>  



        </tr>
        
      )}


      
  
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Password