import React, { useState, useEffect } from 'react';

import axiosConfig from "../../api/axios";

import { CCard, CCardBody } from '@coreui/react';

import Header from '../.components/CardHeader';
import Detail from './components/Detail';

import Loadwait from '../.components/Loading';


const Product = ({match}) => {

  const id = match.params.id;
  const [isload, setIsload] = useState(true)
  const [ data, setData ] = useState("");
  const token = JSON.parse(sessionStorage.getItem("token"));


  useEffect(() => {
    let config = {
      headers : { Authorization: `Bearer ${token}` }
    };
    const getProduct = async () => {
      try {
        await axiosConfig.get(`/products/${id}`, config).then((res) => {
          setData(res.data);
          setIsload(false);
        })
      } catch(error) {

      }
    }
    getProduct();
  }, [setData]);

  return (
    <>
      <CCard>
        <Header title="Produk Detail" type="kembali" link="/produk"/>
        <CCardBody>
          { (isload === true) ? <Loadwait /> :
            <Detail data={data}/>
          }
        </CCardBody>
      </CCard>
    </>
  )
}

export default Product;
