import React, { useState, useEffect } from 'react';

import axiosConfig from "../../../api/axios";

import { CCard, CCardBody } from '@coreui/react';

import Header from '../../.components/CardHeader';

import Loadwait from '../../.components/Loading';
import { cilLocationPin } from '@coreui/icons';


const Location = ({match}) => {

  const id = match.params.id;
  const [isload, setIsload] = useState(true)
  const [ data, setData ] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));


  useEffect(() => {
    let headers = {
      authorization: `Bearer ${token}`,
    };
    const getType = async () => {
      try {
        await axiosConfig.get(`/locations/${id}`, headers).then(res => {
          setData(res.data);
          setIsload(false);
        })
      } catch(error) {

      }
    }

    getType();
  }, [setData]);

  const details = data ? Object.entries(data) : <></>

  return (
    <>
      <CCard>
        <Header title="Detail Lokasi Pembelian" type="kembali" link="/pembelian/lokasi"/>
    { (isload === true) ? <Loadwait /> :
        <CCardBody>
          <table>
            {
              details.map(([key, value], index) => {
                return (
                  <tbody  key={index.toString()}>
                    <tr>
                      <td>{`${key}:`}</td>
                      <td><strong>{value}</strong></td>
                    </tr>
                  </tbody>
                )
              })
            }
            </table>
        </CCardBody>
    }
      </CCard>
    </>
  )
}

export default Location;
