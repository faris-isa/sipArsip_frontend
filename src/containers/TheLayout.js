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
  let headers = {
    authorization: `Bearer ${token}`,
  };

  const handleLogOut = () => {
    try {
      axios.post(`/logout`, headers)
      .then(res => {
        sessionStorage.clear();
        window.location = '/';
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
