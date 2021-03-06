import React, { useState, useEffect } from 'react';

import { CCard } from '@coreui/react'

import Form from './components/FormOffer';

import axiosConfig from "../../api/axios";
import Header from '../.components/CardHeader';


const AddOffers = () => {
  const [product, setProduct] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));
  let config = {
    headers : { Authorization: `Bearer ${token}` }
  };


  const getProducts = async () => {
    try {
      const products = await axiosConfig.get('/products', config);
      const data = products.data;
      setProduct(data);

    } catch (error){

    }
  }

  useEffect(() => {
    getProducts();
    // getGoingProducts();
    // getDepProducts();
  }, []);


  return (
  <CCard>
    <Header title="Menambahkan Penawaran" type="kembali" link="/penawaran" />
    <Form data_product={product}/>
  </CCard>
  )
}

export default AddOffers;
