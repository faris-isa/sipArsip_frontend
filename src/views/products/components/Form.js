import React, { useState, useEffect } from 'react';
import {
  CButton,
  CForm,
  CCol,
  CFormGroup,
  CFormText,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CLabel,
  CSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import LabelForm from '../../.components/form/LabelForm';

const FormProducts = (props) => {
  const { temp, type, form, manufacture, submit } = props;

  const [val, setVal] = useState({
    model_produk:  temp.model_produk,
    product_type: temp.product_type_id,
    status: temp.status,
    harga_satuan: temp.harga_satuan,
    foto_produk: " ",
    product_manufacture: temp.detail.product_manufacture_id,
    spesifikasi: temp.detail.spesifikasi,
  });

  const optStatus = [
    {name: "Berjalan", value: "ongoing"},
    {name: "Usang", value: "depracated"},
  ]

  useEffect(() => {
    form(val);
  })

  const handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    if (name === "harga_satuan"){
      const temp = {...val, harga_satuan: value};
      setVal(temp);
    } else if (name === "model_produk"){
      const temp = {...val, model_produk: value};
      setVal(temp);
    } else if (name === "deskripsi_produk"){
      const temp = {...val, spesifikasi: value};
      setVal(temp);
    } else if (name === "foto_produk" ){
      let images = target.files;
      const temp = {...val, foto_produk: images[0]};
      setVal(temp);
    } else if ( name === "manufaktur_produk"){
      const temp = {...val, product_manufacture: value};
      setVal(temp);
    } else if (name === "tipe_produk"){
      const temp = {...val, product_type: value};
      setVal(temp);
    }
    // else if (name == "wdr"){ }
  }

  return (
    <>
      <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={e => {submit(e)}}>

        <CFormGroup row>
            <LabelForm md="3" htmlfor="text-input" name="Model Produk" />
            <CCol xs="12" md="9">
                <CInput id="text-input" name="model_produk" placeholder="Masukkan Model Produk" onChange={handleChange} value={val.model_produk} />
                <CFormText>Isian model produk</CFormText>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Tipe Produk"/>
            <CCol xs="12" md="9">
                <CSelect custom name="tipe_produk" id="tipe_produk" value={val.product_type} onChange={handleChange}>
                  <option value="0">--- Pilih Tipe Produk ---</option>
                    {
                    type.map((f, i) =>
                    <option key={i} value={f.id}>{f.name}({f.code_name})</option> )
                    }
                </CSelect>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Manufaktur Produk"/>
            <CCol xs="12" md="9">
                <CSelect custom name="manufaktur_produk" id="manufaktur_produk" value={val.product_manufacture} onChange={handleChange}>
                  <option value="0">--- Pilih Manufaktur Produk ---</option>
                    {
                    manufacture.map((f, i) =>
                    <option key={i} value={f.id}>{f.name}</option> )
                    }
                </CSelect>
            </CCol>
        </CFormGroup>

        <CFormGroup row>
            <LabelForm md="3" name="Status Produk"/>
            <CCol xs="12" md="9">
                <CSelect custom name="status" id="select" value={val.status} onChange={handleChange} disabled>
                    {
                    optStatus.map((f, i) =>
                    <option key={i} value={f.value}>{f.name}</option> )
                    }
                </CSelect>
            </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="textarea-input" name="Deskripsi Produk" onChange={handleChange}/>

            <CCol xs="12" md="9">
            <CTextarea
                name="deskripsi_produk"
                id="deskripsi_produk"
                rows="9"
                placeholder="Deskripsi produk..."
                onChange={handleChange}
                value={val.spesifikasi}
            />
            </CCol>
        </CFormGroup>

        <CFormGroup row>
          <LabelForm md="3" htmlfor="foto_produk" name="Gambar Produk"/>
          <CCol xs="12" md="9">
          <CInputFile id="foto_produk" name="foto_produk" onChange={handleChange}/>
          </CCol>
        </CFormGroup>

        <CFormGroup row>

            <LabelForm md="3" htmlfor="harga_satuan" name="Harga"/>

            <CCol xs="12" md="9">
            <CInput type="number" id="harga_satuan" name="harga_satuan" value={val.harga_satuan} placeholder="Masukkan Harga" onChange={handleChange}/>
            <CFormText>Isian harga (satuan ribu)</CFormText>
            </CCol>
        </CFormGroup>
      <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
      </CForm>
    </>
  )
}

export default FormProducts;
