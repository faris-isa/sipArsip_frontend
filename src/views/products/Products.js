import React, {useState} from 'react';
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch,
//   } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react';

import TableProducts from './components/TableProducts';
import HeaderProducts from './components/HeaderProducts';

const Products = () => {
        
  return (
    <>
      <CCard>
        <CCardHeader>
          <HeaderProducts />
        </CCardHeader>
        <CCardBody>
          <TableProducts />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Products;
