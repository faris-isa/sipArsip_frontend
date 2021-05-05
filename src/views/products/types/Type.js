import React, { useState, useEffect } from 'react';

import axiosConfig from "../../../api/axios";

import { CCard, CCardBody } from '@coreui/react';

import Header from '../../.components/CardHeader';

import Loadwait from '../../.components/Loading';


const Type = ({match}) => {

  const id = match.params.id;
  const [isload, setIsload] = useState(true)
  const [ type, setType ] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));


  useEffect(() => {
    let headers = {
      authorization: `Bearer ${token}`,
    };
    const getType = async () => {
      try {
        await axiosConfig.get(`/types/${id}`, headers).then(res => {
          setType(res.data);
          setIsload(false);
        })
      } catch(error) {

      }
    }

    getType();
  }, [setType]);

  const details = type ? Object.entries(type) : <></>

  return (
    <>
      <CCard>
        <Header title="Detail Tipe Produk" type="kembali" link="/produk/tipe"/>
    { (isload === true) ? <Loadwait /> :
        <CCardBody>
            {
              details.map(([key, value], index) => {
                return (
                  <tr key={index.toString()}>
                    <td>{`${key}:`}</td>
                    <td><strong>{value}</strong></td>
                  </tr>
                )
              })
            }
        </CCardBody>
    }
      </CCard>
    </>
  )
}

export default Type;
