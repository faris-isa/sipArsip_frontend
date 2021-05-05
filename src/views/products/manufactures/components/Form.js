import React, { useState, useEffect } from 'react';
import {
  CForm,
  CCol,
  CFormGroup,
  CFormText,
  CInput,
  CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import LabelForm from '../../../.components/form/LabelForm';

const Form = (props) => {
  const { value, temp, submit } = props;

  const [val, setVal] = useState({
    name:  temp.name,
    code_name: temp.code_name,
  });

  // send data child -> parent
  useEffect(() => {
    value(val);
  });

const handleChange = (e) => {
  let target = e.target;
  let name = target.name;
  let value = target.value;
  if (name === "nama_tipe"){
    const temp = {...val, name: value};
    setVal(temp);
  } else if (name === "code_tipe"){
    const temp = {...val, code_name: value};
    setVal(temp);
  }
}


  return (
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={e => {submit(e)}}>
      <CFormGroup row>
        <LabelForm md="3" htmlfor="nama_tipe" name="Tipe Produk" />
        <CCol xs="12" md="9">
          <CInput id="nama_tipe" name="nama_tipe" placeholder="Masukkan Nama Tipe Produk" value={val.name} onChange={handleChange}/>
          <CFormText>Isian nama manufaktur produk</CFormText>
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <LabelForm md="3" htmlfor="code_tipe" name="Kode Tipe Produk" />
        <CCol xs="12" md="9">
          <CInput id="code_tipe" name="code_tipe" placeholder="Masukkan Kode Tipe" value={val.code_name} minLength={3} maxLength={3} onChange={handleChange}/>
          <CFormText>Isian kode manufaktur produk</CFormText>
        </CCol>
      </CFormGroup>
      <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
    </CForm>
  )
}

export default Form;
