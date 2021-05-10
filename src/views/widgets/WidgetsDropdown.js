import React, { useEffect, useState } from 'react';
import {
  CWidgetDropdown,
  CRow,
  CCol,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import axiosConfig from '../../api/axios';

const WidgetsDropdown = () => {

  const [countprod, setCountprod]=useState();
  const [countoff, setCountoff]=useState();
  const [offacc, setOffacc]=useState();
  const [offdec, setOffdec]=useState();
  const token = JSON.parse(sessionStorage.getItem("token"));
  let config = {
    headers : { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    axiosConfig.get('/products', config).then((res) => {
        const countProduct = res.data.length;
        return setCountprod(countProduct.toString());
    })
    axiosConfig.get('/offers', config).then((res) => {
      const temp = res.data;
      const temp1 = temp.reduce((counter, obj) => {
        if(obj.status === "accept")counter += 1
        return counter;
      }, 0)
      setOffacc(temp1.toString());
      const temp2 = temp.reduce((counter, obj) => {
        if(obj.status === "decline")counter += 1
        return counter;
      }, 0)
      setOffdec(temp2.toString());
      const countOffer = res.data.length;
      return setCountoff(countOffer.toString());
  })
//   axiosConfig.get('/offers', headers).then((res) => {
//     const temp = res.data;
//     const temp1 = temp.reduce((counter, obj) => {
//       if(obj.status === "decline")counter += 1
//       return counter;
//     }, 0)
//     return setOffdec(temp1.toString());
//   })
//   axiosConfig.get('/offers', headers).then((res) => {
//     const countOffer = res.data.length;
//     return setCountoff(countOffer.toString());
// })
}, [setCountprod, setOffacc, setOffdec, setCountoff])
//   useEffect(() => {
//     axiosConfig.get('/offers', null, headers).then((res) => {
//         const temp = res.data;
//         const temp1 = temp.reduce((counter, obj) => {
//           if(obj.status === "accept")counter += 1
//           return counter;
//         }, 0)
//         return setOffacc(temp1.toString());
//     })
// }, [setOffacc] )
//   useEffect(() => {
//     axiosConfig.get('/offers', headers).then((res) => {
//       const temp = res.data;
//       const temp1 = temp.reduce((counter, obj) => {
//         if(obj.status === "decline")counter += 1
//         return counter;
//       }, 0)
//       return setOffdec(temp1.toString());
//     })
// }, [setOffdec])
//   useEffect(() => {
//     axiosConfig.get('/offers', headers).then((res) => {
//       const countOffer = res.data.length;
//       return setCountoff(countOffer.toString());
//   })
// }, [setCountoff])

  // render
  return (
    <CRow>
      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-info"
          header={countprod}
          text="Banyak Produk"
        >
          <CIcon className="float-right" size={'4xl'} name="cil-layers" />
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-success"
          header={offacc}
          text="Penawaran Berhasil"
        >
          <CIcon className="float-right" size={'4xl'} name="cil-happy" />
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-warning"
          header={countoff}
          text="Penawaran Masuk"
        >
          <CIcon className="float-right" size={'4xl'} name="cil-transfer" />
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="6">
        <CWidgetDropdown
          color="gradient-danger"
          header={offdec}
          text="Penawaran Gagal"
        >
          <CIcon className="float-right" size={'4xl'} name="cil-sad" />
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
