import React, { useState } from 'react';
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import LabelForm from '../../.components/form/LabelForm';
import FormNvr from './form/FormNvr';
import FormIpcam from './form/FormIpCam';
import FormPoe from './form/FormPoe';

const FormProducts = () => {
  const [form, setForm] = useState(0);

  const [options, setOptions] = useState([
    { label: "Masukkan Tipe Produk", value: 0},
    { label: "NVR", value: "nvr" },
    { label: "IP Camera", value: "ipcam" },
    { label: "PoE Switch", value: "poeswt" }
  ]);

  const handleChange = event => {
    const value = event.target.value;
    setForm(value);

    // setForm(form => ({
    //   ...form.values, 
    //   value
    // })
    // )
  }

  return (
    <>
        <CCard>
        <CCardHeader>
            <CRow>
                <CCol sm="8">
                    <h2 id="traffic" className="card-title mb-0">Menambahkan Produk</h2>
                </CCol>
                <CCol sm="4" className="d-none d-md-block">
                    <Link to="/produk">
                        <CButton color="primary" className="float-right">
                            <CIcon name="cil-arrow-thick-left"/> Kembali
                        </CButton>
                    </Link>
                </CCol>
            </CRow>
            
        </CCardHeader>
        <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <CFormGroup row>
                <LabelForm md="3" htmlfor="select" name="Type"/>

                <CCol xs="12" md="9">
                <CSelect custom name="select" id="select" value={form.state} onChange={handleChange}>
                    {
                      options.map((o, i) => 
                      <option key={i} value={o.value}>{o.label}</option> )
                    }
                </CSelect>
                </CCol>
            </CFormGroup>
            { form === "nvr" && <FormNvr />}
            { form === "ipcam" && <FormIpcam />}
            { form === "poeswt" && <FormPoe />}
            </CForm>
        </CCardBody>
        <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
        </CCard>
    </>
  )
}

export default FormProducts;
