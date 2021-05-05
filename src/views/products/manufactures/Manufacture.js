import React, { useState, useEffect } from 'react';

import axiosConfig from "../../../api/axios";

import { CCard, CCardBody } from '@coreui/react';

import Header from '../../.components/CardHeader';

import Loadwait from '../../.components/Loading';


const Type = ({match}) => {

  const id = match.params.id;
  const [isload, setIsload] = useState(true)
  const [ data, setData ] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));


  useEffect(() => {
    let headers = {
      authorization: `Bearer ${token}`,
    };
    const getData = async () => {
      try {
        await axiosConfig.get(`/manufactures/${id}`, headers)
        .then(res => {
          setData(res.data);
          setIsload(false);
        })
      } catch(error) {

      }
    }

    getData();
  }, [setData]);

  const details = data ? Object.entries(data) : <></>

  return (
    <>
      <CCard>
        <Header title="Detail Manufaktur Produk" type="kembali" link="/produk/manufaktur"/>
    { (isload === true) ? <Loadwait /> :
        <CCardBody>
          <table>
            {
              details.map(([key, value], index) => {
                return (
                    <tbody  key={index.toString()}>
                      <tr>
                        <td>{`${key} :`}</td>
                        <td><strong> {value}</strong></td>
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
