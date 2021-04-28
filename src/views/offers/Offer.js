import React, { useState, useEffect } from 'react';
import axiosConfig from "../../axios";
import {
  CCard,
  CCardBody,
} from '@coreui/react';

import Header from '../.components/CardHeader';
import Detail from './components/OfferDetail';
import Loadwait from '../.components/Loading';


const Offer = ({match}) => {

  const FileDownload = require('js-file-download');
  const id = match.params.id;
  const [ offerdata, setOfferdata ] = useState([{
    nama_pembeli: "",
    harga_total: "",
    status: ""
  }]);
  const [isload, setIsload] = useState(true)


  useEffect(() => {
    const getOffer = async () => {
      try {
        const offer = await axiosConfig.get(`/offers/${id}`);
        const data = offer.data;
        setOfferdata(data);
        setIsload(false);
      } catch(error) {

      }
    }
    // if (load == true){
      getOffer();
      // }
  }, [setOfferdata]);

  const handleDownload = (id, nama_pembeli) => {
    try {
      let headers = {responseType: 'blob' };
      axiosConfig.get(`/offers/export/${id}`, headers)
      .then((res) => {
        FileDownload(res.data, `${nama_pembeli}.docx` );
      });
    } catch(error) {
      console.log(error)
    }
  }

  console.log(offerdata);

  return (
    <>
      <CCard>
        <Header title="Produk Detail" type="kembali" link="/penawaran" print={true} handlePrint={(e) => handleDownload(id, offerdata.nama_pembeli)} />
        <CCardBody>
        { (isload === true) ? <Loadwait /> :
          <Detail data={offerdata}/>
        }
        </CCardBody>
      </CCard>
    </>
  )
}

export default Offer;
