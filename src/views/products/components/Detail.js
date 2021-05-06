import React from 'react';
import {
  CCol,
  CRow,
} from '@coreui/react'

const Detail = (props) => {

  const { data } = props;

  const temp = {
    model_produk : data.model_produk,
    type : data.type[0].name,
    status : data.status,
    harga_satuan : data.harga_satuan,
    manufacture : data.manufacture[0].name,
    foto_produk : data.detail.foto_produk,
    spesifikasi : data.detail.spesifikasi
  }

  const prodDetails = temp ? Object.entries(temp) :
  [['id', (<span> Loading ....</span>)]]

  return (
    <>
    <CRow>
      <CCol className="text-center mb-3">
      <img src={temp.foto_produk} alt={temp.model_produk} width="320px"/>
      </CCol>
    </CRow>
    {
      prodDetails.map(([key, value], index) => {
        return (
          <div key={index.toString()}>
            <CRow>
              <CCol md="2">
                {`${key}`}
              </CCol>
              <CCol md="10">
                :    <strong>{value}</strong>
              </CCol>
            </CRow>
          </div>
        )
      })
    }
    </>
  )
}

export default Detail;
