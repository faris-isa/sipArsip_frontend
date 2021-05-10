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

import TablePurch from './components/RegTable';
import Header from '../.components/CardHeader';

const ListRegPurchases = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("token"));
  let config = {
    headers : { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    const getPur = async () => {
      try {
        await axiosConfig.get('/purchases', config).then((res) => {
          const temp = res.data;
          const belum = temp.reduce((filter, value) => {
            if (value.status === "belum") {
              const filtered = value;
              filter.push(filtered);
            }
            return filter;
          }, []);
          setData(belum);
          // setData(temp);
          setLoad(false);
        })
      } catch(error) {

      }
    }

    getPur();
  }, [setData]);

  return (
    <>
      <CCard>
          <Header title="Daftar Pembelian"/>
        <CCardBody>
          <TablePurch data={data} load={load} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default ListRegPurchases;
