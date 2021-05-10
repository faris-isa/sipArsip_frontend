import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import axiosConfig from "../../api/axios";

import CardHeader from '../.components/CardHeader';
import Table from './component/Table';

const Serials = () => {
  const [serials, setSerials] = useState();
  const [load, setLoad] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("token"));
  let config = {
    headers : { Authorization: `Bearer ${token}` }
  };


  useEffect(() => {
    const getSerials = async () => {
      try {
        await axiosConfig.get('/serials', config)
        .then((res) => {
          setSerials(res.data)
          setLoad(false);
        })

      } catch(error) {

      }
    }

    getSerials();

  }, [setSerials]);

  return (
    <>
        <CCard>
          <CardHeader title="Serial Number"/>
          <CCardBody>
            <Table laod={load} serials={serials}/>
          </CCardBody>
        </CCard>
    </>
  )
}

export default Serials;
