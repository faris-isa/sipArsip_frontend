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
    satuan: temp.satuan_hitung,
    code_satuan: temp.code_satuan_hitung,
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
  } else if (name === "nama_hitung"){
    const temp = {...val, satuan: value};
    setVal(temp);
  } else if (name === "code_hitung"){
    const temp = {...val, code_satuan: value};
    setVal(temp);
  }
}


  return (
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={e => {submit(e)}}>
      <CFormGroup row>
        <LabelForm md="3" htmlfor="nama_tipe" name="Tipe Produk" />
        <CCol xs="12" md="9">
          <CInput id="nama_tipe" name="nama_tipe" placeholder="Masukkan Nama Tipe Produk" value={val.name} onChange={handleChange}/>
          <CFormText>Isian nama tipe produk</CFormText>
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <LabelForm md="3" htmlfor="code_tipe" name="Kode Tipe Produk" />
        <CCol xs="12" md="9">
          <CInput id="code_tipe" name="code_tipe" placeholder="Masukkan Kode Tipe" value={val.code_name} minLength={3} maxLength={3} onChange={handleChange}/>
          <CFormText>Isian kode tipe produk</CFormText>
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <LabelForm md="3" htmlfor="nama_hitung" name="Hitungan Produk" />
        <CCol xs="12" md="9">
          <CInput id="nama_hitung" name="nama_hitung" placeholder="Masukkan Satuan" value={val.satuan} onChange={handleChange}/>
          <CFormText>Isian satuan hitungan tipe produk (Contoh: pieces)</CFormText>
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <LabelForm md="3" htmlfor="code_hitung" name="Kode Hitungan Produk" />
        <CCol xs="12" md="9">
          <CInput id="code_hitung" name="code_hitung" placeholder="Masukkan Kode Tipe" value={val.code_satuan} onChange={handleChange}/>
          <CFormText>Isian kode satuan hiitungan tipe produk (Contoh: pcs)</CFormText>
        </CCol>
      </CFormGroup>
      <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
    </CForm>
  )
}

export default Form;
