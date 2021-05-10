import React, { useState, useEffect } from 'react';
import axiosConfig from "../../api/axios";
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import Header from '../.components/CardHeader';
import Detail from './components/PurchaseDetail';
import Loadwait from '../.components/Loading';


const Purchase = ({match}) => {

  const id = match.params.id;
  const [ purchasedata, setPurchasedata ] = useState({
    status: "",
    tawaran: [{
      nama_pembeli: "",
      harga_total: ""
    }],
    detail: [{
      model_produk: "",
      type_products: "",
      pivot: {
        serial_number: "",
        tanggal_beli: "",
        lokasi: "",
        masa_garansi: ""
      }
    }],
    not_products: [{
      model_produk: "",
      pivot: {
        serial_number: "",
        tanggal_beli: "",
        lokasi: "",
        masa_garansi: ""
      }
    }]
  });
  const [isload, setIsload] = useState(true);
  const token = JSON.parse(sessionStorage.getItem("token"));
  let config = {
    headers : { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    const getPurchase = async () => {
      try {
        await axiosConfig.get(`/purchases/${id}`, config).then((res) => {
          setPurchasedata(res.data);
          setIsload(false)
        })
      } catch(error) {

      }
    }
    getPurchase()
  }, [setPurchasedata]);

  return (
    <>
      <CCard>
        <Header title="Pembelian Detail" type="kembali" link="/pembelian"/>
        <CCardBody>
        { (isload === true) ? <Loadwait /> :
          <Detail data={purchasedata}/>
        }
        </CCardBody>
      </CCard>
    </>
  )
}

export default Purchase;
