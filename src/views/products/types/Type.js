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
    let config = {
      headers : { Authorization: `Bearer ${token}` }
    };
    const getType = async () => {
      try {
        await axiosConfig.get(`/types/${id}`, config).then(res => {
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

export default Type;
