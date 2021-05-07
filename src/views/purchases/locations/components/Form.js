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
  });

  // send data child -> parent
  useEffect(() => {
    value(val);
  });

const handleChange = (e) => {
  let target = e.target;
  let name = target.name;
  let value = target.value;
  if (name === "name"){
    const temp = {...val, name: value};
    setVal(temp);
  }
}


  return (
    <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={e => {submit(e)}}>
      <CFormGroup row>
        <LabelForm md="3" htmlfor="name" name="Nama Lokasi" />
        <CCol xs="12" md="9">
          <CInput id="name" name="name" placeholder="Masukkan Nama Lokasi" value={val.name} onChange={handleChange}/>
          <CFormText>Isian nama lokasi pembelian</CFormText>
        </CCol>
      </CFormGroup>
      <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
    </CForm>
  )
}

export default Form;
