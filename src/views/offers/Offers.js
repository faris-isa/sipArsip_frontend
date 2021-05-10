import React, { useState, useEffect } from 'react';
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import axiosConfig from "../../api/axios";

import CardHeader from '../.components/CardHeader';
import TableOffers from './components/TableOffers';

const Offers = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("token"));
  let config = {
    headers : { Authorization: `Bearer ${token}` }
  };

    useEffect(() => {
      const getOffers = async () => {
        try {
          await axiosConfig.get('/offers', config).then((res) => {
            setData(res.data);
            setLoad(false);
          })
        } catch(error) {

        }
      }
    getOffers();
  }, [setData]);

  return (
    <>
      <CCard>
          <CardHeader title="Daftar Penawaran" type="tambah" link="/penawaran/tambah"/>
          {/* <CardHeader title="Penawaran"/> */}
        <CCardBody>
          <TableOffers offers={data} load={load}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Offers;
