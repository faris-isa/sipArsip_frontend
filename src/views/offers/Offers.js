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

  //info
  const [isload, setIsload] = useState(true);
  const [statusinfo, setStatusinfo] = useState(false);
  const [info, setInfo] = useState({
    created_at: "",
    updated_at: "",
    purchase: [{
      pivot: {
        created_at: "",
        purchased_at: "",
        done_at: "",
      }
    }]
  });

  //headers
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

  const handlerStat = (id) => {
    setStatusinfo(!statusinfo);
    if (Number.isInteger(id)){
      axiosConfig.get(`/offers/${id}`, config).then((res) => {
        setInfo(res.data);
        setIsload(false);
      })
    } else {
      setIsload(true);
    }
};

  return (
    <>
      <CCard>
          <CardHeader title="Daftar Penawaran" type="tambah" link="/penawaran/tambah"/>
          {/* <CardHeader title="Penawaran"/> */}
        <CCardBody>
          <TableOffers offers={data} load={load} info={handlerStat} statusinfo={statusinfo} loadstatus={isload} infodata={info}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Offers;
