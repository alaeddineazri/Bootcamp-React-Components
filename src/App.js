import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import Email from "./Component/Profile/Email";


import "./App.css";
const App = () => (

<div className="profil">
  <div>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      <Email/>
  </div>
</div>

);
export default App;