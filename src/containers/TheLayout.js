import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index';
import axios from '../../src/api/axios';

const TheLayout = () => {
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const token = JSON.parse(sessionStorage.getItem("token"));
  let config = {
    headers : { Authorization: `Bearer ${token}` }
  };

  const handleLogOut = () => {
    try {
      axios.get(`/logout`, config)
      .then(res => {
        if (res.data.status === 200){
          sessionStorage.clear();
          window.location = '/';
          sessionStorage.setItem("isLoggedIn", false);
        }
      })
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader user={user} logout={handleLogOut}/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
