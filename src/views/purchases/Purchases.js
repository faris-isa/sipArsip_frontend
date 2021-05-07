import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import axiosConfig from "../../api/axios";

import CardHeader from '../.components/CardHeader';
import TableOffers from './components/ListTable';

const Purchases = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("token"));
  let headers = {
    authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const getPurchases = async () => {
      try {
        await axiosConfig.get('/purchases', headers).then((res) => {
          setData(res.data);
          setLoad(false);
        })
      } catch(error) {

      }
    }
    getPurchases();
  }, [setData]);

  return (
    <>
      <CCard>
          <CardHeader title="Daftar Pembelian"/>
        <CCardBody>
          <TableOffers data={data} load={load}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Purchases;
