import React, {
    // useState 
} from 'react';
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';
import {
  CButton,
  CCol,
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';


const HeaderProducts = () => {

return (
    <CRow>
        <CCol sm="8">
            <h2 id="traffic" className="card-title mb-0">Daftar Produk</h2>
        </CCol>
        <CCol sm="4" className="d-none d-md-block">
            <Link to="/produk/tambah">
                <CButton color="primary" className="float-right">
                    <CIcon name="cil-plus"/> Tambah
                </CButton>
            </Link>
                <CButton color="link" className="float-right" disabled>
                    <CIcon name="cil-cloud-upload"/> Import
                </CButton>
        </CCol>
    </CRow>
)}


export default HeaderProducts;